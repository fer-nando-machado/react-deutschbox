# React DeutschBox

[![NPM version](https://img.shields.io/npm/v/react-deutschbox?style=for-the-badge&logo=npm&color=black)](https://www.npmjs.com/package/react-deutschbox) [![GitHub last update](https://img.shields.io/github/last-commit/fer-nando-machado/react-deutschbox?style=for-the-badge&logo=github&label=GitHub&color=black)](https://github.com/fer-nando-machado/react-deutschbox)

A `<input type="checkbox"/>` done in German style.

## Getting Started

After importing the package, you can replace any instance of `<input type="checkbox"/>` in your React code by the `<DeutschBox/>` component.

```html
import DeutschBox from "react-deutschbox";
```

You can interact with your `<DeutschBox/>` using the same attributes you use on any regular `<input/>` from HTML. See some examples at the [Demo page](https://fer-nando-machado.github.io/react-deutschbox/).

## Dependencies

Optionally, you can link the [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) font for a better visual experience.

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap"
/>
```

## Development Commands

In the project directory, you can run:

### `npm install`

Installs the project dependencies.

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production on the `build` folder.

### `npm run preview`

Runs the `build` in preview mode.

### `npm run deploy`

Publishes the `build` to GitHub Pages using [gh-pages](https://github.com/tschaub/gh-pages). Tutorial [here](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f).

### `npm run build:dist`

Builds the package for distribution on the `dist` folder.

### `npm publish`

Publishes the package from `dist` to [npm](https://www.npmjs.com/package/react-deutschbox).
