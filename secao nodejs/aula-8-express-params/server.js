const express = require("express");
const app = express();
const porta = 3000

// Por padrão o express não le os dados enviados de 
// um formulário via pos e precisamos dessa linha para
// que ele passe a ler
app.use(express.urlencoded({ extended: true })); // para interpretar o body da requisição

// Exempplo de url com params e query strings
// http://facebook.com/profiles/12345?campanha=googleads
// URL -> http://facebook.com/profiles/ 
// Parâmetros -> 12345
// Query Strings -> ?campanha=googleads

app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
      <input type="text" name="nome">
      <button>Enviar</button>
    </form>
  `);
})

// nesse get estamos definindo que o parametro
// idUsuario vai ser opcional e que ao fazer
// uma requisição para essa rota podemos ou não
// passar esse parametro.
//a versão atual do express é incompativel com o 
// '?' nos parametros da URl, por isso vou
// utilizar '/testes{/:idUsuarios}{.:ext}' ao invés de
// '/testes/:idUsuarios?'
app.get('/testes{/:idUsuarios}{.:ext}{/:parametro}{.:ext}', (req, res) => {
  console.log(req.params) // Exibe os parâmetros da requisição
  console.log(req.query.nome) // Exibe as query strings da requisição, no caso, o que vem depois do '?' na URL
  res.send(req.params)
})

// Vem no body da requisição
// O que vem depois do body. deve ter o mesmo nome que
// a tag name do input tem
app.post("/", (req, res) => {
  console.log(req.body)
  res.send(`
    <h1>O que foi recebido: ${req.body.nome}</h1>
  `);
})

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato conosco!");
})
app.listen(porta, () => {
  console.log('Acessar http://localhost:' + porta)
  console.log("Servidor rodando na porta " + porta);
});