# 🔧 Guia Técnico e de Personalização Avançada

## Arquitetura do Projeto

### Estrutura de Dados

O projeto usa `localStorage` para persistir configurações com a seguinte estrutura:

```javascript
{
  "person1": "Carlos",
  "person2": "Ana",
  "status": "Namorando",
  "startDate": "2020-01-01",
  "musicUrl": "",
  "musicTitle": "Nossa música",
  "images": ["./assets/photo1.jpg", "./assets/photo2.jpg"],
  "theme": "light",
  "primaryColor": "#ff6b9d",
  "fontFamily": "system-ui, -apple-system, 'Segoe UI', sans-serif",
  "bgType": "gradient",
  "bgImage": "",
  "dateFormat": "pt-BR",
  "timeFormat": "24",
  "timezoneOffset": null,
  "language": "pt-BR"
}
```

### Fluxo de Execução

1. **Inicialização** (`DOMContentLoaded`)
   - Verificar parâmetros de URL
   - Carregar configurações do localStorage
   - Aplicar tema e estilos
   - Inicializar componentes

2. **Atualização do Contador** (a cada 500ms)
   - Calcular diferença de tempo
   - Atualizar DOM
   - Verificar eventos especiais

3. **Persistência**
   - Salvar no localStorage a cada mudança
   - Sincronizar com a interface

## Algoritmo de Contagem Detalhado

```javascript
function calculateTimeDifference(start, end) {
  // 1. Clonar data inicial
  let current = new Date(start);
  let years = 0, months = 0;
  
  // 2. Incrementar anos até não poder mais
  while (true) {
    const nextYear = new Date(current);
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    if (nextYear <= end) {
      years++;
      current = nextYear;
    } else break;
  }
  
  // 3. Incrementar meses até não poder mais
  while (true) {
    const nextMonth = new Date(current);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    if (nextMonth <= end) {
      months++;
      current = nextMonth;
    } else break;
  }
  
  // 4. Calcular restante em milissegundos
  const remaining = end - current;
  
  // 5. Derivar unidades menores
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  
  // 6. Calcular semanas totais desde o início
  const totalDays = Math.floor((end - start) / 86400000);
  const weeks = Math.floor(totalDays / 7);
  
  return { years, months, weeks, days, hours, minutes, seconds };
}
```

### Por que este algoritmo?

- ✅ Considera meses de tamanhos variados (28, 29, 30, 31 dias)
- ✅ Lida corretamente com anos bissextos
- ✅ Não sofre drift de precisão
- ✅ Semanas são calculadas do total, não apenas do resto

## Personalização Avançada

### Adicionar Novos Idiomas

Edite o objeto `i18n` em `script.js`:

```javascript
const i18n = {
  'pt-BR': { /* ... */ },
  'en-US': {
    years: 'Years',
    months: 'Months',
    weeks: 'Weeks',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    since: 'Since',
    monthiversary: '🎉 Monthiversary! One more month together!',
    anniversary: '🎊 Anniversary! {years} year(s) together!'
  },
  'es-ES': {
    years: 'Años',
    months: 'Meses',
    // ...
  }
};
```

### Adicionar Novos Temas de Cores

Em `styles.css`, adicione novas variáveis:

```css
[data-theme="romantic"] {
  --bg: #fff0f5;
  --surface: #ffe4e9;
  --text: #4a0e1e;
  --primary: #ff1493;
}

[data-theme="ocean"] {
  --bg: #e0f7fa;
  --surface: #b2ebf2;
  --text: #006064;
  --primary: #00bcd4;
}
```

Em `script.js`, adicione as opções no `select`:

```javascript
// No HTML, adicione novos options:
<option value="romantic">Romântico</option>
<option value="ocean">Oceano</option>
```

### Modificar Velocidade do Autoplay da Galeria

Em `script.js`, localize a função `startGalleryAutoplay`:

```javascript
function startGalleryAutoplay() {
  // Mudar de 5000 para o valor desejado (em milissegundos)
  galleryAutoplayInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % config.images.length;
    updateGalleryPosition();
  }, 5000); // ← Alterar aqui
}
```

### Adicionar Animações Customizadas

Em `styles.css`, adicione novas animações:

```css
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.counter-item:hover {
  animation: heartbeat 0.5s ease infinite;
}
```

### Eventos Especiais Customizados

Em `script.js`, adicione na função `checkSpecialEvents`:

```javascript
function checkSpecialEvents(start, now, timeDiff) {
  // ... código existente ...
  
  // Adicionar evento a cada 100 dias
  const totalDays = Math.floor((now - start) / 86400000);
  if (totalDays % 100 === 0 && totalDays > 0) {
    eventMessage.textContent = `🎉 ${totalDays} dias juntos!`;
    specialEvent.style.display = 'block';
    return;
  }
  
  // Adicionar evento de 1000 horas
  const totalHours = Math.floor((now - start) / 3600000);
  if (totalHours === 1000) {
    eventMessage.textContent = '⏰ 1000 horas juntos!';
    specialEvent.style.display = 'block';
    return;
  }
}
```

## Otimizações de Performance

### Reduzir Uso de Memória

Se você tem muitas imagens, considere lazy loading:

```javascript
// Em renderGallery():
img.loading = 'lazy';
```

