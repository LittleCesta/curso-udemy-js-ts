// A função splice retorna um array com os elementos removidos
// e modifica o array original.
// splice(posicao, delete, elem1, elem2, elem(n)...)
// Conseguimos simular as funções pop, push, shift e unshift
// usando o splice:

// pop(remove elemento do final do array) = splice(-1, 1)
// shift(remove elemento do inicio do array) = splice(0, 1)
// push(adiciona elemento no final do array) = splice(array.length, 0, 'elemento')
// unshift(adiciona elemento no inicio do array) = splice(0, 0, 'elemento')



const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

const removidos = nomes.splice(4, 1); // remove 1 elemento a partir do indice 3
// const removidos = nomes.splice(-1, 1) 
// Remoção usando indice negativo para contar a partir do ultimo elemento;

// const removidos = nomes.splice(-2, Number.MAX_VALUE)
// Remove todos os elementos a partir do indice -2, o max value representa o maior 
// valor possivel de numero em js. 
// Nesse caso ele remove todos os elementos a partir do indice -2 

// Conseguimos também remover e adicionar elementos ao mesmo tempo
// Com issoconseguimos substituir, lembrando que os elementos adicionados
// não substituem os elementos removidos, eles são adicionados a 
// partir da posição informada.
nomes.splice(3, 0, 'Luiz'); // A partir do indice 3, remove 0 elementos e adiciona 'Luiz'

console.log(nomes, removidos);
