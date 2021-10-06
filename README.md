# @tasoskakour/cra-template-typescript

> Opinionated Create React App template with Typescript.<sup>1</sup>

<sup>1</sup>: [PWA](https://web.dev/progressive-web-apps/), [eslint](https://eslint.org/), [Material UI](https://material-ui.com/), [react-router](https://reactrouter.com/), [cypress](https://www.cypress.io/), [Google Analytics](https://analytics.google.com/), [Sentry](https://sentry.io/welcome/), [apollo-client](https://www.apollographql.com/docs/react/), [zustand](https://zustand.surge.sh/), [craco](https://github.com/gsoft-inc/craco), and other bits and bobs.

[![npm](https://img.shields.io/npm/v/@tasoskakour/cra-template-typescript?style=flat&logo=npm&label=)](https://www.npmjs.com/package/@tasoskakour/cra-template-typescript) [![style](https://img.shields.io/badge/tasoskakour.com-blueviolet.svg?style=flat)](https://tasoskakour.com)

## Usage 

```sh
$ npx create-react-app my-app --template @tasoskakour/cra-template-typescript
```

### If building a React library

If you want to use this template to build a react library, or just a React app that will be imported from another React/JS project, then you would have to adjust the `build` command and add a `tsconfig.build.json` file to specify what and how you want to build. 

Personally I adjust the `build` and also add a `copyfiles` command as 

```json
"copy-files": "copyfiles -f src/**/*.{css,svg} dist/",
"build": "NODE_ENV=production rm -rf dist && yarn copy-files &&  tsc --build \"./tsconfig.build.json\"",
```

and I add `tsconfig.build.json` file with the below configuration (depends on what components you want to actually build): 

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es2015", "dom"],
    "outDir": "dist",
    "jsx": "react-jsx",
    "module": "commonjs",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "strict": true,
    "noImplicitAny": false,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/components"
  ],
  "files": [ "./src/components/index.ts", "./src/react-app-env.d.ts"],
  "exclude": [
    "node_modules",
    "**/*.test.ts"
  ]
}
```

Finally I set the `main` property of `package.json` to something like `"main": "dist/index.js",`

> Note: Be sure to edit `.env` & `.github/workflows/ci.yml` accordingly, before starting developing!

## The end

🥰 Big props to my buddy [Napoleon](https://github.com/iamnapo/cra-template), as this repo is heavily influenced from his own cra-template.