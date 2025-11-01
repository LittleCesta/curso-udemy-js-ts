class Pessoa {
  // Metodo construtor que sempre é chamado ao criar classes.
  constructor(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
  }

  //Métodos criados em classes automáticamente já são feitos no prototype da classe
  falar(){
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
  }
  comer(){
    console.log(`${this.nome} esta comendo`)
  }
  beber(){
  console.log(`${this.nome} esta bebendo`)
  }
}

// Estamso instanciando uma pessoa, ou seja, criando um objeto a partir de uma classe
const p1 = new Pessoa('Cesar', 'Romero')
const p2 = new Pessoa('Jose', 'Souza')
const p3 = new Pessoa('Fred', 'Gomes')
const p4 = new Pessoa('Alfredo', 'Silva')
console.log(p1, p2, p3, p4)

function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function(){
  console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
}

const p5 = new Pessoa2('Cesar', 'Romero')
console.log(p5)