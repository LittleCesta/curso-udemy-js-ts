// As strings são indexadas, ou seja, cada caractere possui um índice
// Começando do 0.

let umaString = 'Uma String Uma'

console.log(umaString)


// Podemos também passar caracters es epeciais dentro da declaração da string usando a \ para definir que é um caractere especial

let umaStringEspecial = 'Uma string \'especial\' \@ \- \& \#'

console.log(umaStringEspecial)

// Podemos ver o index onde o texto se encontra utilizando o indexOf
console.log(`Index de onde começa a palavra 'String': ${umaString.indexOf('String')}`)
console.log(`Index de onde começa a palavra 'String' a partir de uma posição: ${umaString.indexOf('String', 5)}`)
// Nesse caso, retorna -1 por que a palavra string começa a partir do ídice 4
// Podemos fazer algo parecido com lastIndexOf, que começa a verificação de trás pra frente


console.log(umaString.match(/[a-z]/g)) // Retornar todos os caracteres de a-z minusculo. 
// Podemos adicionar i para deixar case insensitive e considerar as maiusculas '/gi'
// O match retorna um array com todos os caracteres que correspondem a expressão regular

console.log(umaString.search(/s/i));
// Podemos buscar de outra fora o index utilizando o search, que aceita também expressões regulares, diferente do indexOf

console.log(umaString.replace(/Uma/g, 'Outra'))
// Podemos substituir as partes da string utilizando o replace, que também aceita expressões regulares.

console.log(umaString.slice(4, 10))// Do caractere 4 até 10
// Podemos pegar parte de uma string utilizando o slice, onde informamos o indice onde vai iniciar e o indice onde vai parar
console.log(umaString.slice(-3))// Ultimos 3 caracteres
// Quando colocamos valor negativo, ele começa a contar de trás para frente.

console.log(umaString.substring(umaString.length - 3, umaString.length - 1))
// O substring funciona de forma semelhante ao slice, mas não aceita valores negativos, então precisamos informar o inicio e o fim da substring

console.log(umaString.split(' '))
// Usamos o split para dividir a string em partes, onde passamos o separador que queremos usar de parametro para substituição.
// O split retorna um array com as partes divididas.
console.log(umaString.split(' ', 2))
// Podemos também inserir o limite de vezes que vamos dividir.

console.log(umaString.toUpperCase()) // Transforma tudo em maiusculo
console.log(umaString.toLowerCase()) // Transforma tudo em minusculo