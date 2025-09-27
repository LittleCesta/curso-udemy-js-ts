// Objetos sempre são formados por um par de chave e valor ex: 
// nome: 'Cesar'
const pessoa = {
  nome: 'Cesar',
  sobrenome: 'Romero',
  idade: 30
}
const chave = 'sobrenome'

// Conseguimos acessar as propriedades do objeto com mais de uma forma
// Utilizando o dot notation - pessoa.nome
console.log(pessoa.nome)

// Utilizando colchetes - pessoa['nome']
console.log(pessoa['nome'])

// Com colchetes conseguimos colocar um valor dinâmico na chave
console.log(pessoa[chave])
console.log(pessoa[`${chave}`])

// Podemos criar um objeto utilizando o contrutor Object
const pessoa1 = new Object()
pessoa1.nome = 'Fred'
pessoa1.sobrenome = 'Souza'
pessoa1.idade = 30
console.log(pessoa1)

delete pessoa1.idade
console.log(pessoa1)

pessoa1.idade = 30

pessoa1.falarNome = function(){
  return(`Meu nome é ${this.nome}`)
}
console.log(pessoa1.falarNome())

pessoa1.getDataNascimento = function(){
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento())

// Conseguimos ver as chaves do bjeto com o for.. in, além de poder acessar os valores
for(let chave in pessoa1){
  console.log(`${chave} - ${pessoa1[chave]}`)
}

// Factory functions/ Constructor functions/ Classes
// Função fabrica -> Retorna objetos. Inicia com letra minúscula. Ex: criaPessoa
console.log(`${"-".repeat(10)} Função fabrica ${"-".repeat(10)}`)
function criaPessoa(nome, sobrenome){
  return{
    nome,
    sobrenome,
    get nomeCompleto(){ // Com a palavra get conseguimos acessar esse método sem a necessidade dos parentesis quando chamamos ele
      return `${this.nome} ${this.sobrenome}`
    },
  }
}

const p1 = criaPessoa('Cesar', 'Romero')
console.log(p1)
console.log(p1.nomeCompleto)


// Função construtora -> Constroi objetos.Inicia com letra maiúscula 
// e precisa da palavra chave 'new'.
// Começar com letra maiúscula não é regra, mas é uma convenção.
// Ex: new Pessoa
console.log(`${"-".repeat(10)} Função construtora ${"-".repeat(10)}`)
function Pessoa(nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome
  this.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
  }

  // Conseguimos travar diretamente da função construtora também, assim qualquer 
  // objeto criado a partir dela vai ter a trava de alteração.
  // Object.freeze(this)
}

// A palavra 'new' cria um objeto vazio {} 
// e faz a ligação entre a função construtora e o objeto com o uso do this
// além disso, ele retorna o objeto criado
const p2 = new Pessoa('Cesar', 'Romero')
console.log(p2)// Pessoa { nome: 'Cesar', sobrenome: 'Romero', nomeCompleto: [Function (anonymous)]}
console.log(p2.nomeCompleto())

// mesmo tendo criado o objeto com const, conseguimos alterar os valores dentro dele 
// pois por se tratar de uma variável por referência, ela aponta para o mesmo local na memória
p2.sobrenome = 'Souza'
console.log(p2)

// Só não conseguimos mudar o objeto em si
// p2 = { Vai dar erro: Assignment to constant variable.
//   nome: 'Cesar',
//   sobrenome: 'Souza'
// }
// console.log(p2)

// Conseguimos também travar qualquer alteração que queremos fazer ao objeto
// Com isso, não vai gerar nenhum erro e o objeto não vai sofrer alterações
// Pode ser usado em arrays também
Object.freeze(p2)
p2.sobrenome = 'Santos'
console.log(p2)
