// Conseguimos combinar os 3 métodos para agilizar o trabalho
// filter, map e reduce
// Filtrar pares
// Dobrar os valores
// Reduzir(Somar os valores)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosFiltradosDobradosEReduzidos = 
numeros
.filter(valor => valor % 2 === 0) 

.map(valor => valor * 2) // Pegando os numeros pares e dobrando eles

.reduce((acumulador, valor) => {
  return acumulador + valor
} ,0) // Somando os numeros dobrados

console.log(numerosFiltradosDobradosEReduzidos)