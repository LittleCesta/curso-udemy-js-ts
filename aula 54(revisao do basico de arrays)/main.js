const nomes = ['Ana', 'Ju', 'Leo'];
nomes [2] = 'Jose'; // altera o valor do índice 2
// console.log(nomes);

delete nomes[1]; // deleta o valor do índice 1, mas o índice permanece
// console.log(nomes);

// String, objetos, funções, numeros etc...
// Conseguimos criar o array utilizando o construtor dele
const novoArray = new Array('Ana', 'Ju', 'Leo');
// console.log(novoArray);

// Utilizando o spread operator conseguimos criar um novo array a partir de outro
// e como os arrays são valores de referência, ou seja, se tentarmos copiar ele
// para uma nova variável, estaremos apenas copiando a referência de memória
// e qualquer alteração em um dos arrays irá refletir no outro.
// Por isso utilizamos o spread operator para criar uma cópia real do array e 
// conseguirmos alterar sem afetar o outro.
const novo = [...novoArray]; // spread operator
novoArray[2] = 'Maria';
// console.log(novo, novoArray);// [ 'Ana', 'Ju', 'Leo' ] [ 'Ana', 'Ju', 'Maria' ]

// Métodos do array
console.log(`${"-".repeat(10)} length ${"-".repeat(10)}`);
console.log(novo.length); // retorna o tamanho do array. Saida: 3

console.log(`${"-".repeat(10)} pop ${"-".repeat(10)}`);
const ultimoRemovido = novo.pop(); // remove o último elemento do array e retorna ele
console.log(ultimoRemovido);// Leo
console.log(novo);// [ 'Ana', 'Ju' ]

console.log(`${"-".repeat(10)} push ${"-".repeat(10)}`);
novo.push('Cesar'); // adiciona um novo elemento no final do array
console.log(novo);// [ 'Ana', 'Ju', 'Cesar' ]

console.log(`${"-".repeat(10)} shift ${"-".repeat(10)}`);
const primeiroRemovido = novo.shift(); // remove o primeiro elemento do array e retorna ele. saida: Ana
// Com o shift, ele ajusta o indice dos elementos dentro do array
console.log(primeiroRemovido);// Ana
console.log(novo);// [ 'Ju', 'Cesar' ]

console.log(`${"-".repeat(10)} unshift ${"-".repeat(10)}`);
novo.unshift('Mariana'); // adiciona um novo elemento no início do array
// Da mesma forma que o shift, o unshift ajusta os índices dos elementos.
// Pode não ser uma boa ideia adicionar em arrays muito grandes, pois o ajuste dos índices
// pode ser custoso em termos de performance.
console.log(novo);// [ 'Mariana', 'Ju', 'Cesar' ]

console.log(`${"-".repeat(10)} slice ${"-".repeat(10)}`);
const arrayCortado = novo.slice(1, 3); 
const arrayCortado2 = novo.slice(0, -1); 
// retorna uma parte do array, do índice 1 ao 3 (3 não incluso)
console.log(arrayCortado);// [ 'Ju', 'Cesar']
// Conseguimos utilizar índices negativos para contar a partir do final do array
console.log(arrayCortado2);// [ 'Mariana', 'Ju' ]

console.log(`${"-".repeat(10)} split ${"-".repeat(10)}`);
const nome = 'Cesar Romero Costa'
const nomeSeparado = nome.split(' '); // transforma a string em array, separando pelo delimitador
// passado como parâmetro, nesse caso, o espaço em branco.
console.log(nomeSeparado);// [ 'Cesar', 'Romero', 'Costa' ]

console.log(`${"-".repeat(10)} join ${"-".repeat(10)}`);
const nomeJunto = nomeSeparado.join(' '); // transforma o array em string, unindo os elementos com o delimitador.
// nesse caso, o espaço em branco.
console.log(nomeJunto);// Cesar Romero Costa