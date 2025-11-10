/* ===========================
   SISTEMA DE TRADUÇÃO (i18n)
   =========================== */
const i18n = {
    'pt-BR': {
        years: 'Anos',
        months: 'Meses',
        weeks: 'Semanas',
        days: 'Dias',
        hours: 'Horas',
        minutes: 'Minutos',
        seconds: 'Segundos',
        since: 'Desde',
        monthiversary: '🎉 Mêsversário! Um mês a mais juntos!',
        anniversary: '🎊 Aniversário! {years} ano(s) juntos!',
        ourMoments: 'Nossos Momentos',
        ourMusic: 'Nossa música'
    }
};

/* ===========================
   CONFIGURAÇÕES PADRÃO
   =========================== */
const CONFIG_VERSION = '1.1'; // Versão da configuração para forçar reset quando necessário

const defaultConfig = {
    version: CONFIG_VERSION,
    person1: 'Carlos',
    person2: 'Bruna',
    status: 'Namorando',
    startDate: '2020-01-01',
    musicUrl: '',
    musicTitle: 'Nossa música',
    images: [], // Vazio por padrão - usuário adiciona suas próprias fotos
    theme: 'light',
    primaryColor: '#ff6b9d',
    fontFamily: 'system-ui, -apple-system, \'Segoe UI\', sans-serif',
    bgType: 'gradient',
    bgImage: '',
    dateFormat: 'pt-BR',
    timeFormat: '24',
    timezoneOffset: null,
    language: 'pt-BR'
};

/* ===========================
   ESTADO DA APLICAÇÃO
   =========================== */
let config = { ...defaultConfig };
let currentImageIndex = 0;
let galleryAutoplayInterval = null;
let audioElement = null;
let lastSpecialEventCheck = null;

/* ===========================
   INICIALIZAÇÃO
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎉 Iniciando aplicação de contagem de relacionamento...');
    
    // Verificar parâmetros de URL primeiro
    loadFromUrlParams();
    
    // Carregar configurações do localStorage (não sobrescreve se veio de URL)
    loadConfig();
    
    // Aplicar configurações à interface
    applyConfig();
    
    // Inicializar componentes
    initCounter();
    initGallery();
    initMusicPlayer();
    initSettingsModal();
    
    console.log('✅ Aplicação inicializada com sucesso!');
});

/* ===========================
   CARREGAMENTO DE CONFIGURAÇÕES
   =========================== */
function loadFromUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('date')) {
        const tempConfig = {
            startDate: urlParams.get('date'),
            person1: urlParams.get('p1') || defaultConfig.person1,
            person2: urlParams.get('p2') || defaultConfig.person2,
            status: urlParams.get('status') || defaultConfig.status
        };
        
        // Mostrar notificação de configuração importada
        if (confirm('Configurações detectadas na URL. Deseja carregar essas configurações?')) {
            Object.assign(config, tempConfig);
            saveConfig(); // Salvar no localStorage
        }
    }
}

function loadConfig() {
    try {
        const saved = localStorage.getItem('relationshipConfig');
        if (saved) {
            const parsed = JSON.parse(saved);
            
            // Verificar se a versão da config mudou - se sim, resetar para valores padrão
            if (!parsed.version || parsed.version !== CONFIG_VERSION) {
                console.log('🔄 Versão da configuração desatualizada. Aplicando padrões...');
                config = { ...defaultConfig };
                saveConfig(); // Salvar nova versão
                return;
            }
            
            // Mesclar com configurações padrão para garantir que novas propriedades existam
            config = { ...defaultConfig, ...parsed };
            console.log('📥 Configurações carregadas do localStorage');
        } else {
            console.log('📝 Usando configurações padrão');
        }
    } catch (error) {
        console.error('❌ Erro ao carregar configurações:', error);
        config = { ...defaultConfig };
    }
}

function saveConfig() {
    try {
        // Garantir que a versão está sempre atualizada
        config.version = CONFIG_VERSION;
        localStorage.setItem('relationshipConfig', JSON.stringify(config));
        console.log('💾 Configurações salvas');
    } catch (error) {
        console.error('❌ Erro ao salvar configurações:', error);
        alert('Erro ao salvar configurações. Verifique o armazenamento do navegador.');
    }
}

