// Promises são uma forma de lidar com as situações em que uma operação assíncrona pode
// ter um resultado bom ou um erro. 
// Ao colocarmos a palavra chave async na criação da função, nós podemos usar o await 
// dentro dela e com isso podemos tornar um código assincrono em síncrono.
// Muito usado em APIs e Banco de Dados onde muitas vezes preciamos esperar
// um processo finalizar para que ele possa seguir para a próxima etapa.

function aleatorio(min, max){
  min *= 1000
  max *= 1000
  let tempo = Math.floor(Math.random() * (max - min) + min)
  return tempo
}
function esperaAi(message, tempo){
  return new Promise((resolve, reject) => {
    if (typeof message !== "string"){
      return reject("Tipo de dado não válido. Dado enviado: " + typeof message)
    }
    setTimeout(() => {
      return resolve(message.toLocaleUpperCase())
    }, tempo)
  })
}

/* esperaAi('Primeira frase', aleatorio(1, 5))
.then(frase1 => {
  console.log(frase1)
  return esperaAi('Segunda frase', aleatorio(1, 5))
})
.then(frase2 => {
  console.log(frase2)
  return esperaAi('Terceira frase', aleatorio(1, 5))
})
.then(frase3 => {
  console.log(frase3)
})
.catch(e => console.log(e))
.finally(() => console.log('Finalizou')) */

// As promises possuem 3 estados: pending, fulfilled e rejected. E mais um para indicar quando 
// ela foi finalizada independente se foi de forma boa ou ruim: settled.
/* pending: A promise foi criada e ainda não foi finalizada.
   fulfilled: A promise foi finalizada com sucesso(resolve).
   rejected: A promise foi finalizada com erro(rejected).
   settled: A promise foi finalizada com sucesso ou erro. */
async function executa(){
  try{
    const frase1 = await esperaAi('Primeira frase', aleatorio(1, 5))
    console.log(frase1)

    const frase2 = await esperaAi('Segunda frase', aleatorio(1, 5))
    console.log(frase2)

    const frase3 = await esperaAi(55, aleatorio(1, 5))
    console.log(frase3)
  }catch(e){
    console.log("Erro: " + e)
  }finally{
    console.log('Finalizou')
  }
}
executa()
