// break -> Termina o laço onde ela é chamada
// continue -> Pula para a próxima iteração do laço onde ela é chamada

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let num in numeros){
  if(numeros[num]===2){
    console.log(`Chegou no ${numeros[num]}, pulando para a próxima iteração e não exibindo ele no console.log`)
    continue
  }
  if(numeros[num]===5){
    console.log(`Chegou no ${numeros[num]}, quebrando a repetição`)
    break
  }
  console.log(numeros[num])
}

// Saida:
// 1
// Chegou no 2, pulando para a próxima iteração e não exibindo ele no console.log
// 3
// 4
// Chegou no 5, quebrando a repetição