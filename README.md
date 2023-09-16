Teste Front-end jr econverse

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

## Instalação

Siga estas etapas para instalar e configurar o projeto em sua máquina local:

1. Clone este repositório para o seu computador:

   ```bash
   git clone https://github.com/seu-nome-de-usuario/nome-do-repositorio.git

2.Navegue até o diretório do projeto:

cd nome-do-repositorio

3.Instale as dependências do projeto usando o npm:

npm install

#Rodando o Projeto

Após a instalação das dependências, você pode executar o projeto localmente. Use o seguinte comando:

npm start

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
