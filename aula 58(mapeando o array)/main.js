// Altera valores do array - Retornamos um array exatamente do mesmo tamanho do array 
// original com os valores modificados.
// O método Map altera os valores do array original.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 4, 11, 15, 22, 27]

const numerosEmDobro = numeros.map((valor) => {
  return valor * 2
})

// console.log(numerosEmDobro)

// Para cada elemento:
// Retorne uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave 'id' em todos os objetos

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Leticia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
]

// Nome da pessoa
let nomePessoas = pessoas.map(obj => obj.nome)
console.log(nomePessoas)

// Id das pessoas
// Já que com o método map nós alteramos o array/obj original, criamos um objeto novo
// para e espalhamos os itens do objeto original nele para que tenhamos uma cópia do 
// objeto original intacta.
let idPessoas = pessoas.map(function(obj, indice){
  const newObj = {...obj}
  
  newObj.id = indice
  return newObj
  // obj.id = indice
  // return obj
})
console.log(idPessoas)

// Removendo a chave 'nome'
let nomeRemovido = pessoas.map(obj => {
  const objSemNome = {...obj}
  delete objSemNome.nome
  return objSemNome
  // Conseguimos só retornar a idade também com:
  // return {idade: obj.idade}
})
// tranformando em arrow function
// let nomeRemovido = pessoas.map(obj => ({idade: obj.idade}))

console.log(nomeRemovido)