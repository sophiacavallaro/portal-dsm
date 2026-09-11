const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuarioRoutes");
const cursoRoutes = require("./routes/cursoRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(usuarioRoutes);
app.use(cursoRoutes);

app.get("/status", (req, res) => {
    res.json({
        status: "online",
        sistema: "MedTrack"
    });
});

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada."
    });
});

module.exports = app;