# Desenvolvimento Front-End - SPA

## 📋 Sobre o Projeto
Aplicação single-page (SPA) desenvolvida em JavaScript puro (vanilla), com roteamento via hash, renderização dinâmica de conteúdo, formulário de contato com validação, persistência local de dados e integração com biblioteca externa via CDN.

## 🚀 Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+) — módulos ES6 (import/export)
- Day.js (via CDN/jsDelivr) — formatação de datas
- LocalStorage — persistência de dados no navegador
- Git & GitHub — controle de versão (GitFlow, Conventional Commits, SemVer)

## 📁 Estrutura de Pastas


## ⚙️ Pré-requisitos
- Navegador atualizado (Chrome, Edge, Firefox)
- Visual Studio Code
- Extensão Live Server (VS Code)

## ▶️ Como Executar Localmente
1. Clone este repositório: `git clone https://github.com/bruno-melo-r/desenvolvimento-frontend-spa.git`
2. Abra a pasta no VS Code
3. Instale a extensão Live Server (caso ainda não tenha)
4. Clique com o botão direito em `html/index.html` → "Open with Live Server"
5. Não abra o arquivo direto (file://), pois os módulos ES6 exigem um servidor local

## 🔀 Versionamento e Estratégia de Branches
Este projeto segue o modelo GitFlow:
- `main` — versão estável/produção
- `develop` — integração de desenvolvimento
- `feature/*` — novas funcionalidades
- `hotfix/*` — correções urgentes

Commits seguem Conventional Commits (feat:, fix:, chore:) e releases seguem Versionamento Semântico (MAJOR.MINOR.PATCH), com tags v1.0.0, v1.1.0, v1.1.1.

## 👤 Autor
Bruno Melo