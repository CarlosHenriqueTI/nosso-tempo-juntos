# 💕 Site de Contagem de Relacionamento

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SEU-USUARIO/site-love)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<div align="center">
  <img src="./assets/og-image.jpg" alt="Site de Contagem de Relacionamento" width="600"/>
  
  <p><strong>Um site estático, moderno e totalmente personalizável para celebrar e contar o tempo de relacionamento entre duas pessoas.</strong></p>
  
  [🚀 Demo ao Vivo](#) | [📖 Documentação](./INDEX.md) | [🎨 Começar Agora](./QUICKSTART.md)
</div>

---

## ✨ Características

- 🕐 **Contador em tempo real** - Anos, meses, semanas, dias, horas, minutos e segundos
- 🎉 **Eventos especiais** - Notificações automáticas em mêsversários e aniversários
- 🖼️ **Galeria de fotos** - Carrossel com autoplay e navegação
- 🎵 **Música de fundo** - Player com controles de volume e play/pause
- ⚙️ **Totalmente configurável** - Painel completo de ajustes
- 🌓 **Tema claro/escuro** - Altere conforme sua preferência
- 🎨 **Personalização visual** - Cores, fontes, planos de fundo
- 💾 **Armazenamento local** - Todas as configurações ficam no seu dispositivo
- 🔗 **Compartilhamento** - Gere links com parâmetros para compartilhar
- 📱 **100% Responsivo** - Funciona perfeitamente em mobile e desktop
- ♿ **Acessível** - Controles de teclado e compatibilidade com leitores de tela

## 🚀 Como usar

### Instalação básica

1. **Baixe todos os arquivos** do projeto
2. **Abra o arquivo `index.html`** no seu navegador
3. **Clique em "⚙️ Ajustes"** para personalizar

É só isso! Não precisa de servidor, banco de dados ou instalação de nada.

### Publicar online

#### Opção 1: Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o Vercel CLI: `npm i -g vercel`
3. Na pasta do projeto, execute: `vercel`
4. Siga as instruções

#### Opção 2: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings > Pages
4. Selecione a branch `main` e salve
5. Seu site estará disponível em `https://seu-usuario.github.io/nome-repo`

#### Opção 3: Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o Netlify Drop
3. Pronto!

## 🎨 Personalização

### Trocar nomes e data

1. Clique no botão **"⚙️ Ajustes"**
2. Na aba **"Geral"**, preencha:
   - Nome (Pessoa 1)
   - Nome (Pessoa 2)
   - Status do relacionamento (Namorando/Noivos/Casados)
   - Data inicial
3. Clique em **"Salvar"**

### Adicionar suas fotos

**Opção 1: URLs online**
1. Hospede suas fotos em serviços como [Imgur](https://imgur.com), [ImgBB](https://imgbb.com), ou Google Photos
2. Copie o link direto da imagem
3. No painel de Ajustes > Mídia, cole a URL e clique em "Adicionar Imagem"

**Opção 2: Fotos locais**
1. Coloque suas fotos na pasta `assets/`
2. Renomeie para `photo1.jpg`, `photo2.jpg`, etc.
3. No painel de Ajustes > Mídia, adicione URLs como `./assets/photo1.jpg`

### Adicionar música

1. Hospede seu arquivo de áudio (MP3, M4A, OGG) online ou coloque na pasta `assets/`
2. No painel Ajustes > Mídia, adicione a URL da música
3. Digite o título da música
4. Salve

**Atenção**: Devido às políticas dos navegadores, a música só toca após o usuário interagir com a página (clicar no play).

### Mudar tema e cores

No painel Ajustes > Aparência:
- **Tema**: Claro ou Escuro
- **Cor Primária**: Use o seletor de cor
- **Fonte**: Escolha entre 4 opções
- **Plano de Fundo**: Cor sólida, gradiente ou imagem

### Configurações avançadas

No painel Ajustes > Avançado:
- **Formato de data**: Brasileiro, Americano, Europeu
- **Formato de hora**: 12h ou 24h
- **Fuso horário**: Override do fuso (ex: -3 para Brasília)
- **Importar/Exportar**: Backup das configurações em JSON
- **Compartilhar**: Gerar link com parâmetros

## 📂 Estrutura de arquivos

```
site-love/
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # Lógica e interatividade
├── README.md           # Este arquivo
└── assets/             # Recursos
    ├── photo1.jpg      # Foto exemplo 1
    ├── photo2.jpg      # Foto exemplo 2
    ├── photo3.jpg      # Foto exemplo 3
    ├── placeholder.jpg # Imagem placeholder
    ├── favicon.png     # Ícone do site
    └── og-image.jpg    # Imagem para compartilhamento
```

## ✅ Checklist de testes

Use este checklist para validar todas as funcionalidades:

### Configurações Básicas
- [ ] Trocar nome da Pessoa 1
- [ ] Trocar nome da Pessoa 2
- [ ] Alterar status do relacionamento (Namorando/Noivos/Casados)
- [ ] Mudar data inicial
- [ ] Verificar se o contador reflete as mudanças corretamente

### Contador
- [ ] Verificar se anos são calculados corretamente
- [ ] Verificar se meses são calculados corretamente
- [ ] Verificar se semanas são calculadas corretamente
- [ ] Verificar se dias, horas, minutos e segundos atualizam em tempo real
- [ ] Testar com diferentes datas (passado recente, anos atrás)

### Eventos Especiais
- [ ] Configurar data para hoje (mesmo dia e mês) e verificar mêsversário
- [ ] Configurar data de 1 ano atrás (mesmo dia e mês) e verificar aniversário
- [ ] Verificar animação de confete/corações

### Galeria
- [ ] Adicionar nova imagem via URL
- [ ] Remover imagem da lista
- [ ] Reordenar imagens (mover para cima/baixo)
- [ ] Navegar com setas (anterior/próxima)
- [ ] Clicar nos dots para ir para imagem específica
- [ ] Verificar autoplay (deve trocar automaticamente)
- [ ] Verificar se imagens inválidas mostram placeholder

### Música
- [ ] Adicionar URL de música
- [ ] Clicar em Play/Pause
- [ ] Ajustar volume com o slider
- [ ] Clicar no botão Mute/Unmute
- [ ] Verificar se título da música é exibido
- [ ] Testar com URL inválida (deve mostrar mensagem de erro)

### Aparência
- [ ] Alternar entre tema Claro e Escuro
- [ ] Mudar cor primária
- [ ] Mudar fonte (testar todas as 4 opções)
- [ ] Mudar tipo de background (sólido/gradiente/imagem)
- [ ] Se imagem, adicionar URL e verificar

### Avançado
- [ ] Trocar formato de data e verificar exibição
- [ ] Trocar formato de hora (12h/24h)
- [ ] Definir fuso horário customizado
- [ ] Exportar configurações (deve baixar JSON)
- [ ] Importar configurações (fazer upload do JSON exportado)
- [ ] Gerar link de compartilhamento
- [ ] Abrir link de compartilhamento em aba anônima e verificar pré-carregamento

### Responsividade
- [ ] Testar em tela de celular (< 480px)
- [ ] Testar em tablet (768px)
- [ ] Testar em desktop (> 1024px)
- [ ] Verificar se contador adapta corretamente
- [ ] Verificar se galeria funciona em mobile

### Acessibilidade
- [ ] Navegar com Tab entre todos os controles
- [ ] Verificar se todos os botões têm aria-label
- [ ] Testar com leitor de tela (se possível)
- [ ] Verificar contraste de cores (WCAG AA)

### Persistência
- [ ] Salvar configurações e recarregar página
- [ ] Verificar se configurações foram mantidas
- [ ] Resetar configurações e verificar valores padrão
- [ ] Fechar e reabrir navegador

## 🔧 Algoritmo de contagem

O contador usa um algoritmo preciso que considera:

1. **Anos completos**: Incrementa ano por ano até não poder mais
2. **Meses completos**: Incrementa mês por mês no ano restante
3. **Dias**: Calcula os dias restantes no mês atual
4. **Semanas**: Calcula semanas totais desde o início (dias totais ÷ 7)
5. **Horas, minutos, segundos**: Derivados do tempo restante do dia atual

Isso garante precisão mesmo com:
- Meses de tamanhos diferentes (28-31 dias)
- Anos bissextos
- Mudanças de fuso horário

## 🎯 Limitações conhecidas

1. **Autoplay de música**: Navegadores modernos bloqueiam autoplay. O usuário precisa clicar em Play manualmente na primeira vez.

2. **Imagens externas**: Algumas URLs podem não funcionar devido a CORS. Use serviços que permitem hotlinking (Imgur, ImgBB).

3. **Armazenamento local**: Configurações são perdidas se o usuário limpar dados do navegador. Use Exportar/Importar para fazer backup.

4. **URLs de música**: Nem todos os serviços de streaming funcionam. Use links diretos para arquivos (ex: `.mp3`, `.m4a`).

## 🛠️ Solução de problemas

### A música não toca
- Verifique se clicou em Play
- Confirme que a URL está correta e acessível
- Teste o link direto no navegador
- Verifique o console do navegador (F12) para erros

### Imagens não aparecem
- Verifique se a URL está correta
- Teste abrindo a URL em uma nova aba
- Use serviços de hospedagem confiáveis
- Para imagens locais, certifique-se que estão na pasta `assets/`

### Configurações não salvam
- Verifique se o localStorage está habilitado no navegador
- Não use modo anônimo/privado
- Limpe o cache e tente novamente

### Contador não atualiza
- Verifique a data inicial nas configurações
- Recarregue a página (Ctrl+F5)
- Verifique o console (F12) para erros

## 💡 Dicas

- **Fotos**: Use imagens de boa qualidade (recomendado: 1920x1080px)
- **Música**: Escolha uma música especial para vocês
- **Backup**: Exporte suas configurações regularmente
- **Compartilhar**: Envie o link gerado para amigos e familiares
- **Personalização**: Escolha cores que combinem com vocês

## 📱 Compatibilidade

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Opera (76+)
- ✅ Navegadores mobile modernos

## 📄 Licença

Este projeto é de código aberto. Sinta-se livre para usar, modificar e compartilhar!

## ❤️ Créditos

Desenvolvido com muito carinho para celebrar o amor.

---

**Feito com ❤️ para eternizar momentos especiais**
