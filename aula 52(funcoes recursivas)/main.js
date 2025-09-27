// Funções recursivas são funções que se chamam a si mesmas
// Elas são muito usadas em algoritmos de busca e ordenação, como o quicksort
// Funções recursivas tem um certo limite no motor do JavaScript, se houvere
// muitas chamadas recursivas, o motor pode travar e interromper a execução.

(function recursiva(cont = 0,max){
  if (cont >= max ) return
  cont++
  console.log(cont)
  recursiva(cont,max)

})(0,3)

