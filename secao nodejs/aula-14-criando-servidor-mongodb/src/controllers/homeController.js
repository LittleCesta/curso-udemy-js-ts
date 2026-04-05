const HomeModel = require("../models/HomeModel");
HomeModel.find()
// create({
//   titulo: "Outo curso de Node",
//   descricao: "Aprendendo mais sobre NodeJs e MongoDB"
// })
.then((dados) => {
  console.log(dados)
})
exports.paginaInicial = (req, res) => {
  console.log("Respondendo ao cliente")
    res.render("index");
    return
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}
