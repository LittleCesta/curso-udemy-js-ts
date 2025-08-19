// try{
//   console.log('Abri um arquivo')
//   console.log('Transformei ele e gerou erro')
//   throw new Error('Erro personalizado')
//   console.log('Fechei o arquivo')
// }
// catch(e){
//   // É executado quando houver um erro
//   console.log('Tratando o erro')
//   console.log('ERROR:' +e.message)
// }
// finally{
//   console.log('Finalizando o programa')
// }

function retornaHora(data){
  if(data && !(data instanceof Date)){
    throw new Error('Esperando instância de Date!')
  }
  if(!data){
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  })
}
try{
console.log(retornaHora(new Date()))
console.log(retornaHora())
console.log(retornaHora('a'))
}
catch(e){
  console.error(e.message)
}finally{
  console.log('Tenha um bom dia')
}