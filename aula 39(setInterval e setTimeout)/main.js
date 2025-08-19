function retornaHora(){
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  })
}

function funcaoDoInterval(){
  console.log(retornaHora())
}

let timer = setInterval( () => { // executa uma funcao a cada intervalo de tempo
  console.log(retornaHora())
}, 1000) 

setTimeout(() => {
  clearInterval(timer)
  console.log('Parou o intervalo')
}, 5000)

setTimeout(() => {
  console.log('Executou depois de 5s')
}, 10000)