function applyConfig() {
    // Aplicar tema
    document.documentElement.setAttribute('data-theme', config.theme);
    
    // Aplicar cor primária
    document.documentElement.style.setProperty('--primary', config.primaryColor);
    
    // Aplicar fonte
    document.documentElement.style.setProperty('--font-family', config.fontFamily);
    
    // Aplicar background
    applyBackground();
    
    // Atualizar nomes e status
    updateCoupleInfo();
    
    console.log('🎨 Configurações aplicadas à interface');
}

function applyBackground() {
    const body = document.body;
    
    switch (config.bgType) {
        case 'solid':
            body.style.background = config.theme === 'dark' ? '#1a1a1a' : '#fafafa';
            break;
        case 'gradient':
            body.style.background = config.theme === 'dark'
                ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                : 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)';
            break;
        case 'image':
            if (config.bgImage) {
                body.style.background = `url('${config.bgImage}') center/cover fixed`;
            }
            break;
    }
}

function updateCoupleInfo() {
    const coupleNames = document.getElementById('coupleNames');
    const relationshipStatus = document.getElementById('relationshipStatus');
    const sinceDate = document.getElementById('sinceDate');
    
    coupleNames.textContent = `${config.person1} ❤️ ${config.person2}`;
    relationshipStatus.textContent = config.status;
    
    // Formatar data inicial
    const startDate = new Date(config.startDate + 'T00:00:00');
    const formatted = formatDate(startDate);
    sinceDate.textContent = `Desde ${formatted}`;
}

/* ===========================
   SISTEMA DE CONTAGEM DE TEMPO
   =========================== */
function initCounter() {
    // Atualizar imediatamente
    updateCounter();
    
    // Atualizar a cada 500ms para precisão
    setInterval(updateCounter, 500);
}

