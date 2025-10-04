# Blog Pessoal com Next.js e Sanity.io

Este é um projeto de estudo para a construção de uma plataforma de blog moderna e full stack, utilizando as tecnologias mais recentes do ecossistema JavaScript. O objetivo é criar um site performático, com conteúdo gerenciável e deploy automatizado, servindo como uma peça central para um portfólio de desenvolvedor.

**Acesse a versão ao vivo do projeto:** [https://blog-project-mu-five.vercel.app/](https://blog-project-mu-five.vercel.app/ )

## Funcionalidades

*   **Frontend com Next.js:** Interface rápida e otimizada para SEO, construída com React e o App Router.
*   **CMS Headless com Sanity.io:** O conteúdo (posts, autores, etc.) é totalmente gerenciado através de um painel de controle (Studio) integrado.
*   **Páginas Dinâmicas:** Cada post do blog tem sua própria página gerada dinamicamente a partir do seu "slug".
*   **Estilização Moderna:** A interface é estilizada com Tailwind CSS, incluindo formatação automática de artigos com o plugin `@tailwindcss/typography`.
*   **Deploy Contínuo:** Cada `push` para a branch `main` no GitHub aciona um novo deploy automático na Vercel.

## Tecnologias Utilizadas

*   **Framework:** Next.js (com App Router)
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS (com `@tailwindcss/typography`)
*   **CMS (Headless):** Sanity.io (com Studio embutido)
*   **Renderização de Conteúdo:** `@portabletext/react`
*   **Deploy:** Vercel

## Cronograma do Projeto (Concluído ✅)

- [x] **Dia 1:** Configuração inicial do projeto, deploy na Vercel e criação do README.
- [x] **Dia 2:** Estruturação do layout principal (Header e Footer).
- [x] **Dia 3:** Estilização do layout e limpeza da página inicial.
- [x] **Dia 4:** Criação da página estática "Sobre".
- [x] **Dia 5:** Integração com o Sanity.io e configuração do Studio embutido.
- [x] **Dia 6:** Criação e publicação de conteúdo de teste no Sanity Studio.
- [x] **Dia 7:** Conexão do frontend para buscar e exibir a lista de posts na página inicial.
- [x] **Dia 8:** Criação das páginas dinâmicas para renderizar cada post individualmente.
- [x] **Dia 9:** Resolução de problemas de ambiente e configuração do Tailwind CSS.

---
*Projeto desenvolvido como parte de um estudo aprofundado sobre desenvolvimento web moderno.*
