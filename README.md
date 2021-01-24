# WordPress Boilerplate

## Requirements

- Yarn `v1.x`
- Node `v14.x`

## Get started

Install dependencies with Yarn

```bash
yarn
```

Start webpack server with

```bash
yarn start
```

Enjoy 🥳

If your browser doesn't open navigate to:

[http://localhost:9000](http://localhost:9000)

## Linters and Code Formatters

This project has some linters/code formatters like [eslint](https://eslint.org/) and [prettier](https://prettier.io/) to improve the code quality.

### For commits

We are using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and [commitlint](https://github.com/conventional-changelog/commitlint), so you need to follow [this rules](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).

An example:

```
fix: prevent add products to minicart when the quantity is equal to 0

Fix #DEV_AZURE_WORK_ITEM_ID
```

### For branches

We have a linter for [git branch names](https://github.com/barzik/branch-name-lint#readme), so you can use these prefixes for your branch:

- feature (branch for a new feature).
- hotfix (branch for important bugfixes in production).
- bugfix (branch for bugfixes to be added in the next release).

The name of the git branches must be in lowercase.

An example:

```
feature/minicart-component
```

### For SCSS

We have a linter for the SCSS code, this lint use the follow config:

- [stylelint-selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern).
- [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

## Build

```bash
yarn build
```
