require('dotenv').config()
const express = require("express");
const routes = require("./routes");
const { middlewareGlobal } = require('./src/middlewares/middleware')
const app = express();

// Conexão com o mongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log('MongoDB conectado com sucesso!')
    app.emit('pronto')
  })
  .catch(e => {
    console.error('Erro ao conectar no MongoDB:', e.message)
  })

const porta = 3000
const path = require('path');
const viewsPath = path.resolve(__dirname, 'src', 'views') 
const publicPath = path.resolve(__dirname, 'public')

const session = require('express-session')
const { default: MongoStore } = require('connect-mongo');
const flash = require('connect-flash') 

// para interpretar o body da requisição
app.use(express.urlencoded({ extended: true })); 

// Arquivos estáticos são onde as pastas e arquivos públicos ficam
// neles salvamos imagens, css, scripts do front-end, etc.
// para arquivos estáticos como css, imagens, etc.
app.use(express.static(publicPath)); 

const sessionOptions = session({
  secret: 'segredosecreto',
  store: MongoStore.create({
    mongoUrl: process.env.MONGOOSE_URL,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true
  }
})

app.use(sessionOptions);
app.use(flash());

// No express precisamos definir de onde ele vai puxar as views
// e fazmos isso com o app.set('views', caminhoDaPasteDeViews)
app.set('views', viewsPath);
// Além disso precisamos definir a engine que será utilizada.
// Nesse caso estamos definindo a engine de template como EJS
// por ser mais compativel com o HTML puro.
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal)
app.use(routes);

app.on('pronto', () => {
  app.listen(porta, () => {
  console.log('Acessar http://localhost:' + porta)
  console.log("Servidor rodando na porta " + porta);
});
})

