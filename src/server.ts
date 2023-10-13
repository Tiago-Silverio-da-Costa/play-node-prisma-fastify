// console.log('oi')
// const nome: string = 'tiago'
// console.log(nome)

// npx i tsx -D  ==> o node não roda typesc ript, então precisamos instalar o tsx para converter  os typescript para javascript
// npx t sc --init ==> cria o arquivo tsconfig.json

import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
  origin: ['http://localhost:3000', 'http://domain'], //(coloque o domain aqui) se deixar true, todas URLs de front-end poderão acessar nosso back-end
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("Server is running on port 3333"));
