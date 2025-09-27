/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

----- Já vimos ------
Object.keys(retorna as chaves)
Object.freeze(trava o objeto)
Object.defineProperties(define varias propriedades)
Object.defineProperty(define uma propriedade)
*/

const produto = {
  nome: 'Caneca',
  preco: 1.8
}
const outraCoisa = produto // Apontam para o mesmo endereço na memoria

produto.nome = 'Outra coisa'
// console.log(`Produto original: ${produto.nome} - Outra coisa: ${outraCoisa.nome}`)
// retorno
// Produto original: Outra coisa - Outra coisa: Outra coisa

const produto2 = {
  nome: 'Colher',
  preco: 5
}
// Copiando o conteudo do produto2 com o spread operator
const outraCoisa2 = {
  ...produto2,
  material: "porcelana"
}
// console.log(outraCoisa2)

const produto3 = {
  nome: 'Colher',
  preco: 5
}

// O Object.assign cria um novo objeto feito a partir de outro(s) objetos 
// informados como argumentos
// Copiando o conteudo do produto3 com o Object.assign
// obj.assign(objeto a ser criado, 
// objeto a ser copiado, 
// propriedades a serem adicionadas no obj copiado)
const outraCoisa3 = Object.assign({}, produto3, {material: "porcelana"})
console.log(outraCoisa3)

// Com esse método conseguimos ver a descrição das propriedades de um objeto
console.log(Object.getOwnPropertyDescriptor(produto3, 'nome'))

// Com esse método conseguimos ver todas as chaves de um objeto
console.log(Object.keys(produto3))

// Com esse método conseguimos ver todas os valores de um objeto
console.log(Object.values(produto3))

// Com esse método conseguimos ver todas as chaves e valores de um objeto
console.log(Object.entries(produto3))

// Conseguimos fazer desestruturação com o Object.entries()
for (let [chave, valor] of Object.entries(produto3)){
  console.log(chave, valor)
} 