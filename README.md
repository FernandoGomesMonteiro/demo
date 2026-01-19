# Vouch - Plataforma de Serviços Profissionais

<div align="center">

![Vouch](https://img.shields.io/badge/Vouch-Platform-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white&style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?logo=tailwindcss&logoColor=white&style=flat-square)

Uma aplicação web moderna e responsiva para apresentação de serviços profissionais, desenvolvida com as tecnologias mais atuais do ecossistema React.

</div>

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Componentes](#componentes)
- [Páginas](#páginas)
- [Configurações](#configurações)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## 🎯 Sobre o Projeto

### Principais Características

✨ **Interface Moderna**: Design elegante e responsivo baseado em Tailwind CSS  
🗺️ **Mapas Interativos**: Integração com Leaflet e React Leaflet para visualizações geográficas  
📱 **Responsividade**: Totalmente otimizado para dispositivos móveis, tablets e desktops  
⚡ **Performance**: Construído com Vite para desenvolvimento rápido e builds otimizados  
🎨 **Design System**: Ícones profissionais com Lucide React  
🔄 **Roteamento Dinâmico**: Navegação SPA com React Router  
🔍 **SEO Preparado**: Estrutura semântica adequada para otimização  

---

## 🛠️ Tecnologias Utilizadas

### Frontend Framework
- **React 19.2.0** - Biblioteca para construção de interfaces de usuário
- **TypeScript 5.9** - Tipagem estática para JavaScript
- **Vite 7.2.4** - Build tool e dev server ultrarrápido

### Roteamento e Navegação
- **React Router DOM 7.10.1** - Roteamento de páginas SPA

### Estilização
- **Tailwind CSS 3.4.17** - Framework CSS utilitário
- **PostCSS 8.5.6** - Transformador CSS com autoprefixer

### Mapas e Visualizações
- **Leaflet 1.9.4** - Biblioteca de mapas interativos
- **React Leaflet 5.0.0** - Wrapper React para Leaflet
- **React Simple Maps 3.0.0** - Mapas simplificados
- **D3 Scale 4.0.2** - Escalas para visualizações de dados

### Ícones e UI
- **Lucide React 0.556.0** - Biblioteca de ícones SVG
- **Prop Types 15.8.1** - Validação de tipos de props

### Desenvolvimento
- **ESLint 9.39.1** - Linter para verificação de código
- **Autoprefixer 10.4.22** - Prefixos CSS automáticos

---

## 📁 Estrutura do Projeto

```
vouch/
├── 📄 package.json           # Dependências e scripts do projeto
├── 📄 tsconfig.json          # Configuração TypeScript principal
├── 📄 tsconfig.app.json      # Configuração TypeScript da aplicação
├── 📄 tsconfig.node.json     # Configuração TypeScript do Vite
├── 📄 vite.config.ts         # Configuração do Vite
├── 📄 tailwind.config.js     # Configuração do Tailwind CSS
├── 📄 postcss.config.js      # Configuração do PostCSS
├── 📄 eslint.config.js       # Configuração do ESLint
├── 📄 index.html             # HTML principal
├── 📄 vite-env.d.ts          # Tipos Vite
│
├── 📂 public/
│   └── 📄 brazil.json        # Dados geográficos do Brasil
│
└── 📂 src/
    ├── 📄 main.tsx           # Ponto de entrada da aplicação
    ├── 📄 App.tsx            # Componente raiz com roteamento
    ├── 📄 index.css          # Estilos globais
    ├── 📄 vite-env.d.ts      # Tipos de ambiente
    │
    ├── 📄 home.tsx           # Página inicial (versão 1)
    ├── 📄 home2.tsx          # Página inicial (versão 2)
    ├── 📄 Services.tsx       # Página de serviços
    ├── 📄 Features.tsx       # Página de recursos/funcionalidades
    ├── 📄 integration.tsx    # Página de integrações
    ├── 📄 partners.tsx       # Página de parceiros
    ├── 📄 About.tsx          # Página sobre a empresa
    │
    └── 📂 components/
        ├── 📄 Header.tsx     # Componente de cabeçalho (navegação)
        ├── 📄 Footer.tsx     # Componente de rodapé
        └── 📄 ScrollToTop.tsx # Utilitário de scroll automático
```

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16.x ou superior)
- **npm** (versão 8.x ou superior) ou **yarn** (versão 1.22.x ou superior)
- **Git** (para controle de versão)

### Verificar instalação

```bash
# Verificar versão do Node.js
node --version

# Verificar versão do npm
npm --version
```

---

## 💻 Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/FernandoGomesMonteiro/demo
cd vouch
```

### 2. Instalar dependências

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install

# Ou usando pnpm
pnpm install
```

---

## 🚀 Executando o Projeto

### Modo Desenvolvimento

Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR):

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Cria uma build otimizada para produção:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist/`

### Visualizar Build de Produção

```bash
npm run preview
```

---

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila TypeScript e cria build de produção |
| `npm run lint` | Executa ESLint para verificar qualidade do código |
| `npm run preview` | Visualiza a build de produção localmente |

---

## 🧩 Componentes

### Header.tsx
Componente de navegação superior presente em todas as páginas. Contém:
- Logo da marca
- Menu de navegação
- Links para diferentes seções
- Design responsivo com mobile menu

**Localização**: `src/components/Header.tsx`

### Footer.tsx
Componente de rodapé com informações da empresa:
- Links úteis
- Informações de contato
- Redes sociais
- Copyright

**Localização**: `src/components/Footer.tsx`

### ScrollToTop.tsx
Componente utilitário que automaticamente leva a página para o topo quando há mudança de rota.

**Localização**: `src/components/ScrollToTop.tsx`

---

## 📄 Páginas

### Home (home.tsx)
Página inicial principal com:
- Banner hero
- Call-to-action principal
- Resumo dos serviços
- Links para outras seções

**Rota**: `/`

### Home 2 (home2.tsx)
Versão alternativa da página inicial com layout ou conteúdo diferente.

**Rota**: `/home2`

### Serviços (Services.tsx)
Apresentação detalhada dos serviços oferecidos:
- Lista de serviços
- Descrições e benefícios
- Preços ou planos
- Chamadas para ação

**Rota**: `/servicos`

### Recursos (Features.tsx)
Página destacando os principais recursos e funcionalidades:
- Características principais
- Benefícios
- Casos de uso
- Comparações

**Rota**: `/recursos`

### Integrações (integration.tsx)
Informações sobre integrações disponíveis:
- Parceiros de integração
- APIs disponíveis
- Documentação de integração
- Exemplos de uso

**Rota**: `/integracoes`

### Parceiros (partners.tsx)
Página de parceiros com:
- Logo dos parceiros
- Descrição de parcerias
- Mapas interativos (usando Leaflet)
- Mapa do Brasil com dados geográficos

**Rota**: `/parceiros`

**Recursos especiais**: Integração com Leaflet e dados de `public/brazil.json`

### Sobre (About.tsx)
Informações sobre a empresa:
- Missão, visão e valores
- História da empresa
- Equipe
- Estatísticas

**Rota**: `/sobre`

---

## ⚙️ Configurações

### Tailwind CSS
Configuração de cores, fontes e componentes customizados em `tailwind.config.js`

### TypeScript
Duas configurações TypeScript:
- `tsconfig.app.json` - Configuração da aplicação
- `tsconfig.node.json` - Configuração do Vite e ferramentas de build

### Vite
Configuração otimizada em `vite.config.ts` com plugin React.

### ESLint
Regras de linting configuradas em `eslint.config.js` para manter consistência de código.

---
