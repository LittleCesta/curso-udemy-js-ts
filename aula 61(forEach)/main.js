// Só está disponível em arrays
// Só itera sobre os elementos do array

const numeros = [10, 20, 30];
let total = 0
numeros.forEach((valor, indice, array) => {
  console.log(valor, indice, array)
  total += valor
});

console.log(total)