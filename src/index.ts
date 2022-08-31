import express from "express";
import cors from "cors";
import router from "./routes/index";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);

const PORT = 4000;

server.listen(PORT, () => console.log(`Servidor at port ${PORT}`));