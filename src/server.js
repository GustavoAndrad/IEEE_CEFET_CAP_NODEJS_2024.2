require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const porta = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

const app = express();

app.use(express.json())
app.use(routes);

app.listen(porta, host, () => {
    console.log(`Executando em:${host}:${porta}`);
});