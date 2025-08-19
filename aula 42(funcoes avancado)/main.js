// Declaração de funções(function hoisting)
// As declarações padrão de funções sempre irão para o topo
// do código por causa do hoisting, por isso é possível chamarmos
// ela antes mesmo de ser declarada
falaOi()
function falaOi(){
  console.log('oi')
}

// First-class objects(Objeto de primeira classe)
// Podemos tratar as funções como dados, ou seja, podemos jogar elas em variaveis ou constantes.
// Function expression
const souUmDado = function(){
  console.log('Sou um dado')
}

// Com isso podemos jogar esa função como parâmetro de outra função
function executaFuncao(funcao){
  console.log('Executando com executa funcao')
  funcao()
}
executaFuncao(souUmDado)

// Arrow function(Ecma Script 6)
const funcaoArrow = () => {
  console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
  nome: 'Cesar',
  falar(){
    console.log(`${this.nome} está falando....`)
  }
}
obj.falar() 