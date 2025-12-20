const express = require("express");
const app = express();
const routes = require("./routes");
const porta = 3000

app.use(express.urlencoded({ extended: true })); // para interpretar o body da requisição
app.use(routes);

app.listen(porta, () => {
  console.log('Acessar http://localhost:' + porta)
  console.log("Servidor rodando na porta " + porta);
});