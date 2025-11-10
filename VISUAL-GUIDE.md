# 🎨 Guia Visual do Site

Este documento descreve visualmente como cada seção do site funciona.

## 📐 Layout Geral

```
┌─────────────────────────────────────────────────────┐
│ HEADER                                              │
│ ❤️ Nosso Tempo              [⚙️ Ajustes]          │
├─────────────────────────────────────────────────────┤
│                                                     │
│ HERO - CONTADOR PRINCIPAL                          │
│         (Fundo gradiente rosa)                     │
│                                                     │
│              Carlos ❤️ Ana                         │
│                Namorando                            │
│                                                     │
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         │
│  │   2   │ │   6   │ │  115  │ │   3   │         │
│  │ Anos  │ │ Meses │ │Semanas│ │ Dias  │         │
│  └───────┘ └───────┘ └───────┘ └───────┘         │
│  ┌───────┐ ┌───────┐ ┌───────┐                   │
│  │  14   │ │  32   │ │  45   │                   │
│  │ Horas │ │Minutos│ │Segundo│                   │
│  └───────┘ └───────┘ └───────┘                   │
│                                                     │
│         Desde 01 de Janeiro de 2020                │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ GALERIA DE IMAGENS                                 │
│         Nossos Momentos                            │
│                                                     │
│     [◀]     [IMAGEM GRANDE]      [▶]              │
│                                                     │
│              ● ━━━ ● ●                            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ PLAYER DE MÚSICA                                   │
│                                                     │
│  🎵 Nossa música    [▶] [🔊] [━━━━━━━━━]        │
│                                                     │
├─────────────────────────────────────────────────────┤
│ FOOTER                                             │
│ Feito com ❤️ para eternizar momentos especiais    │
│ Todas as configurações são armazenadas localmente │
└─────────────────────────────────────────────────────┘
```

## 🎯 Seções Detalhadas

### 1. HEADER

```
┌─────────────────────────────────────────┐
│ ❤️ Nosso Tempo      [⚙️ Ajustes]      │
│ (Logo)              (Botão rosa)       │
└─────────────────────────────────────────┘
```

**Funcionalidade:**
- Logo clicável (volta ao topo)
- Botão "Ajustes" abre o modal de configurações
- Sticky (fica fixo ao rolar)

### 2. CONTADOR (Hero Section)

```
┌─────────────────────────────────────────┐
│                                         │
│        Carlos ❤️ Ana                   │
│         (Nome do casal)                │
│                                         │
│          Namorando                      │
│      (Status selecionado)              │
│                                         │
│  🎉 BANNER DE EVENTO ESPECIAL 🎉       │
│  (Aparece apenas em datas especiais)   │
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│  │  02  │ │  06  │ │ 115  │ │  03  │ │
│  │      │ │      │ │      │ │      │ │
│  │ Anos │ │Meses │ │Seman.│ │ Dias │ │
│  └──────┘ └──────┘ └──────┘ └──────┘ │
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐           │
│  │  14  │ │  32  │ │  45  │           │
│  │      │ │      │ │      │           │
│  │Horas │ │Minut.│ │Segun.│           │
│  └──────┘ └──────┘ └──────┘           │
│                                         │
│    Desde 01 de Janeiro de 2020         │
│                                         │
└─────────────────────────────────────────┘
```

**Funcionalidade:**
- Contador atualiza a cada 500ms
- Animações suaves de transição
- Cards com efeito hover (crescem levemente)
- Banner de evento especial com confete animado

### 3. GALERIA

```
┌─────────────────────────────────────────┐
│       Nossos Momentos                   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │                                 │   │
│  │                                 │   │
│  │[◀]      FOTO ATUAL          [▶]│   │
│  │        (1920x1080)             │   │
│  │                                 │   │
│  │                                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│        ● ━━━━━ ● ●                    │
│     (Dots de navegação)                │
│     Ativo = barra rosa                 │
│     Inativo = círculo cinza            │
└─────────────────────────────────────────┘
```

**Funcionalidade:**
- Setas para navegação manual
- Dots clicáveis para ir direto à foto
- Autoplay a cada 5 segundos
- Transição suave com slide
- Imagens quebradas mostram placeholder

**Controles:**
- `Seta Esquerda` ◀ - Foto anterior
- `Seta Direita` ▶ - Próxima foto
- `Dots` ● - Selecionar foto específica

### 4. PLAYER DE MÚSICA

```
┌─────────────────────────────────────────┐
│  ┌───┐                                  │
│  │🎵 │ Nossa música especial            │
│  └───┘ (Título da música)               │
│                                         │
│  [▶] [🔊] [━━━━━━━━━━━━━━━━━━━]      │
│  Play Mute    Volume Slider            │
└─────────────────────────────────────────┘
```

**Funcionalidade:**
- Play/Pause alterna ícone ▶/⏸
- Mute/Unmute alterna ícone 🔊/🔇
- Slider de volume (0-100%)
- Loop automático
- Tratamento de erros de carregamento

