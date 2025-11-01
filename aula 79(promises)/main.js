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
      resolve(message)
    }, tempo)
  })
}

// Conseguimos encadear promises uma após a outra e trabalhar com elas de forma assíncrona
// com o then(). Além disso podemos retornar uma outra promise dentro da promise e 
// com isso encadear as promises pois a cada then() retorna uma nova promise e esse valor
// dessa promise retornada vai ser usado no proximo then()
esperaAi('Frase 1', aleatorio(0, 3)).then(frase => {
  console.log(frase)
  return esperaAi('Frase 2', aleatorio(0, 3))
}).then(frase => {
  console.log(frase)
  return esperaAi(123, aleatorio(0, 3))
}).then(frase => {
  console.log(frase)
}).then(() => {
  console.log('Vai dar erro aqui') // Não nem chegar aqui se tiver o reject por causa do tipo
  throw new Error("Erro loko pq eu quero")
})
.catch(e => console.log(e))

console.log("As promises são executadas em paralelo, ou seja, isso daqui vai ser exibido antes de tudo por que é sincrono")
