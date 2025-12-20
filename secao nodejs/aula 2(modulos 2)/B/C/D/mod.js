// module.exports = function (a, b) {
//   return a * b
// }

module.exports = class Cachorro {
  constructor(nome){
    this.nome = nome
  }

  latir(){
    console.log(`${this.nome} diz: au au au`)
  }

}