**Controles:**
- `▶/⏸` - Tocar/Pausar
- `🔊/🔇` - Mutar/Desmutar
- `Slider` - Ajustar volume

### 5. MODAL DE CONFIGURAÇÕES

```
┌─────────────────────────────────────────────┐
│ ⚙️ Configurações                      [✕] │
├─────────────────────────────────────────────┤
│ 🔒 Todas as configurações ficam apenas     │
│    armazenadas no seu dispositivo          │
├─────────────────────────────────────────────┤
│                                             │
│ [Geral] [Mídia] [Aparência] [Avançado]    │
│ └─────────────────────────────────────┘    │
│                                             │
│ ABA ATIVA: Geral                           │
│                                             │
│  Nome (Pessoa 1)                           │
│  [Carlos________________]                  │
│                                             │
│  Nome (Pessoa 2)                           │
│  [Ana___________________]                  │
│                                             │
│  Status do Relacionamento                  │
│  [Namorando ▼]                             │
│                                             │
│  Data Inicial                              │
│  [📅 2020-01-01]                           │
│                                             │
├─────────────────────────────────────────────┤
│               [Resetar]  [Salvar]          │
└─────────────────────────────────────────────┘
```

**Abas Disponíveis:**

#### 📋 ABA GERAL
```
┌─────────────────────────────────┐
│ Nome (Pessoa 1)    [________]   │
│ Nome (Pessoa 2)    [________]   │
│ Status             [Namorando▼] │
│ Data Inicial       [📅______]   │
└─────────────────────────────────┘
```

#### 🎬 ABA MÍDIA
```
┌─────────────────────────────────┐
│ URL da Música      [________]   │
│ Título da Música   [________]   │
│                                 │
│ Imagens da Galeria:             │
│ ┌─────────────────────────┐     │
│ │ foto1.jpg      [↑][↓][🗑]│     │
│ │ foto2.jpg      [↑][↓][🗑]│     │
│ │ foto3.jpg      [↑][↓][🗑]│     │
│ └─────────────────────────┘     │
│                                 │
│ Nova imagem: [____] [Adicionar] │
└─────────────────────────────────┘
```

#### 🎨 ABA APARÊNCIA
```
┌─────────────────────────────────┐
│ Tema               [Claro ▼]    │
│ Cor Primária       [🎨 #ff6b9d] │
│ Fonte              [Sistema ▼]  │
│ Plano de Fundo     [Gradiente▼] │
│ URL da Imagem      [________]   │
│                    (se imagem)  │
└─────────────────────────────────┘
```

#### ⚙️ ABA AVANÇADO
```
┌─────────────────────────────────┐
│ Formato de Data    [pt-BR ▼]    │
│ Formato de Hora    [24h ▼]      │
│ Fuso Horário       [-3___]      │
│                                 │
│ Importar/Exportar:              │
│ [Exportar JSON] [Importar JSON] │
│                                 │
│ Compartilhar:                   │
│ [Gerar Link de Compartilhamento]│
│ [https://..._______________]    │
└─────────────────────────────────┘
```

## 📱 Layout Mobile

```
┌─────────────────┐
│ ❤️ Nosso Tempo │
│                 │
│   [⚙️ Ajustes] │
├─────────────────┤
│                 │
│  Carlos ❤️ Ana │
│   Namorando     │
│                 │
│  ┌───┐  ┌───┐  │
│  │ 2 │  │ 6 │  │
│  │Ano│  │Mes│  │
│  └───┘  └───┘  │
│                 │
│  ┌───┐  ┌───┐  │
│  │115│  │ 3 │  │
│  │Sem│  │Dia│  │
│  └───┘  └───┘  │
│                 │
│  ┌───┐  ┌───┐  │
│  │14 │  │32 │  │
│  │Hrs│  │Min│  │
│  └───┘  └───┘  │
│                 │
│  ┌───┐          │
│  │45 │          │
│  │Seg│          │
│  └───┘          │
│                 │
├─────────────────┤
│                 │
│  [FOTO]         │
│                 │
├─────────────────┤
│                 │
│ 🎵 Música       │
│ [▶] [🔊] [━━]  │
│                 │
├─────────────────┤
│ Feito com ❤️   │
└─────────────────┘
```

**Adaptações Mobile:**
- Contador em 2 colunas (em vez de grid completo)
- Cards menores (90px altura)
- Galeria com altura reduzida (300px)
- Player de música empilhado verticalmente
- Modal em tela cheia

## 🎨 Paleta de Cores

### Tema Claro
```
┌────────────────────────────────────┐
│ Primária:     #ff6b9d (Rosa)       │
│ Primária Light: #ffb3d4            │
│ Primária Dark:  #e85382            │
│ Background:   #fafafa (Branco)     │
│ Surface:      #ffffff (Branco)     │
│ Texto:        #2d2d2d (Preto)      │
│ Texto Sec:    #666666 (Cinza)      │
│ Borda:        #e0e0e0 (Cinza Claro)│
└────────────────────────────────────┘
```

