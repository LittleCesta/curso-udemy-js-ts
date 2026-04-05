const HomeModel = require("../models/HomeModel");
// HomeModel.find()
// // create({
// //   titulo: "Outo curso de Node",
// //   descricao: "Aprendendo mais sobre NodeJs e MongoDB"
// // })
// .then((dados) => {
//   console.log(dados)
// })

exports.paginaInicial = async (req, res) => {
  try {
    const dados = await HomeModel.find();
    // req.session.usuario = { nome: "Cesar", logado: true }
    // req.flash('info', 'Bem-vindo à página inicial!');
    // req.flash('error', 'Olá mundo"');
    // req.flash('success', 'Oiii');
    console.log(req.flash('info'), req.flash('success'), req.flash('error'))
    res.render("index");
  } catch (e) {
    console.error(e);
    res.status(500).send("Erro ao buscar dados");
  }
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}
