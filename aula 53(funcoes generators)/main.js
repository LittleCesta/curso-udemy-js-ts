// Funcoes Generators sao funcoes que podem ser pausadas e retomadas
// Elas sao declaradas com um asterisco apos a palavra function
// O 'yield' serve para pausar a funcao e retomar ela depois de um certo ponto


function* geradora1(){
  // Código pra gerar o retorno que você quer
  yield 'Valor 1';

  // Código pra gerar o retorno que você quer
  yield 'Valor 2';

  // Código pra gerar o retorno que você quer
  yield 'Valor 3';
}

const g1 = geradora1();
// console.log(g1.next()); // Retorna um objeto com o valor e com um boolean que indica se finalizou ou não
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next()); // Quando não há mais yields, o valor é undefined e o done é true

// for (let valor of g1){
//   console.log(valor);
// }

// Gerador infinito
function* geradora2(){
  let i = 0;

  while(true){
    yield i;
    i++;
  }
}

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3(){
  yield 0;
  yield 1;
  yield 2;
}

// Conseguimos incluir os yields de uma generator dentro de outra 
// generator usando o yield* e chamando a outra generator
function* geradora4(){
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

// const g4 = geradora4();
// for (let valor of g4){
//   console.log(valor);
// }

// Podemos inclusive gerar funções com yield e orquestrar a execução delas
// Podemos usar o return no generators, mas com isso ele vai finalizar a execução
// da generator, diferente do yield que apenas pausa a execução.
function* geradora5(){
  yield function(){
    console.log('Vim do yield 1');
  };
  yield function(){
    console.log('Vim do yield 2');
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();