# 🏥 Clínica Multidisciplinar - Website

Página web moderna e responsiva para clínica multidisciplinar, desenvolvida em React com CSS puro.

## 🎨 Características

- **Design Moderno**: Interface limpa e profissional com paleta de cores em tons de azul claro
- **Totalmente Responsivo**: Adaptável a todos os dispositivos (desktop, tablet, mobile)
- **Acessível**: Seguindo boas práticas de acessibilidade
- **Performance**: Otimizado para carregamento rápido

## 📋 Seções do Site

1. **Header**: Menu de navegação e botão de agendamento
2. **Hero**: Apresentação da clínica com call-to-action
3. **Serviços**: 5 cards com os serviços oferecidos
   - Pedagogia
   - Reforço Escolar
   - Nutricionista
   - Psicólogo
   - Terapia
4. **Sobre**: Informações sobre a clínica, missão e valores
5. **Depoimentos**: Avaliações de pacientes
6. **Contato**: Formulário e informações de contato
7. **Footer**: Informações e redes sociais

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm start
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🖼️ Placeholders de Imagens

O projeto contém placeholders para as seguintes imagens:

- **Hero Section**: 1600x900px (imagem principal)
- **Serviços** (5 cards): 600x400px cada
- **Sobre a Clínica**: 1000x800px
- **Depoimentos** (3 cards): 300x300px cada (fotos de pacientes)

Substitua os placeholders pelas imagens reais conforme necessário.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🛠️ Tecnologias Utilizadas

- React 18
- CSS3 (sem frameworks)
- HTML5 semântico

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.css
│   ├── Hero/
│   │   ├── Hero.js
│   │   └── Hero.css
│   ├── Services/
│   │   ├── Services.js
│   │   └── Services.css
│   ├── About/
│   │   ├── About.js
│   │   └── About.css
│   ├── Testimonials/
│   │   ├── Testimonials.js
│   │   └── Testimonials.css
│   ├── Contact/
│   │   ├── Contact.js
│   │   └── Contact.css
│   └── Footer/
│       ├── Footer.js
│       └── Footer.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🎨 Paleta de Cores

- Azul Principal: #4A90E2
- Azul Claro: #87CEEB
- Azul Claro 2: #B0E0E6
- Azul Escuro: #357ABD
- Texto: #333333
- Texto Secundário: #666666
- Fundo: #ffffff / #f8f9fa

## 📝 Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm build`: Cria a versão de produção
- `npm test`: Executa os testes
- `npm eject`: Ejeta a configuração do Create React App

## 🔧 Personalização

Para personalizar o conteúdo:

1. **Textos**: Edite os componentes em `src/components/`
2. **Cores**: Modifique os arquivos CSS de cada componente
3. **Imagens**: Substitua os placeholders pelas imagens reais
4. **Serviços**: Ajuste o array `services` em `Services.js`

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do formulário no site.

---

Desenvolvido com 💙 para cuidar de você
