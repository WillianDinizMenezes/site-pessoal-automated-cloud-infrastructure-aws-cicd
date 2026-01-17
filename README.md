# Portfolio Estático - HTML/CSS/JavaScript

Versão estática do portfólio profissional de **Willian Diniz Menezes**, otimizada para deploy simples e performance máxima.

## 📁 Estrutura

```
portfolio-static/
├── index.html    # Página única com todas as seções
├── styles.css    # Estilos completos (glassmorphism, animações, responsivo)
├── script.js     # Navegação suave e interações
└── README.md     # Esta documentação
```

## ✨ Características

- **Zero dependências** - Apenas HTML, CSS e JavaScript puro
- **Sem build necessário** - Abre direto no navegador
- **Performance otimizada** - Carregamento rápido
- **Design moderno** - Glassmorphism, gradientes, animações
- **Totalmente responsivo** - Mobile-first design
- **SEO-friendly** - Conteúdo estático indexável

## 🚀 Como Usar

### Localmente

Simplesmente abra o arquivo `index.html` no seu navegador:

```bash
# Windows
start index.html

# Mac/Linux
open index.html
```

Ou arraste o arquivo para o navegador.

### Com Servidor Local

Para testar com um servidor HTTP local:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000
```

Acesse: `http://localhost:8000`

## 🎨 Seções do Portfólio

1. **Hero** - Apresentação com nome, título e call-to-actions
2. **Sobre** - Jornada de transição de carreira e experiência
3. **Skills** - Tech stack (AWS, Java, DevOps) e soft skills
4. **Projetos** - 3 projetos destacados com detalhes técnicos
5. **Contato** - Links para LinkedIn, GitHub e email

## 🔧 Personalização

### Alterar Informações

Edite o arquivo `index.html` e procure por:
- Nome e título na seção Hero
- Descrições nas seções About e Skills
- Projetos na seção Projects
- Links de contato na seção Contact

### Alterar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --color-aws-orange: #FF9900;
    --color-cloud-blue: #00A1C9;
    /* ... outras cores */
}
```

## 📦 Deploy

### AWS S3 + CloudFront

Perfeito para hospedagem estática:

```bash
# Upload para S3
aws s3 sync . s3://seu-bucket --exclude "README.md"

# Configurar como website estático
aws s3 website s3://seu-bucket --index-document index.html
```

### GitHub Pages

1. Crie um repositório no GitHub
2. Faça push dos arquivos
3. Ative GitHub Pages nas configurações
4. Acesse: `https://seu-usuario.github.io/repositorio`

### Netlify/Vercel

1. Arraste a pasta para o site
2. Deploy automático
3. URL personalizada disponível

## 🐳 Docker (Próximo Passo)

Este portfólio está pronto para ser containerizado:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

Veja o projeto DevOps completo para deploy com Docker + ECR + EC2.

## 📱 Responsividade

O design é totalmente responsivo com breakpoints em:
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🎯 Performance

- **Sem JavaScript frameworks** - Vanilla JS apenas
- **CSS otimizado** - Variáveis e reutilização
- **Imagens inline** - SVGs para ícones
- **Lazy loading** - Animações com Intersection Observer

## 🔗 Links

- **LinkedIn**: [willian-diniz-2360b74b](https://www.linkedin.com/in/willian-diniz-2360b74b)
- **GitHub**: [WillianDinizMenezes](https://github.com/WillianDinizMenezes)
- **Email**: williandiniz2412@hotmail.com

## 📄 Licença

© 2025 Willian Diniz Menezes. Todos os direitos reservados.

---

**Próximos Passos**: Containerizar com Docker e fazer deploy na AWS! 🚀
