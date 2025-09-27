// Função construtora do objeto - new Object()

const objA = {
  chaveA: 'A',
  // __proto__: Object.prototype -> função que vem implícita no objeto
}

const objB = {
  chaveB: 'B',
  // __proto__: objA
}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA) // define o protótipo de objB como objA
Object.setPrototypeOf(objC, objB) // define o protótipo de objB como objA

// Consguimos acessar o prototype de um objeto com o Object.getPrototypeOf(obj)
Object.getPrototypeOf(objA)

function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.desconto = function(desconto){
  this.preco = this.preco - (this.preco * (desconto / 100))
}
Produto.prototype.aumento = function(aumento){
  this.preco = this.preco + (this.preco * (aumento / 100))
}

const p1 = new Produto('Camiseta', 50)
console.log(p1)

const p2 = {
  nome: 'Caneca',
  preco: 15
};
// Conseguimos definir um prototype para um objeto literal com
// o Object.setPrototypeOf
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)
console.log(p2)

// Podemos criar um objeto e configurar o prototype da criação dele de outra forma 
// também, nesse caso usando o Object.create(obj.prototype, 
// {parametros e configs do objeto}). O segundo parâmetro é opcional
const p3 = Object.create(Produto.prototype,{
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 113
  },
  tamanho2: {    
    writable: true,
    configurable: true,
    enumerable: true,
    value: 43}
})
p3.aumento(10)
console.log(p3)