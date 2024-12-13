require("dotenv").config();
const express = require("express");

const porta = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

const app = express();

app.listen(porta, host, () => {
    console.log(`Executando em:${host}:${porta}`);
});