function updateCounter() {
    const start = new Date(config.startDate + 'T00:00:00');
    const now = getCurrentTime();
    
    // Calcular diferenças
    const timeDiff = calculateTimeDifference(start, now);
    
    // Atualizar interface
    document.getElementById('years').textContent = timeDiff.years;
    document.getElementById('months').textContent = timeDiff.months;
    document.getElementById('weeks').textContent = timeDiff.weeks;
    document.getElementById('days').textContent = timeDiff.days;
    document.getElementById('hours').textContent = String(timeDiff.hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(timeDiff.minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(timeDiff.seconds).padStart(2, '0');
    
    // Verificar eventos especiais
    checkSpecialEvents(start, now, timeDiff);
}

/**
 * Calcula a diferença de tempo considerando calendário real
 * Algoritmo: 
 * 1. Calcular anos completos
 * 2. Calcular meses completos no ano restante
 * 3. Calcular dias no mês restante
 * 4. Derivar semanas, horas, minutos, segundos do restante
 */
function calculateTimeDifference(start, end) {
    let years = 0;
    let months = 0;
    let days = 0;
    
    // Clonar data inicial para manipulação
    let current = new Date(start);
    
    // Calcular anos completos
    while (true) {
        const nextYear = new Date(current);
        nextYear.setFullYear(nextYear.getFullYear() + 1);
        if (nextYear <= end) {
            years++;
            current = nextYear;
        } else {
            break;
        }
    }
    
    // Calcular meses completos
    while (true) {
        const nextMonth = new Date(current);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        if (nextMonth <= end) {
            months++;
            current = nextMonth;
        } else {
            break;
        }
    }
    
    // Calcular dias restantes
    const msPerDay = 1000 * 60 * 60 * 24;
    const remainingMs = end - current;
    const totalRemainingDays = Math.floor(remainingMs / msPerDay);
    
    // Semanas completas (exibir junto com anos/meses, não apenas do resto)
    const totalDaysFromStart = Math.floor((end - start) / msPerDay);
    const totalWeeks = Math.floor(totalDaysFromStart / 7);
    
    // Dias apenas do mês atual (após anos e meses)
    days = totalRemainingDays;
    
    // Horas, minutos, segundos do restante do dia
    const remainingMsInDay = remainingMs % msPerDay;
    const hours = Math.floor(remainingMsInDay / (1000 * 60 * 60));
    const minutes = Math.floor((remainingMsInDay % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingMsInDay % (1000 * 60)) / 1000);
    
    return {
        years,
        months,
        weeks: totalWeeks,
        days,
        hours,
        minutes,
        seconds
    };
}

function getCurrentTime() {
    const now = new Date();
    
    // Aplicar offset de fuso horário se configurado
    if (config.timezoneOffset !== null && config.timezoneOffset !== '') {
        const offset = parseInt(config.timezoneOffset);
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        return new Date(utc + (3600000 * offset));
    }
    
    return now;
}

function checkSpecialEvents(start, now, timeDiff) {
    const startDay = start.getDate();
    const startMonth = start.getMonth();
    const nowDay = now.getDate();
    const nowMonth = now.getMonth();
    
    // Verificar se já mostramos evento hoje
    const today = now.toDateString();
    if (lastSpecialEventCheck === today) {
        return;
    }
    
    const specialEvent = document.getElementById('specialEvent');
    const eventMessage = document.getElementById('eventMessage');
    
    // Aniversário de anos (mesmo dia e mês)
    if (nowDay === startDay && nowMonth === startMonth && timeDiff.years > 0) {
        eventMessage.textContent = `🎊 Aniversário de ${timeDiff.years} ano${timeDiff.years > 1 ? 's' : ''} juntos!`;
        specialEvent.style.display = 'block';
        lastSpecialEventCheck = today;
        return;
    }
    
    // Mêsversário (mesmo dia do mês)
    if (nowDay === startDay) {
        eventMessage.textContent = '🎉 Mêsversário! Mais um mês de amor!';
        specialEvent.style.display = 'block';
        lastSpecialEventCheck = today;
        return;
    }
    
    // Esconder se não for evento especial
    specialEvent.style.display = 'none';
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(config.dateFormat, options);
}

/* ===========================
   GALERIA DE IMAGENS
   =========================== */
function initGallery() {
    renderGallery();
    
    // Navegação
    document.getElementById('galleryPrev').addEventListener('click', () => navigateGallery(-1));
    document.getElementById('galleryNext').addEventListener('click', () => navigateGallery(1));
    
    // Autoplay (opcional, pausado ao interagir)
    startGalleryAutoplay();
}

function renderGallery() {
    const track = document.getElementById('galleryTrack');
    const dots = document.getElementById('galleryDots');
    
    // Limpar
    track.innerHTML = '';
    dots.innerHTML = '';
    
    if (config.images.length === 0) {
        track.innerHTML = `
            <div class="gallery-item gallery-empty">
                <div class="empty-gallery-message">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">📸</div>
                    <h3 style="margin-bottom: 0.5rem;">Adicione suas fotos</h3>
                    <p style="opacity: 0.8;">Clique em "⚙️ Ajustes" > "Mídia" para adicionar suas fotos da galeria</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Renderizar imagens
    config.images.forEach((imageUrl, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Foto ${index + 1}`;
        img.onerror = () => {
            img.src = './assets/placeholder.jpg';
        };
        
        item.appendChild(img);
        track.appendChild(item);
        
        // Criar dot
        const dot = document.createElement('button');
        dot.className = 'gallery-dot';
        dot.setAttribute('aria-label', `Ver imagem ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentImageIndex = index;
            updateGalleryPosition();
        });
        dots.appendChild(dot);
    });
    
    updateGalleryPosition();
}

function navigateGallery(direction) {
    stopGalleryAutoplay();
    currentImageIndex = (currentImageIndex + direction + config.images.length) % config.images.length;
    updateGalleryPosition();
    startGalleryAutoplay();
}

function updateGalleryPosition() {
    const track = document.getElementById('galleryTrack');
    const dots = document.querySelectorAll('.gallery-dot');
    
    track.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageIndex);
    });
}

function startGalleryAutoplay() {
    if (config.images.length <= 1) return;
    
    stopGalleryAutoplay();
    galleryAutoplayInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % config.images.length;
        updateGalleryPosition();
    }, 5000); // Trocar a cada 5 segundos
}

function stopGalleryAutoplay() {
    if (galleryAutoplayInterval) {
        clearInterval(galleryAutoplayInterval);
        galleryAutoplayInterval = null;
    }
}

/* ===========================
   PLAYER DE MÚSICA
   =========================== */
function initMusicPlayer() {
    audioElement = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const musicTitle = document.getElementById('musicTitle');
    
    // Configurar música
    if (config.musicUrl) {
        audioElement.src = config.musicUrl;
        musicTitle.textContent = config.musicTitle || 'Nossa música';
    }
    
    // Volume inicial
    audioElement.volume = volumeSlider.value / 100;
    
    // Play/Pause
    playPauseBtn.addEventListener('click', togglePlayPause);
    
    // Mute
    muteBtn.addEventListener('click', toggleMute);
    
    // Volume
    volumeSlider.addEventListener('input', (e) => {
        audioElement.volume = e.target.value / 100;
        updateMuteIcon();
    });
    
    // Loop
    audioElement.loop = true;
    
    // Erro ao carregar
    audioElement.addEventListener('error', () => {
        console.error('❌ Erro ao carregar música');
        musicTitle.textContent = 'Erro ao carregar música';
    });
    
    // Metadados carregados
    audioElement.addEventListener('loadedmetadata', () => {
        console.log('🎵 Música carregada');
    });
}

function togglePlayPause() {
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    
    if (audioElement.paused) {
        audioElement.play().catch(error => {
            console.error('❌ Erro ao reproduzir:', error);
            alert('Não foi possível reproduzir a música. Interaja com a página primeiro.');
        });
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audioElement.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}

function toggleMute() {
    audioElement.muted = !audioElement.muted;
    updateMuteIcon();
}

function updateMuteIcon() {
    const volumeIcon = document.querySelector('.volume-icon');
    const muteIcon = document.querySelector('.mute-icon');
    
    if (audioElement.muted || audioElement.volume === 0) {
        volumeIcon.style.display = 'none';
        muteIcon.style.display = 'block';
    } else {
        volumeIcon.style.display = 'block';
        muteIcon.style.display = 'none';
    }
}

/* ===========================
   MODAL DE CONFIGURAÇÕES
   =========================== */
function initSettingsModal() {
    const modal = document.getElementById('settingsModal');
    const openBtn = document.getElementById('settingsBtn');
    const closeBtn = document.getElementById('closeModal');
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    // Abrir modal
    openBtn.addEventListener('click', () => {
        openSettingsModal();
    });
    
    // Fechar modal
    closeBtn.addEventListener('click', closeSettingsModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSettingsModal();
    });
    
    // ESC para fechar
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeSettingsModal();
        }
    });
    
    // Salvar
    saveBtn.addEventListener('click', saveSettings);
    
    // Resetar
    resetBtn.addEventListener('click', () => {
        if (confirm('Deseja realmente resetar todas as configurações?')) {
            config = { ...defaultConfig };
            saveConfig();
            applyConfig();
            loadSettingsToForm();
            renderGallery();
            alert('Configurações resetadas!');
        }
    });
    
    // Tabs
    initTabs();
    
    // Campos especiais
    initSettingsFields();
}

function openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    loadSettingsToForm();
    document.body.style.overflow = 'hidden';
}

function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');
            
            // Ativar tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Mostrar conteúdo
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });
}

function initSettingsFields() {
    // Tipo de background
    const bgTypeSelect = document.getElementById('bgType');
    const bgImageGroup = document.getElementById('bgImageGroup');
    
    bgTypeSelect.addEventListener('change', () => {
        bgImageGroup.style.display = bgTypeSelect.value === 'image' ? 'block' : 'none';
    });
    
    // Upload de imagens do celular/galeria
    document.getElementById('uploadImageFile').addEventListener('change', (e) => {
        const files = e.target.files;
        if (files.length === 0) return;
        
        console.log(`📸 ${files.length} foto(s) selecionada(s)`);
        
        // Processar cada arquivo
        Array.from(files).forEach((file, index) => {
            // Validar tipo de arquivo
            if (!file.type.startsWith('image/')) {
                alert(`Arquivo ${file.name} não é uma imagem válida.`);
                return;
            }
            
            // Validar tamanho (máximo 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert(`Imagem ${file.name} é muito grande (máx 5MB). Comprima antes de adicionar.`);
                return;
            }
            
            // Ler arquivo e converter para Base64
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64Image = event.target.result;
                config.images.push(base64Image);
                
                console.log(`✅ Imagem ${index + 1} adicionada (${(file.size / 1024).toFixed(0)}KB)`);
                
                // Atualizar lista quando todas as imagens forem processadas
                if (index === files.length - 1) {
                    renderImageList();
                    alert(`✅ ${files.length} foto(s) adicionada(s) com sucesso!`);
                }
            };
            
            reader.onerror = () => {
                alert(`❌ Erro ao ler arquivo ${file.name}`);
            };
            
            reader.readAsDataURL(file);
        });
        
        // Limpar input
        e.target.value = '';
    });
    
    // Adicionar imagem por URL
    document.getElementById('addImageBtn').addEventListener('click', () => {
        const input = document.getElementById('newImageUrl');
        const url = input.value.trim();
        
        if (url) {
            config.images.push(url);
            input.value = '';
            renderImageList();
            alert('✅ Imagem adicionada!');
        }
    });
    
    // Exportar configurações
    document.getElementById('exportBtn').addEventListener('click', exportConfig);
    
    // Importar configurações
    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('importFile').click();
    });
    
    document.getElementById('importFile').addEventListener('change', importConfig);
    
    // Compartilhar
    document.getElementById('shareBtn').addEventListener('click', generateShareUrl);
}

function loadSettingsToForm() {
    // Geral
    document.getElementById('person1Name').value = config.person1;
    document.getElementById('person2Name').value = config.person2;
    document.getElementById('relationshipStatusSelect').value = config.status;
    document.getElementById('startDate').value = config.startDate;
    
    // Mídia
    document.getElementById('musicUrl').value = config.musicUrl;
    document.getElementById('musicTitle').value = config.musicTitle;
    renderImageList();
    
    // Aparência
    document.getElementById('theme').value = config.theme;
    document.getElementById('primaryColor').value = config.primaryColor;
    document.getElementById('fontFamily').value = config.fontFamily;
    document.getElementById('bgType').value = config.bgType;
    document.getElementById('bgImage').value = config.bgImage;
    document.getElementById('bgImageGroup').style.display = config.bgType === 'image' ? 'block' : 'none';
    
    // Avançado
    document.getElementById('dateFormat').value = config.dateFormat;
    document.getElementById('timeFormat').value = config.timeFormat;
    document.getElementById('timezoneOffset').value = config.timezoneOffset || '';
}

function renderImageList() {
    const list = document.getElementById('imageList');
    list.innerHTML = '';
    
    config.images.forEach((url, index) => {
        const item = document.createElement('div');
        item.className = 'image-item';
        
        const span = document.createElement('span');
        span.textContent = url;
        
        const controls = document.createElement('div');
        controls.className = 'image-item-controls';
        
        // Mover para cima
        if (index > 0) {
            const upBtn = document.createElement('button');
            upBtn.textContent = '↑';
            upBtn.setAttribute('aria-label', 'Mover para cima');
            upBtn.addEventListener('click', () => {
                [config.images[index], config.images[index - 1]] = [config.images[index - 1], config.images[index]];
                renderImageList();
            });
            controls.appendChild(upBtn);
        }
        
        // Mover para baixo
        if (index < config.images.length - 1) {
            const downBtn = document.createElement('button');
            downBtn.textContent = '↓';
            downBtn.setAttribute('aria-label', 'Mover para baixo');
            downBtn.addEventListener('click', () => {
                [config.images[index], config.images[index + 1]] = [config.images[index + 1], config.images[index]];
                renderImageList();
            });
            controls.appendChild(downBtn);
        }
        
        // Remover
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '🗑️';
        removeBtn.setAttribute('aria-label', 'Remover');
        removeBtn.addEventListener('click', () => {
            config.images.splice(index, 1);
            renderImageList();
        });
        controls.appendChild(removeBtn);
        
        item.appendChild(span);
        item.appendChild(controls);
        list.appendChild(item);
    });
}

function saveSettings() {
    // Coletar valores do formulário
    config.person1 = document.getElementById('person1Name').value || defaultConfig.person1;
    config.person2 = document.getElementById('person2Name').value || defaultConfig.person2;
    config.status = document.getElementById('relationshipStatusSelect').value;
    config.startDate = document.getElementById('startDate').value;
    
    console.log('💾 Salvando configurações:', { person1: config.person1, person2: config.person2, status: config.status });
    
    config.musicUrl = document.getElementById('musicUrl').value;
    config.musicTitle = document.getElementById('musicTitle').value;
    
    config.theme = document.getElementById('theme').value;
    config.primaryColor = document.getElementById('primaryColor').value;
    config.fontFamily = document.getElementById('fontFamily').value;
    config.bgType = document.getElementById('bgType').value;
    config.bgImage = document.getElementById('bgImage').value;
    
    config.dateFormat = document.getElementById('dateFormat').value;
    config.timeFormat = document.getElementById('timeFormat').value;
    const tzOffset = document.getElementById('timezoneOffset').value;
    config.timezoneOffset = tzOffset === '' ? null : parseInt(tzOffset);
    
    // Validar data
    if (!config.startDate) {
        alert('Por favor, defina uma data inicial.');
        return;
    }
    
    // Salvar e aplicar
    saveConfig();
    applyConfig();
    updateCoupleInfo(); // Atualizar nomes e status na frente
    renderGallery();
    
    // Atualizar música se mudou
    if (audioElement.src !== config.musicUrl && config.musicUrl) {
        audioElement.src = config.musicUrl;
        audioElement.load();
    }
    
    closeSettingsModal();
    alert('✅ Configurações salvas com sucesso!');
}

function exportConfig() {
    const dataStr = JSON.stringify(config, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'configuracoes-relacionamento.json';
    link.click();
    
    URL.revokeObjectURL(url);
    alert('✅ Configurações exportadas!');
}

function importConfig(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            
            if (confirm('Deseja importar essas configurações? Isso substituirá suas configurações atuais.')) {
                config = { ...defaultConfig, ...imported };
                saveConfig();
                applyConfig();
                loadSettingsToForm();
                renderGallery();
                alert('✅ Configurações importadas com sucesso!');
            }
        } catch (error) {
            console.error('❌ Erro ao importar:', error);
            alert('❌ Erro ao importar arquivo. Verifique se é um JSON válido.');
        }
    };
    
    reader.readAsText(file);
    event.target.value = ''; // Reset input
}

function generateShareUrl() {
    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
        date: config.startDate,
        p1: config.person1,
        p2: config.person2,
        status: config.status
    });
    
    const shareUrl = `${baseUrl}?${params.toString()}`;
    const input = document.getElementById('shareUrl');
    
    input.value = shareUrl;
    input.style.display = 'block';
    input.select();
    
    // Tentar copiar para clipboard
    try {
        navigator.clipboard.writeText(shareUrl);
        alert('✅ Link copiado para a área de transferência!');
    } catch (error) {
        alert('Link gerado! Copie manualmente do campo abaixo.');
    }
}

/* ===========================
   UTILITÁRIOS
   =========================== */

// Detectar suporte a recursos
function checkBrowserSupport() {
    if (!window.localStorage) {
        console.warn('⚠️ localStorage não suportado');
    }
    
    if (!window.URLSearchParams) {
        console.warn('⚠️ URLSearchParams não suportado');
    }
}

checkBrowserSupport();

// Log de inicialização
console.log(`
╔══════════════════════════════════════╗
║   💕 Site de Contagem de Amor 💕    ║
║                                      ║
║   Desenvolvido com carinho          ║
║   Versão: 1.0.0                     ║
║   Todas as configurações são        ║
║   armazenadas localmente            ║
╚══════════════════════════════════════╝
`);