### Tema Escuro
```
┌────────────────────────────────────┐
│ Primária:     #ff6b9d (Rosa)       │
│ Background:   #1a1a1a (Preto)      │
│ Surface:      #2d2d2d (Cinza)      │
│ Texto:        #f5f5f5 (Branco)     │
│ Texto Sec:    #b0b0b0 (Cinza)      │
│ Borda:        #404040 (Cinza Escuro)│
└────────────────────────────────────┘
```

## ⌨️ Atalhos de Teclado

```
┌──────────────────────────────────────┐
│ Tab          → Próximo elemento      │
│ Shift+Tab    → Elemento anterior     │
│ Enter/Space  → Ativar botão/controle│
│ Esc          → Fechar modal          │
│ Seta ← / →   → Navegar galeria       │
│                (quando focado)       │
└──────────────────────────────────────┘
```

## 🎭 Estados dos Elementos

### Botões
```
Normal:    [Ajustes]
Hover:     [Ajustes] (mais escuro, sobe 2px)
Focus:     [Ajustes] (outline rosa)
Active:    [Ajustes] (pressionado)
Disabled:  [Ajustes] (50% opacidade)
```

### Inputs
```
Normal:    [_____________]
Focus:     [_____________] (borda rosa, sombra)
Error:     [_____________] (borda vermelha)
Disabled:  [_____________] (cinza, não editável)
```

### Cards do Contador
```
Normal:    ┌────┐
           │ 02 │
           │Anos│
           └────┘

Hover:     ┌────┐  (scale 1.05)
           │ 02 │
           │Anos│
           └────┘
```

## 🔄 Fluxo de Interação

### Primeiro Uso
```
1. Usuário abre index.html
   ↓
2. Site carrega configurações padrão
   ↓
3. Mostra contador com dados exemplo
   ↓
4. Usuário clica em "Ajustes"
   ↓
5. Modal abre
   ↓
6. Usuário preenche seus dados
   ↓
7. Clica em "Salvar"
   ↓
8. Configurações salvas no localStorage
   ↓
9. Interface atualizada imediatamente
   ↓
10. Contador mostra dados reais
```

### Uso Subsequente
```
1. Usuário abre index.html
   ↓
2. Site carrega do localStorage
   ↓
3. Mostra contador com dados salvos
   ↓
4. Continua de onde parou
```

### Compartilhamento via URL
```
1. Usuário gera link em "Avançado"
   ↓
2. Link com parâmetros é criado
   ↓
3. Envia para outra pessoa
   ↓
4. Pessoa abre link
   ↓
5. Site detecta parâmetros na URL
   ↓
6. Pergunta se quer carregar configurações
   ↓
7. Se sim, carrega e salva no localStorage
```

## 🎬 Animações

### Entrada da Página
```
Hero Section:
  fadeInUp (0.6s ease)
  Elemento desliza de baixo para cima
  Opacidade 0 → 1
```

### Contador Atualizando
```
Números:
  Transição suave ao mudar
  Sem salto brusco
```

### Modal
```
Overlay:
  fadeIn (0.3s ease)
  Opacidade 0 → 1

Content:
  slideUp (0.3s ease)
  Desliza de baixo para cima
  Y: 30px → 0
```

### Galeria
```
Transição de Fotos:
  transform translateX (0.5s ease)
  Desliza horizontalmente
```

### Confete (Eventos Especiais)
```
🎉 e ❤️:
  confettiFall (3s linear infinite)
  Top: -10% → 110%
  Rotação: 0deg → 360deg
```

## 📐 Breakpoints Responsivos

```
┌────────────────────────────────────┐
│ Mobile Small:  < 480px             │
│ - 1 coluna no contador             │
│ - Cards menores                    │
│ - Galeria 300px altura             │
│                                    │
│ Mobile:        481px - 768px       │
│ - 2 colunas no contador            │
│ - Galeria 350px altura             │
│                                    │
│ Tablet:        769px - 1024px      │
│ - Grid auto-fit no contador        │
│ - Galeria 500px altura             │
│                                    │
│ Desktop:       > 1024px            │
│ - Layout completo                  │
│ - Galeria 500px altura             │
│ - Todos os elementos visíveis      │
└────────────────────────────────────┘
```

---

## 💡 Dicas Visuais

### Para Melhor Experiência Visual:

1. **Fotos:** Use imagens de alta qualidade (mínimo 1920x1080)
2. **Cores:** Escolha cores que contrastem bem com o fundo
3. **Fonte:** Georgia funciona bem para visual romântico
4. **Tema:** Escuro economiza bateria em telas OLED
5. **Background:** Imagens de fundo devem ser sutis, não distrair do conteúdo

---

Este guia visual ajuda a entender como cada parte do site funciona e se apresenta visualmente! 🎨
