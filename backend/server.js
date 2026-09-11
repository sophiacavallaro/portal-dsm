require("dotenv").config();

const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./src/routes/usuarioRoutes");
const cursoRoutes = require("./src/routes/cursoRoutes");

const app = express();

const PORTA = process.env.PORTA || 3000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "MedTrack API funcionando!",
        status: "online",
        versao: "1.0.0"
    });
});

app.get("/status", (req, res) => {
    res.json({
        status: "online",
        servidor: "MedTrack",
        porta: PORTA
    });
});

app.use(usuarioRoutes);
app.use(cursoRoutes);

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada."
    });
});

app.use((erro, req, res, next) => {
    console.error(erro);

    res.status(500).json({
        erro: "Erro interno do servidor."
    });
});

app.listen(PORTA, () => {
    console.log(`MedTrack rodando em http://localhost:${PORTA}`);
    console.log(`GET    /usuarios`);
    console.log(`POST   /usuarios`);
    console.log(`PUT    /usuarios/:id`);
    console.log(`DELETE /usuarios/:id`);
    console.log(`GET    /cursos`);
    console.log(`POST   /cursos`);
    console.log(`PUT    /cursos/:id`);
    console.log(`DELETE /cursos/:id`);
});