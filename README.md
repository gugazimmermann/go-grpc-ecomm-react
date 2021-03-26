# Go gRPC Ecommerce - React

## Configure the project

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
    "*.{js,jsx,json}": "eslint"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && pretty-quick --staged"
    }
  },
```

# Store Sample Data

`public/imgs` -> All the products images

`src/interfaces/index.ts` -> The Products and Categories typescript interfaces

`src/utils/sample-data.ts` -> The Products and Categories sample data

# Store Layout

`npm install react-bootstrap bootstrap`

Add Bootstrap CSS
`public/index.html`

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
```

`src/App.scss`

```css
@import "~bootstrap/scss/bootstrap";
```

`npm install node-sass`

`npm install react-router-dom && npm install --save-dev @types/react-router-dom`

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
