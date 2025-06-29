// Assim como as strings, os arrays também são indexados.
// Cada elemento do array representa uma posição no índice, começando do 0.
//                0       1        2
const alunos = [ 'Luiz', 'Maria', 'João']

console.log(alunos[0])// Luiz
console.log(alunos[1])// Maria
console.log(alunos[2])// João

alunos[0] = 'Eduardo'// Altera o valor no indice informado
console.log(alunos[0])// Eduardo

// let tam = alunos.length
// alunos[tam] = 'Jose'
// console.table(alunos)
// Uma forma de adicionar um novo elemento no final do array.

alunos.push('Fred')
console.log(alunos)
// Forma mais comum e recomendada de adicionar um novo elemento no final do array.

alunos.unshift('Ana')
console.log(alunos)
// Adiciona um novo elemento no início do array.

const removido = alunos.pop()
console.log(`Removido: ${removido}`)
console.log(`Array: ${alunos}`)
// Remove o último elemento do array.
// Além de remover o elemento, o método pop() também retorna o elemento remobvido

const primRemovido = alunos.shift()
console.log(`Removido: ${primRemovido}`)
console.log(`Array: ${alunos}`)
// Remove o primeiro elemento do array.
// Além de remover o elemento, o método shift() também retorna o elemento remobvido

alunos.push('Jonatan')
delete alunos[4]
console.log(alunos)
// console.log(alunos)
// Remove o elemento do índice informado, mas não altera o tamanho do array.

let fatiado = alunos.slice(1, 3)
console.log(fatiado)
// Retorna uma cópia do array fatiado, de acordo com os índices informados.

console.log(typeof alunos)
// Arrays no javascript são considerados objetos

console.log(alunos instanceof Array)
// Verifica se a variável é uma instância de Array