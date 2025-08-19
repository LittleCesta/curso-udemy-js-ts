// Funções criadas dessa forma tem a palavra arguments para que o js possa lidar caso uma
// função que mesmo que não precise de argumentos e seja chamada com argumentos consiga lidar com 
// esse problema.
// Arguments sustenta todos os argumentos passados para
// funções criadas com function.
function funcao(){
  for (let argumento of arguments){
    console.log(argumento)
  }
}
// funcao('oi', 'tudo bem?', 'como vai?')

// Conseguimos definir valores padrões para as funções
// Caso seja passado undefined nela, ele vai assumir o padrão
function funcao2(a, b, c, d=1, e='oi', f){
    console.log(a,b,c,d,e,f)
}
// funcao2(1, 2, 3)

// Atribuição via desestruturação
function funcao3({nome, sobrenome, idade}, [valor1, valor2, valor3]){
    console.log(nome, sobrenome, idade)
    console.log(valor1, valor2, valor3)
}
let obj = {nome: 'Cesar', sobrenome: 'Romero', idade: 20} 
let array = [1, 2, 3]
// funcao3(obj, array)

// Atribuição utilizando rest operator
// Aqui estamos pegado os 2 primeiros argumentos e definindo como operador e acumulador
// e qualquer outro valor depois disso como numeros em um array por causa do rest
function funcao4(operador, acumulador, ...numeros){
    for (let numero of numeros){
      if (operador === '+') acumulador += numero
      else if (operador === '-') acumulador -= numero
      else if (operador === '*') acumulador *= numero
      else if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}
funcao4('*', 1, 10, 20, 30, 40, 50)

const funcao5 = function(operador, acumulador, ...numeros){
    for (let numero of numeros){
      if (operador === '+') acumulador += numero
      else if (operador === '-') acumulador -= numero
      else if (operador === '*') acumulador *= numero
      else if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
};

funcao5('*', 1, 10, 20, 30, 40, 50)