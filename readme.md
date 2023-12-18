##aniciar un proyecto typescript + node + express

##accede a tu path `cd && cd development/node/rattapp`

####Instala typescript de forma global
`pnpm install typescript -g`
####Inicia el proyecto pnpm
`pnpm init -y`

####instala typescript, linter, los tipos de express  como dependencia de desarrollo
```
pnpm install typescript -D -E
pnpm install ts-standard -D -E
pnpm install @types/express -D -E
pnpm install ts-node-dev -D -E
```
####Instala express js, dotenv
```
pnpm install express -E
pnpm install dotenv
```
####Haz un tsc --init para que se cree tu tsConfig
`tsc --init`
####En tu package json configura para que tus script inicien bien la app: EJ
```
"scripts": {
  "tsc": "tsc",
  "start": "node build/index.js",
  "dev": "ts-node-dev src/index.ts"
},
```
