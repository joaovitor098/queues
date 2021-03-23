import express from "express";
import Routers from "./Router";

const server = express();

server.use(Routers);

const port = 3333;

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default server;
