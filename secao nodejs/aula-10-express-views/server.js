const express = require("express");
const app = express();
const routes = require("./routes");
const porta = 3000
const path = require('path');
const viewsPath = path.resolve(__dirname, 'src', 'views') 

app.use(express.urlencoded({ extended: true })); // para interpretar o body da requisição
// No express precisamos definir de onde ele vai puxar as views
// e fazmos isso com o app.set('views', caminhoDaPasteDeViews)
app.set('views', viewsPath);
// Além disso precisamos definir a engine que será utilizada.
// Nesse caso estamos definindo a engine de template como EJS
// por ser mais compativel com o HTML puro.
app.set('view engine', 'ejs');
app.use(routes);

app.listen(porta, () => {
  console.log('Acessar http://localhost:' + porta)
  console.log("Servidor rodando na porta " + porta);
});