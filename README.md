# Atlys Assignment

This project uses latest React version, i.e React 18 and React router v6. It also boosts about using webpack 5 with optizations.

Also this project is structured using [Atomic design Pattern](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97)

## This project has been enabled with the following optimizations-

1. mini-css-extract-plugin: It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

2. Route based chunk separartion. Refer router.js file.

3. Webpack SplitChunksPlugin- The SplitChunks plugin, in particular, is an essential feature that helps break down large codebases into smaller chunks.

4. Tree Shaking- Tree shaking is the practice of removing unused code in your production build.

5. Re-useable components.

### Project is built using-

Node version- v18.18.0
NPM version- 10.2.0

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified.
Your app is ready to be deployed!
