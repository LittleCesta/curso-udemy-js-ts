const express = require("express");
const app = express();
const porta = 3000

//         CRIAR   LER  ATUALIZAR DELETAR
// CRUD -> CREATE, READ, UPDATE e DELETE
//          POST   GET    PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

// Primeiro parâmetro é a rota e o segundo parâmetro é 
// a função que será executada quando essa rota for acessada
app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
      <input type="text" name="nome">
      <button>Enviar</button>
    </form>
  `);
})
// O post vai ser executado quando o formulário for submetido, ou seja, quando a partir
// da rota informada houver qualquer operação de POST, vai executar o que estiver nesse
// app.post
app.post("/", (req, res) => {
  res.send(`
    <h1>Recebi a mensagem</h1>
  `);
})

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato conosco!");
})

// Precisamos informar a porta que o servidor irá rodar
// Ao colocarmos o app.listen(n) passamos em qual porta o express vai ficar escutando 
// caso haja alguma requisição nessa porta
app.listen(porta, () => {
  console.log('Acessar http://localhost:' + porta)
  console.log("Servidor rodando na porta " + porta);
});