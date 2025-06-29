let num1 = 9.5649;
let num2 = 9

console.log(Math.floor(num1))// 9
// Math.floor() arredonda o número para baixo.

console.log(Math.ceil(num1))// 10
// Math.ceil() arredonda o número para cima.

console.log(Math.round(num1))// 10
// Math.round() arredonda para o número inteiro mais próximo.

console.log(Math.max(1, 2, 3, 4, 5, 15, 163, 842))// 842
// Math.max() retorna o maior número entre os argumentos passados.

console.log(Math.min(1, 2, 3, 4, 5, 15, 163, 842))// 1
// Math.min() retorna o menor número entre os argumentos passados.

console.log(Math.random())
// Retorna um número aleatório entre 0 e 1. O 1 não é incluido.

const aleatório = Math.random() * (10 - 5) + 5 // Retorna um número aleatório entre 5 e 10
// A fórmula é: Math.random() * (max - min) + min
// Para arredondar basta fazer Math.round(Math.random() * (max - min) + min)

console.log(aleatório)
// Dessa forma ele vai gerar os números com a parte decimal, para arredondar basta usar o round(), floor() ou ceil().
console.log(Math.round(aleatório))
// Mostrando o número aleatório arredondado

console.log(num2 ** (1/2))// 3
console.log(num2 ** 0.5)// 3
// Forma de calcular a raiz quadrada sem a necessidade de usar o Math.sqrt()

console.log(10 / 0)// Infinity
// No js podemos dividir os numeros por 0, o resultado vai ser infinity. 
// Diferente de outras linguagens que retornam erro.