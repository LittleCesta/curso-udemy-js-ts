// Estrutura de dados Map() -> new Map() é diferente do método 
// array.map() que estamos acostumados.
// Com desestruturação de objetos e usando um for, as vezes a ordem em que os 
// elementos do array foram criadas pode ser alterada e em alguns casos isso
// é importante de manter. Outro problema mas que é mais simples de resolver
// é que o id é convertido em string, mas com um Number(id) conseguimos 
// converter para number.
const pessoas = [
  {id: 3, nome: 'Luiz'},
  {id: 2, nome: 'Maria'},
  {id: 1, nome: 'Eduardo'},
]

// const novasPessoas = {}
// for (const pessoa of pessoas){
//   const { id } = pessoa
//   novasPessoas[id] = { ...pessoa }
// }

// Conseguimos utilizar set e get no método Map() 
const novasPessoas = new Map()
for (const pessoa of pessoas){
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}

console.log(novasPessoas)
console.log(novasPessoas.get(2))

// Conseguimos utilizar o for of para percorrer o Map() e iterar sobre. 
// Tanbém conseguimos desestruturar os elementos do Map()
for (const [ identifier, { id, nome } ] of novasPessoas){
  console.log(identifier, id, nome)
}

console.log("Keys")
for (const chaves of novasPessoas.keys()){
  console.log(chaves)
}

console.log("Values")
for (const valores of novasPessoas.values()){
  console.log(valores)
}

console.log("Keys e Values")
for (const [ id, valor ] of novasPessoas.entries()){
  console.log(id, valor)
}