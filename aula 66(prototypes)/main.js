/*
Javascript é baseado em protótipos para passar propriedades e métodos de um
objeto para o outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referência interna para um protótipo(__proto__) que vem
da propriedade prototype da função construtora que foi usada para cria-lo. Quando
tentamos acesar um membto de um objeto, primeiro o motor do JS vai tentar encontrar
esse membro no próprio objeto e depois a cadeia de protótipos é usada até o topo(null)
até encontrar (ou não) tal membro
*/

// Quando criamos um objeto sem o uso de prototype, todo novo objeto vai ter os mesmos 
// métodos e propriedades do molde usado para criar ele, isso pode acarretar em uso
// desnecessário de memória. A propriedade prototype serve para resolver esse problema.
// A propriedade __proto__ está no 'pai' do objeto, não necessáriamente ela está dentro
// do objeto
function Pessoa(nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Cesar', 'Romero')
const data = new Date()

// Conseguimos ver a diferença de criação de um objeto com prototype(data)
// e sem ele(pessoa1)
console.dir(pessoa1)
console.dir(data)

// Criando um construtctor function com prototype
function Pessoa2(nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome
  // this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`
}
Pessoa2.prototype.fala = () => console.log(`Meu nome é ${Pessoa2.nome} ${Pessoa2.sobrenome}`)
Pessoa2.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}
const pessoa2 = new Pessoa2('Cesar', 'Romero')
const pessoa3 = new Pessoa2('Fred', 'Santos')
console.dir(pessoa2)
// Criando dessa forma, o objeto pessoa2 herda os métodos da pessoa2.prototype e
// são com o método de prototype, fala no caso, dentro do [[Prototype]] de pessoa2
// e não junto com os outros métodos/propriedades que criamos normalmente.

// A ordem em que o motor do JS procura os membros de um objeto
// 1 - Busca na propria criação do objeto(pessoa2)
// 2 - Busca no protótipo do molde da criação(Pessoa.prototype)
// 3 - Busca no protótipo do próprio objeto(Object.prototype)