### Otimizar Atualização do Contador

Para reduzir uso de CPU em dispositivos lentos:

```javascript
// Mudar de 500ms para 1000ms
setInterval(updateCounter, 1000);
```

### Desabilitar Autoplay da Galeria

```javascript
// Comentar a linha em initGallery():
// startGalleryAutoplay();
```

## Integração com Serviços Externos

### Google Analytics

Adicione antes do `</head>` em `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

### Spotify Embed

Para substituir o player de áudio por um embed do Spotify:

```html
<!-- Substituir o audio element por: -->
<iframe 
  src="https://open.spotify.com/embed/track/TRACK_ID" 
  width="100%" 
  height="80" 
  frameborder="0" 
  allowtransparency="true" 
  allow="encrypted-media">
</iframe>
```

### Cloudinary para Imagens

Para otimizar imagens automaticamente:

1. Faça upload para [Cloudinary](https://cloudinary.com)
2. Use URLs otimizadas:

```javascript
// Exemplo de URL do Cloudinary com transformações
const imageUrl = 'https://res.cloudinary.com/seu-cloud/image/upload/w_800,q_auto,f_auto/sua-imagem.jpg';
```

## Recursos Adicionais

### PWA (Progressive Web App)

Para transformar em app instalável, crie `manifest.json`:

```json
{
  "name": "Nosso Tempo Juntos",
  "short_name": "Amor",
  "description": "Contador de tempo de relacionamento",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ff6b9d",
  "theme_color": "#ff6b9d",
  "icons": [
    {
      "src": "./assets/favicon.png",
      "sizes": "64x64",
      "type": "image/png"
    }
  ]
}
```

E adicione no `<head>`:

```html
<link rel="manifest" href="manifest.json">
```

### Service Worker (Offline)

Crie `sw.js`:

```javascript
const CACHE_NAME = 'love-counter-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/assets/photo1.jpg',
  '/assets/photo2.jpg',
  '/assets/photo3.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

Registre no final de `script.js`:

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('✅ Service Worker registrado'))
    .catch(err => console.error('❌ Erro:', err));
}
```

## Debugging

### Console Logs

O projeto já inclui logs informativos. Para ver:

1. Abra o DevTools (F12)
2. Vá para a aba Console
3. Veja mensagens de inicialização, salvamento, etc.

### Verificar localStorage

No Console do DevTools:

```javascript
// Ver configurações salvas
JSON.parse(localStorage.getItem('relationshipConfig'))

// Limpar configurações
localStorage.removeItem('relationshipConfig')

// Ver tamanho usado
JSON.stringify(localStorage).length
```

### Performance

No DevTools > Performance, grave uma sessão e analise:
- Tempo de renderização
- Uso de CPU
- Frames por segundo

## Variáveis CSS Disponíveis

```css
--primary: #ff6b9d;           /* Cor primária */
--primary-light: #ffb3d4;     /* Variante clara */
--primary-dark: #e85382;      /* Variante escura */
--bg: #fafafa;                /* Background geral */
--surface: #ffffff;           /* Cards/superfícies */
--text: #2d2d2d;              /* Texto principal */
--text-secondary: #666666;    /* Texto secundário */
--border: #e0e0e0;            /* Bordas */
--shadow: rgba(0,0,0,0.1);    /* Sombras */

--spacing-xs: 0.5rem;         /* 8px */
--spacing-sm: 1rem;           /* 16px */
--spacing-md: 1.5rem;         /* 24px */
--spacing-lg: 2rem;           /* 32px */
--spacing-xl: 3rem;           /* 48px */

--radius: 12px;               /* Border radius padrão */
--radius-sm: 8px;             /* Pequeno */
--radius-lg: 16px;            /* Grande */

--transition: 0.3s ease;      /* Transição padrão */
```

## FAQ Técnico

### Como adicionar mais contadores?

No HTML, adicione novos `counter-item`:

```html
<div class="counter-item">
  <span class="counter-value" id="totalDays">0</span>
  <span class="counter-label">Dias Totais</span>
</div>
```

No JS, calcule e atualize:

```javascript
const totalDays = Math.floor((now - start) / 86400000);
document.getElementById('totalDays').textContent = totalDays;
```

### Como mudar as unidades exibidas?

Edite a seção de `counter-grid` no HTML e ajuste o JS correspondente.

### Como adicionar sons nos eventos especiais?

```javascript
// Adicionar elemento de áudio
const celebrationSound = new Audio('./assets/celebration.mp3');

// Tocar quando detectar evento
if (/* evento especial */) {
  celebrationSound.play();
}
```

### Como adicionar mais status de relacionamento?

No HTML (modal):

```html
<option value="Ficando">Ficando</option>
<option value="Compromissados">Compromissados</option>
```

## Contribuindo

Se você melhorar este projeto, considere:

1. Documentar suas mudanças
2. Testar em diferentes navegadores
3. Compartilhar com a comunidade

## Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org) - Documentação web
- [Can I Use](https://caniuse.com) - Compatibilidade de recursos
- [CSS Tricks](https://css-tricks.com) - Dicas de CSS
- [JavaScript.info](https://javascript.info) - Tutoriais JS

---

**Precisa de ajuda?** Revise o código comentado ou abra uma issue no repositório.
