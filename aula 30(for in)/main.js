const frutas = [
  'banana',
  'maca',
  'pera'
]
const pessoa = {
  nome: 'Cesar',
  sobrenome: 'Romero',
  idade: 30
}

for (let fruta in frutas){ // Iteração com array
  console.log(frutas[fruta])
} 

for (let chave in pessoa){ // Iteração com objeto
  console.log(`${chave}: ${pessoa[chave]}`)
}