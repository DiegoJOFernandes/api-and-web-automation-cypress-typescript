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

### 🔐 Variáveis de Ambiente (.env)

> ⚠️ Não é uma boa prática subir o arquivo `.env` para o repositório, pois contém dados sensíveis (URLs, e‑mails e senhas).
> Por isso, este arquivo não está versionado e não deve ser commitado.

### ✅ O que fazer

1. Crie um arquivo `.env` **localmente** para rodar a automação:

   ```bash
   API_URL=https://serverest.dev/
   API_EMAIL=fulano@qa.com
   API_PASSWORD=teste
   WEB_URL=https://front.serverest.dev/
   ```
2. Solicite as chaves (`API_URL`, `API_EMAIL`, `API_PASSWORD`, `WEB_URL`) à equipe responsável para preenchê-las corretamente.
3. No GitHub Actions, configure as variáveis como **GitHub Secrets** para não expor dados sensíveis no repositório.

---

### 🗄️ Massa de Dados (`data`) vs `fixtures`

> ⚡️ Não estamos utilizando a pasta padrão `fixtures`, mas sim a pasta `data`.
> A decisão foi feita para centralizar e organizar todas as massas de dados e payloads usados nos testes, facilitando manutenção e entendimento.

### ✅ Por quê?

* Os arquivos em `data` contém todas as massas de dados e funções para gerar dados dinâmicos (usando [Faker.js](https://fakerjs.dev/)), promovendo testes mais consistentes e menos duplicações.
* Melhor legibilidade e controle sobre dados de teste, especialmente quando são usados em múltiplos endpoints ou cenários.

### 📁 Resultado

```
cypress/
├─ e2e/
├─ data/            <-- Dados e payloads centralizados aqui
├─ support/
├─ interfaces/
```

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
