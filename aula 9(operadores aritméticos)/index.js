/*
Aritméticos(Já em ordem de precedência)
() Parenteses
** Potenciação
* Multiplicação
/ Divisão
% Resto da divisão
- Subtração
+ Adição / Concatenação
*/

const num1 = 10
const num2 = 5
const num3 = '5'

// O sinal de + pode ser usado para somar ou concatenar, dependendo do tipo de variável
// Que está sendo usado na operação
console.log(num1 + num2) // 15
console.log(num1 + num3) // 105

console.log(num1 ** num2) // 100000
console.log(num1 % num2) // 0

let contador = 1;
contador++;// Exibe o valor atual e depois incrementa
++contador;// Primeiro incrementa e depois atribui o valor
console.log(contador); // 3

let num4 = parseInt('5') //Converte a string para um numero inteiro. 
let num5 = parseFloat('5.2')// Podemos usar também o parseFloat para converter para ponto flutuante(Numero com casas decimais)
let num6 = Number('5.6')// Converte a string para numero, independente se é inteiro ou float


