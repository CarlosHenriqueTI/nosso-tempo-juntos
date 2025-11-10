# 📋 Exemplos de Configuração e Casos de Uso

## Cenários Comuns de Uso

### 1. Casal que está Namorando

```json
{
  "person1": "João",
  "person2": "Maria",
  "status": "Namorando",
  "startDate": "2023-02-14",
  "theme": "light",
  "primaryColor": "#ff6b9d"
}
```

**URL de compartilhamento:**
```
https://seu-site.com/?date=2023-02-14&p1=João&p2=Maria&status=Namorando
```

### 2. Noivos Planejando Casamento

```json
{
  "person1": "Carlos",
  "person2": "Ana",
  "status": "Noivos",
  "startDate": "2021-06-20",
  "theme": "light",
  "primaryColor": "#4a90e2",
  "bgType": "gradient"
}
```

### 3. Casal Casado

```json
{
  "person1": "Pedro",
  "person2": "Lúcia",
  "status": "Casados",
  "startDate": "2015-12-10",
  "theme": "dark",
  "primaryColor": "#ffd700",
  "bgType": "image",
  "bgImage": "https://exemplo.com/foto-casamento.jpg"
}
```

### 4. Celebração de Aniversário de 1 Ano

Para destacar no dia do aniversário:

```javascript
// A data inicial deve ser exatamente 1 ano atrás
// Exemplo: se hoje é 10/11/2025, use:
"startDate": "2024-11-10"
```

O site automaticamente mostrará:
- 🎊 Banner de aniversário
- Animação de confete
- Mensagem especial

## Exemplos de Personalização Visual

### Tema Romântico Rosa

```css
/* Adicionar em styles.css */
[data-theme="romantic"] {
  --bg: #fff0f5;
  --surface: #ffe4e9;
  --text: #4a0e1e;
  --text-secondary: #8b5a5f;
  --primary: #ff1493;
  --primary-light: #ff69b4;
  --primary-dark: #c71585;
  --border: #ffc0cb;
}
```

### Tema Oceano Azul

```css
[data-theme="ocean"] {
  --bg: #e0f7fa;
  --surface: #b2ebf2;
  --text: #006064;
  --text-secondary: #00838f;
  --primary: #00bcd4;
  --primary-light: #4dd0e1;
  --primary-dark: #0097a7;
  --border: #80deea;
}
```

### Tema Pôr do Sol

```css
[data-theme="sunset"] {
  --bg: #fff8e1;
  --surface: #ffecb3;
  --text: #5d4037;
  --text-secondary: #8d6e63;
  --primary: #ff6f00;
  --primary-light: #ffa726;
  --primary-dark: #e65100;
  --border: #ffcc80;
}
```

## Configurações de Galeria

### Galeria com 5 Fotos

```json
{
  "images": [
    "./assets/primeiro-encontro.jpg",
    "./assets/viagem-praia.jpg",
    "./assets/aniversario-1ano.jpg",
    "./assets/pedido-namoro.jpg",
    "./assets/natal-juntos.jpg"
  ]
}
```

### Galeria com Fotos do Imgur

```json
{
  "images": [
    "https://i.imgur.com/abc123.jpg",
    "https://i.imgur.com/def456.jpg",
    "https://i.imgur.com/ghi789.jpg"
  ]
}
```

### Galeria com Fotos do Google Photos

**Nota:** Google Photos requer link direto. Use o compartilhamento público.

```json
{
  "images": [
    "https://lh3.googleusercontent.com/...",
    "https://lh3.googleusercontent.com/...",
    "https://lh3.googleusercontent.com/..."
  ]
}
```

## Configurações de Música

### Música do Spotify (via MP3 converter)

