const nome = 'Cesar'

const nomes = ['Cesar', 'Cesar 2', 'Cesar 3']

// For classico - Geralmente com iteráveis(arrays e strings)
console.log('------For classico(com string)------')
for (let i = 0; i < nome.length; i++){
  console.log(nome[i])
}

// For in - Retorna índice ou chaves(string, array ou objetos)
// O for in funciona com arrays e strings. Ele retorna o valor da variável e o índice.
console.log('------For in(com string)------')
for (let letra in nome){
  console.log(nome[letra])
}

// O for of funciona com arrays e strings. Ele retorna somente o valor da variável,
// Não trabalha retornando o indice.
// For of - Retorna valores(string, array ou iteráveis. Não funciona com objetos)
console.log('------For of(com string)------')
for (let letra of nome){
  console.log(letra)
}

console.log('------For of(com array)------')
for (let nome of nomes){
  console.log(nome)
}

// Conseguimos com o forEach trabalhar com arrays e com isso podemos retornar através de
// uma função, o valor de cada elemento do array, o índice e o array completo.
console.log('------ForEach(função do array)------')
nomes.forEach(function(nome, idice, array){
  console.log(nome, idice, array)
})

const pessoa = {
  nome: 'Cesar',
  sobrenome: 'Romero',
  idade: 30
}

// for (let key of pessoa){ // Vai gerar o erro 'pessoa is not iterable'
//   console.log(key)
// }

for (let key in pessoa){
  console.log(key, pessoa[key])
}