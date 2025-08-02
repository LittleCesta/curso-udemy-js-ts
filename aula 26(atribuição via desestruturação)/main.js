// let a = 'A'
// let b = 'B'
// let c = 'C'

// const letras = [b, c, a];
// [a, b, c] = letras // Atribuição via desestruturação de array

// console.log(a, b, c)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero)

const [primeiroNumero, segundoNumero, ...resto] = numeros;
// O operador '...' se chama "rest operator" e é usado para coletar o restante dos elementos
// do array em uma nova variável, que neste caso é 'resto'.
// Atribuição via desestruturação de array. Estamos além de estar atribuindo os
// dois primeiros valores do array as 2 variáveis, estamos pegando o resto do array
// e atribuindo a variável resto, que será um array com os valores restantes.

const [um, , tres, , cinco] = numeros
// Conseguimos atribuir valores específicos do array a variáveis específicas
// Por meio dessa atribuição, pegamod valores específicos no array e atribuímos a variáveis específicas.
// console.log(primeiroNumero, segundoNumero, resto);
// console.log(um, tres, cinco)

                     //     0          1          2
                     //  0  1  2    0  1  2    0  1  2 
const arrayDeArrays = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [primeiroArray, segundoArray, terceiroArray] = arrayDeArrays;
// Atribuição via desestruturação de array de arrays.
// Estamos atribuindo os arrays internos para facilitar o acesso ao seus valores.

console.log(`Acessando o numero 6: ${arrayDeArrays[1][2]}`)