// Filter
// Retorna um novo array, com a mesma quantidade de elementos ou menos.
// Sempre retorna uma array. Ela não altera a array original.
// O retorno do callback deve ser um boolean (true ou false).

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilter);

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//   console.log(`Valor: ${valor}\nIndice: ${indice}\nArray: ${array}\n`);
//   return valor > 10
// })

// console.log(numerosFiltrados);

// Reorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com 50 anos ou mais
// Retorne as pessoas cujo nome termina com a letra 'a'
const pessoas = [ 
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length > 5);
console.log(`${'-'.repeat(20)} Pessoas com nome grande ${'-'.repeat(20)}`);
pessoasComNomeGrande.forEach(obj => console.log(obj.nome))
// Como o filter sempre retorna um array, não conseguimos acessar o nome diretamente
// pelo console.log(pessoasComNomeGrande.nome), pois dá undefined já que o array não
// contém o nome, ele contém. Para resolver basta usar um forEach para acessar o nome
// de cada objeto do array.

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50)
console.log(`${'-'.repeat(20)} Pessoas com mais de 50 anos ${'-'.repeat(20)}`);
pessoasComMaisDe50.forEach(obj => console.log(obj.nome, obj.idade))

const pessoasComNomeTerminandoComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(`${'-'.repeat(20)} Pessoas com nome terminado com a ${'-'.repeat(20)}`);
pessoasComNomeTerminandoComA.forEach(obj => console.log(obj.nome))
// O toLowerCase() transforma todas as letras em minúsculas. 
// É só para garantir que a letra 'a' seja minúscula.
// O método endsWith() determina se uma string termina com os 
// caracteres de uma string especificada, retornando true ou false 
// conforme apropriado.


