// Função que retorna um valor
function soma(a, b){
  return a + b
}

// Função que não retorna um valor
function soma2(a, b){
  console.log(a + b)
}

// soma2(2, 3)

function criaPessoa(nome, sobrenome){
  return{
    nome: nome,
    sobrenome: sobrenome,
  }
}

const p1 = criaPessoa('Luiz', 'Otávio');

function falaFrase(comeco){
  function falaResto(resto){
    return comeco + ' ' + resto
  }
  return falaResto;
}

// function duplica(n){
//   return n * 2
// }

// function triplica(n){
//   return n * 3
// }

// function quadriplica(n){
//   return n * 4
// }

// Função que retorna uma função. É chamado de Closure.
// A função interna tem acesso ao escopo da função externa, mesmo após a execução da função externa.
function criaMultiplicador(multiplicador){
  return function(n){
    return n * multiplicador;
  }
}
// Aqui nesse caso estamos primeiramente definindo a função criaMultiplicador e passaando
// o multiplicador como parâmetro. Depois, chamamos a função criaMultiplicador 
// passando o número que queremos multiplicar. Com isso, pimeiramente a função criaMultiplicador 
// vai retornar uma função que vai receber esse multiplicador para poder fazer a conta e depois
// disso, quando chamamos a função retornada, passamos o número que queremos multiplicar por esse multiplicador.

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));