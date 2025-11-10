# 🚀 Guia Rápido de Início - 5 Minutos

## Passo 1: Abrir o Site (30 segundos)

1. Localize o arquivo `index.html` na pasta do projeto
2. Clique duas vezes para abrir no navegador
3. Pronto! O site já está funcionando

## Passo 2: Personalizar Informações Básicas (2 minutos)

1. Clique no botão **"⚙️ Ajustes"** no canto superior direito
2. Na aba **"Geral"**, preencha:
   - **Seu nome** no campo "Nome (Pessoa 1)"
   - **Nome da pessoa amada** no campo "Nome (Pessoa 2)"
   - **Status**: Escolha entre Namorando, Noivos ou Casados
   - **Data inicial**: Clique no calendário e selecione a data
3. Clique em **"Salvar"** no final do modal

✅ **Resultado:** O contador já está rodando com suas informações!

## Passo 3: Adicionar Suas Fotos (2 minutos)

### Opção A: Fotos Locais (mais rápido)

1. Copie 2-3 fotos suas para a pasta `assets/`
2. Renomeie para `minha-foto1.jpg`, `minha-foto2.jpg`, etc.
3. Em Ajustes > Mídia, adicione as URLs:
   - `./assets/minha-foto1.jpg`
   - `./assets/minha-foto2.jpg`
4. Remova as fotos de exemplo se desejar

### Opção B: Fotos Online

1. Faça upload das fotos no [Imgur](https://imgur.com) ou [ImgBB](https://imgbb.com)
2. Copie o link direto da imagem
3. Em Ajustes > Mídia, cole o link e clique "Adicionar Imagem"

## Passo 4: Escolher Tema e Cor (30 segundos)

1. Vá em Ajustes > Aparência
2. Escolha entre tema **Claro** ou **Escuro**
3. Clique no seletor de **Cor Primária** e escolha sua cor favorita
4. Salve!

## Passo 5: Compartilhar (30 segundos)

### Para Uso Pessoal
- Adicione aos favoritos do navegador
- Use como página inicial

### Para Publicar Online (escolha um)

**Netlify (Mais Fácil):**
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta inteira para o Netlify Drop
3. Receba seu link: `https://seu-site.netlify.app`

**Vercel:**
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Faça upload da pasta
4. Receba seu link: `https://seu-site.vercel.app`

**GitHub Pages (Grátis):**
1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações
4. Link: `https://seu-usuario.github.io/nome-repo`

---

## ⚡ Atalhos Úteis

| Ação | Como Fazer |
|------|------------|
| Abrir configurações | Clicar em "⚙️ Ajustes" |
| Fechar modal | Clicar fora ou pressionar ESC |
| Trocar foto | Clicar nas setas < > |
| Tocar música | Clicar no botão ▶️ |
| Ver próxima foto | Clicar em → |

## 🎨 Templates Rápidos

Quer um visual pronto? Importe estas configurações!

### Template Rosa Romântico
```json
{"person1":"Carlos","person2":"Ana","status":"Namorando","startDate":"2024-01-14","musicUrl":"","musicTitle":"Nossa música","images":["./assets/photo1.jpg","./assets/photo2.jpg"],"theme":"light","primaryColor":"#ff69b4","fontFamily":"Georgia, serif","bgType":"gradient","bgImage":"","dateFormat":"pt-BR","timeFormat":"24","timezoneOffset":null,"language":"pt-BR"}
```

**Como usar:**
1. Copie o texto acima
2. Salve como `template-rosa.json`
3. Em Ajustes > Avançado > Importar JSON
4. Selecione o arquivo
5. Ajuste os nomes e data

### Template Escuro Elegante
```json
{"person1":"Pedro","person2":"Lúcia","status":"Casados","startDate":"2020-06-15","musicUrl":"","musicTitle":"Nossa música","images":["./assets/photo1.jpg"],"theme":"dark","primaryColor":"#ffd700","fontFamily":"system-ui, -apple-system, 'Segoe UI', sans-serif","bgType":"solid","bgImage":"","dateFormat":"pt-BR","timeFormat":"24","timezoneOffset":null,"language":"pt-BR"}
```

## 🔥 Dica Extra: Link de Compartilhamento

Para enviar para alguém especial:

1. Configure tudo
2. Ajustes > Avançado > "Gerar Link de Compartilhamento"
3. Copie o link
4. Envie por WhatsApp, Instagram, etc.

**Exemplo de link:**
```
https://seu-site.com/?date=2024-01-14&p1=Carlos&p2=Ana&status=Namorando
```

---

## ❓ Problemas Comuns

### "Não sei minha data exata"
Use a data aproximada! O importante é o significado.

### "Minhas fotos são muito grandes"
Use [TinyPNG.com](https://tinypng.com) para comprimir antes.

### "Quero adicionar mais de 10 fotos"
Sem problemas! Adicione quantas quiser no painel de Mídia.

### "O site não salva minhas alterações"
- Certifique-se de clicar em "Salvar"
- Não use modo anônimo do navegador
- Verifique se JavaScript está habilitado

---

## 🎯 Próximos Passos

Depois de configurar o básico:

1. ✅ **Adicione uma música especial** (Ajustes > Mídia)
2. ✅ **Personalize o plano de fundo** (Ajustes > Aparência)
3. ✅ **Teste em diferentes dispositivos** (celular, tablet)
4. ✅ **Faça backup das configurações** (Exportar JSON)
5. ✅ **Compartilhe com pessoas especiais**

---

## 💝 Pronto!

Seu site de contagem de amor está configurado e rodando!

**Tempo total:** Aproximadamente 5 minutos ⏱️

Agora aproveite para celebrar cada segundo do seu amor! ❤️

---

**Precisa de mais ajuda?**
- 📖 Leia o [README.md](README.md) completo
- 🔧 Veja o [TECHNICAL.md](TECHNICAL.md) para customizações avançadas
- 💡 Confira [EXAMPLES.md](EXAMPLES.md) para inspiração
