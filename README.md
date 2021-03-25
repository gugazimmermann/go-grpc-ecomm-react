# Go gRPC Ecommerce - React

`npx create-react-app go-grpc-ecomm-react --template typescript && cd go-grpc-ecomm-react`

`git init`

`npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier husky@4 pretty-quick lint-staged`

create `.eslintrc.js`

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {},
};
```

create `.prettierrc.js`

```js
module.exports = {
  printWidth: 120,
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  jsxSingleQuote: false,
  useTabs: false,
  tabWidth: 2,
};
```

in `package.json`

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint '*/**/*.{js,ts,tsx}' --quiet --fix",
    "prettier": "prettier --write \"./**/*.{js,jsx,json,md}\""
  },
  "lint-staged": {
    "*.js": "eslint"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && pretty-quick --staged"
    }
  },
```
