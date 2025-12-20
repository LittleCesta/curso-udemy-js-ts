// const nome = "Cesar"
// const sobrenome = "Romero"

// const falaNome = () => {
//   return nome + " " + sorenome
// }

// // module.exports.nome = nome;
// // module.exports.sorenome = sorenome;
// // module.exports.falaNome = falaNome;


// //  console.log(module)
// //  console.log(module.exports)

// // Exports é uma referencia ao module.exports, então as duas formas de exportar 
// // fazem a mesma coisa
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "Qualquer coisa"
// // O this aqui aponta para o exports ou o module.exports


// console.log(module.exports)

class Pessoa {
  constructor(nome){
    this.nome = nome
  }
}

exports.Pessoa = Pessoa