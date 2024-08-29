## Project Setup to Final Test (Nuxt 3)

Este projeto foi desenvolvido com Nuxt 3 e inclui TailwindCSS para a estilização. O Dashboard presente é apenas um exemplo de design e não representa a funcionalidade final.

## Estrutura do Projeto

assets/styles
Nesta pasta, você encontrará o arquivo CSS principal que gerencia os estilos globais da aplicação.

## components

Os componentes estão organizados de maneira clara e divididos por função:

Navegação do Topo: Componentes responsáveis pela navegação superior.
Navegação Esquerda: Componentes que gerenciam o menu lateral esquerdo.
Pop-up dos Containers: Componentes que controlam os pop-ups dos containers.

## Comportamento do Pop-up

O comportamento dos pop-ups difere entre dispositivos:

## Desktop: O pop-up abre em um modal sobreposto.

## Mobile: O pop-up é exibido diretamente no menu do container ativo no momento.

## FlowSide

Todo o conteúdo relacionado ao menu do container atual está organizado na pasta FlowSide. Aqui, você encontrará todos os componentes e funcionalidades relacionados ao fluxo de trabalho do container ativo.

Enjoy Tecnovix!

Para saber mais, consulte a documentação do Nuxt 3.

## Setup

Certifique-se de instalar as dependências antes de iniciar o projeto:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

nO servidor está em `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Produção

Buildar para a produção:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```
