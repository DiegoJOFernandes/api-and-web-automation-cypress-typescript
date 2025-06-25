# 🐍 API & WEB Automation Cypress + TypeScript

Automação de testes para **API** e **Web** utilizando [Cypress](https://www.cypress.io/) e [TypeScript](https://www.typescriptlang.org/).
A estrutura foi pensada para garantir manutenção simples e clara, com Page Objects para Web, requests centralizados para API e separação clara entre escopos.

---

## 📁 Estrutura de Pastas

```
cypress/
├─ e2e/
│  └─ api/
│  └─ web/
├─ support/
│  └─ api/
│  └─ page-objects/
├─ interfaces/
├─ data/
├─ utils/
cypress.config.ts
api.config.ts
```

---

## ⚡️ Scripts

| Script          | Descrição                         |
| --------------- | --------------------------------- |
| `test:web`      | Executa todos os testes Web       |
| `test:api`      | Executa todos os testes de API    |
| `test:open:web` | Abre o Cypress para testes Web    |
| `test:open:api` | Abre o Cypress para testes de API |

---

## 🔥 Boas Práticas Adotadas

✅ **Separação de escopos** (API e Web) para melhorar manutenção e visibilidade.
✅ **Page Objects** para representar páginas e centralizar lógica de interação (Ex.: `login.page.ts`, `cadastro.page.ts`, `carrinho.page.ts`).
✅ **Centralização de requests de API** (`support/api/...`) para reutilização e manutenção simples.
✅ **Geração de dados dinâmicos** com [Faker](https://fakerjs.dev/) para evitar duplicações e tornar testes idempotentes.
✅ Tipagem clara e contratos definidos (`interfaces/...`) para melhorar entendimento e manutenção.
✅ Scripts de CI para integração contínua no [GitHub Actions](https://docs.github.com/actions).

---

## ⚡️ Bibliotecas Utilizadas

* **Cypress** – Framework de testes end-to-end e integração.
* **TypeScript** – Tipagem estática para melhorar manutenção e evitar erros.
* **Faker.js** – Geração de dados dinâmicos para testes.
* **cypress-plugin-api** – Melhor sintaxe para testes de API.
* **dotenv** – Carregamento de variáveis de ambiente.
* **Node.js** / NPM – Ambiente e gerenciamento de dependências.

---

## 🚀 Boas Práticas e Benefícios

✅ Isolamento de responsabilidades (cada arquivo e pasta com um propósito claro).
✅ Scripts claros e consistentes para rodar testes por escopo.
✅ Integração simples com pipelines de CI/CD.
✅ Facilidade para adicionar novas páginas, endpoints e testes sem impacto no restante do projeto.
