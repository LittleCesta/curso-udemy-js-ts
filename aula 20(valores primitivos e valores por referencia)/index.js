/*
    Primitivos(imutáveis): string, number, boolean, undefined, null, (bigint e symbol)
    Valores copiados
    São imutáveis e não podemos modificar nada deles. Quando alteramos os valores primitivos
    estamos na verdade indicando para que a memória aponte para outro lugar, não estamos alterando 
    o valor em sim, mas sim pedindo a memória para apontar para outro lugar.

    Por referência(mutáveis): array, object e function
    Passados por referência
    No caso dos valores por referência, podemos alterar os valores dentro dele.
    Pois neles, nós instruimos a memória a ir no local onde o valor está e alterar 
    diretamente ele
*/
// indice   01234
let a = 'A'
let b = a // Estamos fazendo uma cópia do valor de a para b
console.log(a, b)
a = 'Outra coisa'
console.log(a, b)
// Nesse caso, o b continua sendo o mesmo valor, por que ele está apontando para o mesmo lugar
// que o a estava antes de ser alterado e o a aponta para um novo local na memória com ouro valor.

let aa = [1, 2, 3]
let bb = [...aa] 
let cc = bb
// Estamos fazendo uma cópia do valor de aa para bb, 
// nesse caso o valor de bb não vai ser alterado caso o aa seja. 
// O nome desse operador '...' é spread

console.log(aa, bb)

aa.push(4)
console.log(aa, bb)
// Nos casos onde não usamos spread '...', como estamos alterando o valor de aa, também estamos alterando o valor de bb
// Por se tratarem de valores por referencia, eles apontam para o mesmo lugar na memória
// e se alteramos um, o outro também é afetado.
// Spread: Estamos 'espalhando' os valores de aa para bb, isso torna o bb independente
// de aa, ele vai ter o mesmo valor que o aa tinha naquele momento que ele foi copiado e caso
// haja alguma alteração em aa, bb permanece sem ser alterado.

bb.pop()
console.log(aa, bb)
// A mesma coisa ocorre se alterarmos o valor de bb, como estamos no mesmo lugar
// na memória, o valor de aa também é alterado
console.log(bb)