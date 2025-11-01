// Promises são uma forma de lidar com as situações em que uma operação assíncrona pode
// ter um resultado bom ou um erro. 

function aleatorio(min, max){
  min *= 1000
  max *= 1000
  let tempo = Math.floor(Math.random() * (max - min) + min)
  return tempo
}
function esperaAi(message, tempo){
  return new Promise((resolve, reject) => {
    if (typeof message !== "string"){
      return reject("ERRO: Não é string!!")
    }
    setTimeout(() => {
      return resolve(message.toLocaleUpperCase())
    }, tempo)
  })
}


// esperaAi('Frase 1', aleatorio(0, 3)).then(frase => {
//   console.log(frase)
//   return esperaAi('Frase 2', aleatorio(0, 3))
// }).then(frase => {
//   console.log(frase)
//   return esperaAi(123, aleatorio(0, 3))
// }).then(frase => {
//   console.log(frase)
// }).then(() => {
//   console.log('Vai dar erro aqui') // Não nem chegar aqui se tiver o reject por causa do tipo
//   throw new Error("Erro loko pq eu quero")
// })
// .catch(e => console.log(e))

// console.log("As promises são executadas em paralelo, ou seja, isso daqui vai ser exibido antes de tudo por que é sincrono")


// Promise.all() - vai retornar uma promise que vai ser 
// resolvida quando todas as promises forem resolvidas
const promisesAll = [
  "Primeiro valor",
  esperaAi("Promise 1", aleatorio(0, 3)),
  esperaAi("Promise 2", aleatorio(0, 3)),
  esperaAi("Promise 3", aleatorio(0, 3)),
  "Outro valor"
]

// O promise.all() aguardar todas as promises dentro dele darem resolve ou uma dar 
// reject para mostrar os valores. Ele mostra os valores na mesma ordem que 
// eles foram passados
// Promise.all(promisesAll).then(values => {
//   console.log(values)
// }).catch(e => {
//   console.log(e.message)
// })

// Promise.race() - vai retornar a primiera promise que for resolvida em um conjunto de 
// promises 
const promisesRace = [
  // "Primeiro valor" <- Como se trata de uma string ela vai ser exibida primeiro e vai 
  // dar resolve no Promise.race
  esperaAi("Promise 1", aleatorio(0, 3)),
  esperaAi("Promise 2", aleatorio(0, 3)),
  esperaAi("Promise 3", aleatorio(0, 3)),
]

// Promise.race(promisesRace).then(values => {
//   console.log(values)
// }).catch(e => {
//   console.log(e.message)
// })

// Promise.resolve() - vai retornar uma promise resolvida
// Promise.reject() - vai retornar uma promise rejeitada
function baixaPagina(){ // Verificando se uma pagina está em cache e se não, simula 
  // baixar ela
  const emCache = "1";

  switch(emCache){
    case "1": 
      return Promise.resolve("A pagina esta em cache")
    case "2":
      return esperaAi("Baixei a pagina", aleatorio(1, 3))
    case "3": 
      return Promise.reject("A pagina nao pode ser baixada")  
    default: 
      console.log("Demais valores só para ficar bonitin")
      return Promise.reject("A pagina nao pode ser baixada")
  }
}

baixaPagina().then(dadosPagina => {
  console.log(dadosPagina)
})
.catch(e => {
  console.log(e.message)
})