1. Use serviço como [Spotify Downloader](https://spotifydown.com) (legal apenas para músicas suas)
2. Hospede o MP3 em serviço de armazenamento
3. Use o link direto

```json
{
  "musicUrl": "https://seu-storage.com/nossa-musica.mp3",
  "musicTitle": "Perfect - Ed Sheeran"
}
```

### Música do YouTube (via MP3 converter)

Similar ao Spotify, converta para MP3 e hospede.

```json
{
  "musicUrl": "https://seu-storage.com/musica-youtube.mp3",
  "musicTitle": "A Thousand Years - Christina Perri"
}
```

### Serviços de Hospedagem de Áudio Gratuitos

- [SoundCloud](https://soundcloud.com) - Upload direto
- [Dropbox](https://dropbox.com) - Link direto
- [Google Drive](https://drive.google.com) - Link direto (configurar compartilhamento público)

**Exemplo Dropbox:**
```
Link original: https://www.dropbox.com/s/abc123/musica.mp3?dl=0
Link direto:   https://www.dropbox.com/s/abc123/musica.mp3?dl=1
                                                         ↑ mudar para 1
```

## Configurações Avançadas

### Fuso Horário Customizado

Para casal em locais diferentes:

```json
{
  "timezoneOffset": -3,  // Brasília (UTC-3)
  "dateFormat": "pt-BR",
  "timeFormat": "24"
}
```

Outros exemplos:
- Lisboa: `0` (UTC+0)
- Nova York: `-5` (UTC-5)
- Tóquio: `+9` (UTC+9)
- Los Angeles: `-8` (UTC-8)

### Formato de Data Internacional

```json
{
  "dateFormat": "en-US",  // Formato americano (MM/DD/YYYY)
  "timeFormat": "12"      // 12 horas (AM/PM)
}
```

### Backup e Sincronização

**Exportar configurações:**
1. Abra as configurações
2. Vá em "Avançado"
3. Clique em "Exportar JSON"
4. Salve o arquivo em local seguro (Dropbox, Google Drive, etc.)

**Importar em outro dispositivo:**
1. Acesse o site no novo dispositivo
2. Abra as configurações
3. Vá em "Avançado"
4. Clique em "Importar JSON"
5. Selecione o arquivo exportado

## Casos de Uso Especiais

### 1. Site para Presente de Aniversário

**Cenário:** Criar site surpresa para aniversário de 1 ano

**Passos:**
1. Configure todas as fotos especiais do casal
2. Adicione música favorita
3. Use tema e cores que a pessoa goste
4. Gere link de compartilhamento
5. Envie como presente surpresa

### 2. Convite de Casamento Digital

**Cenário:** Usar como parte do convite

**Customizações:**
```json
{
  "person1": "Noivo",
  "person2": "Noiva",
  "status": "Noivos",
  "startDate": "2020-01-15",
  "theme": "light",
  "primaryColor": "#d4af37",
  "bgType": "image",
  "bgImage": "url-da-foto-pre-wedding"
}
```

Adicione ao convite:
> "Venha celebrar nosso amor! Veja nossa história em: [link-do-site]"

### 3. Quadro Digital em TV

**Cenário:** Exibir em TV como quadro digital

**Configurações:**
1. Adicione muitas fotos à galeria
2. Configure autoplay mais lento (5-10s por foto)
3. Use tema escuro para economizar energia
4. Coloque música suave de fundo
5. Abra o site no navegador da Smart TV

### 4. Screensaver Romântico

**Cenário:** Usar como protetor de tela

**Dica:** Use extensão de navegador que transforma site em screensaver
- Chrome: "Screen Saver (Tab)"
- Firefox: "Tab Rotator"

## Templates Prontos de Configuração

### Template "Rosa Clássico"

```json
{
  "person1": "Seu Nome",
  "person2": "Nome Dela/Dele",
  "status": "Namorando",
  "startDate": "2024-01-01",
  "musicUrl": "",
  "musicTitle": "Nossa música",
  "images": ["./assets/photo1.jpg", "./assets/photo2.jpg"],
  "theme": "light",
  "primaryColor": "#ff69b4",
  "fontFamily": "Georgia, serif",
  "bgType": "gradient",
  "bgImage": "",
  "dateFormat": "pt-BR",
  "timeFormat": "24",
  "timezoneOffset": null,
  "language": "pt-BR"
}
```

### Template "Noite Estrelada"

```json
{
  "person1": "Seu Nome",
  "person2": "Nome Dela/Dele",
  "status": "Casados",
  "startDate": "2020-12-25",
  "musicUrl": "",
  "musicTitle": "Nossa música",
  "images": ["./assets/photo1.jpg"],
  "theme": "dark",
  "primaryColor": "#ffd700",
  "fontFamily": "system-ui, -apple-system, 'Segoe UI', sans-serif",
  "bgType": "solid",
  "bgImage": "",
  "dateFormat": "pt-BR",
  "timeFormat": "24",
  "timezoneOffset": null,
  "language": "pt-BR"
}
```

### Template "Verão Tropical"

```json
{
  "person1": "Seu Nome",
  "person2": "Nome Dela/Dele",
  "status": "Noivos",
  "startDate": "2023-06-21",
  "musicUrl": "",
  "musicTitle": "Nossa música",
  "images": ["./assets/photo1.jpg"],
  "theme": "light",
  "primaryColor": "#ff6347",
  "fontFamily": "'Comic Sans MS', cursive",
  "bgType": "gradient",
  "bgImage": "",
  "dateFormat": "pt-BR",
  "timeFormat": "24",
  "timezoneOffset": null,
  "language": "pt-BR"
}
```

## Testes de Eventos Especiais

### Testar Mêsversário

Configure a data para exatamente 1 mês atrás:

```javascript
// Se hoje é 10/11/2025, use:
"startDate": "2025-10-10"
```

Recarregue a página e veja o banner especial.

### Testar Aniversário de 1 Ano

```javascript
// Se hoje é 10/11/2025, use:
"startDate": "2024-11-10"
```

### Testar Aniversário de 5 Anos

```javascript
// Se hoje é 10/11/2025, use:
"startDate": "2020-11-10"
```

## Dicas de Performance

### Para Muitas Fotos (10+)

```json
{
  "images": [
    // Use URLs otimizadas
    "https://res.cloudinary.com/seu-cloud/image/upload/w_1920,q_80/foto1.jpg",
    "https://res.cloudinary.com/seu-cloud/image/upload/w_1920,q_80/foto2.jpg"
  ]
}
```

### Para Conexões Lentas

- Reduza quantidade de imagens
- Use imagens comprimidas (JPEG qualidade 80%)
- Considere não usar música

### Para Mobile

- Use imagens em resolução mobile (max 1080px largura)
- Prefira tema escuro (economiza bateria em OLED)
- Desabilite autoplay da galeria

## Troubleshooting

### "Música não carrega"

**Teste:**
```json
{
  "musicUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "musicTitle": "Teste de Música"
}
```

Se funcionar, o problema está na sua URL original.

### "Imagens não aparecem"

**Teste com imagem pública:**
```json
{
  "images": [
    "https://picsum.photos/1920/1080?random=1",
    "https://picsum.photos/1920/1080?random=2"
  ]
}
```

### "Contador mostra valores estranhos"

Verifique se a data está no formato correto:
```json
{
  "startDate": "2024-01-15"  // ✅ Correto: YYYY-MM-DD
  // Não use: "15/01/2024" ou "01-15-2024"
}
```

## Integração com Redes Sociais

### Compartilhar no WhatsApp

```
https://wa.me/?text=Veja%20nosso%20tempo%20juntos!%20[seu-link]
```

### Compartilhar no Facebook

```html
<a href="https://www.facebook.com/sharer/sharer.php?u=[seu-link]" 
   target="_blank">
   Compartilhar no Facebook
</a>
```

### Compartilhar no Twitter

```
https://twitter.com/intent/tweet?text=Nosso%20tempo%20juntos&url=[seu-link]
```

---

**Dúvidas?** Consulte o README.md principal ou o TECHNICAL.md para detalhes técnicos.
