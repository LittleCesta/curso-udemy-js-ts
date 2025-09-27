// Com o reduce reduzimos o tamanho do array original para somente um elemento.
// Sempre precisamos retornar algo para o acumulador poder ser atualizado.
// A variável acumulador serve para pegar o total dos elementos do array
// o 0 antes de fechar a função serve para dar um valor inicial ao acumulador, se não
// informar o valor inicial, ele pega o do primeiro elemento do array.

// Some todos os numeros(Reduce)
// Retorne um array com os pares(Filter)
// Retorne um arrau com o dobro de valores(Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce((acumulador, valor) => {
  acumulador += valor
  return acumulador
}, 0)
console.log("Total: " + total)

// Conseguimos passar um array como acumulador e retornar um array
// Não é recomendado fazer usando o reduce, conseguimos fazer melhor com o filter
const totalPar = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor)
  return acumulador
}, [])
console.log("Total Par: ", totalPar)

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Leticia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
  {nome: 'Fred', idade: 68}
]

// Nesse código estamos verificando se a idade do acumulador é maior que a idade da pessoa
// No caso, o acumulador vai começar sendo a primeira pessoa, 'Luiz' no caso
// e a partir dai ele vai comparar com as outras pessoas do array, se a pessoa atual
// tiver a idade maior que a pessoa do acumulador, o acumulador vai ser substituido
// pela pessoa atual, se não, vai manter o acumulador.
const maisVelha = pessoas.reduce((acumulador, pessoa) => {
  if (acumulador.idade > pessoa.idade) return acumulador
  return pessoa
})
console.log("Pessoa mais velha: ", maisVelha)





