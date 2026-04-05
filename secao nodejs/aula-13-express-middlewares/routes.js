const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Next -> Próxima função a ser executada
// function meuMiddleware(req, res, next) {
//   req.session = {nome: 'Guilherme', idade: 28 }
//   console.log()
//   console.log('Passou pelo middleware')
//   console.log()
//   next()
// }
// rotas da home
route.get("/", homeController.paginaInicial)
route.post("/", homeController.trataPost)

// rotas de contato
route.get("/contato", contatoController.paginaInicial)



module.exports = route
