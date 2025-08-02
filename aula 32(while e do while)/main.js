function aleatorio(min, max){
  const r = Math.random() * (max-min) + min
  return Math.floor(r)
}

let control = 0
let random = aleatorio(1, 50)
console.log(random)

// while (control < 10){ // Enquanto control for menor que 10, faça o que está no bloco
//   console.log(control)
//   control++
//   if (control === 5){
//     console.log('Parou no 5')
//     break
//   }
// }

// while (control !== 10){
//   control = aleatorio(1, 50)
//   console.log(control)
// }

do {
  control = aleatorio(1, 50)
  console.log(control)
}
while (control !== 10);