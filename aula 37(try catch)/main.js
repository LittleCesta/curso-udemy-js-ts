// Usamos o try catch (finally) para lidarmos com erros e tratarmos de formas corretas.
// O try server para tentar executar o códiog que pode ocasionar o erro
// O catch server para capturar o erro e tratar de uma forma correta
// O finally server para executar um código que sempre vai ser executado,
// independentemente se vai haver erro ou não. Além disso, o finally não é obrigatório.

// try {
//   console.log(naoExisto)
// } catch (error) {
//   console.log(error.name)
//   console.log(error.message)
// }
// finally{
//   console.log('Acabouu')
// }

function soma(x, y){
  if (typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('x e y precisam ser numeros!')
  }
  return x + y
}

try{
soma('a', 5)
} catch (error){
  console.log(error.name)
  console.log('ERRO: ' + error.message)
}
