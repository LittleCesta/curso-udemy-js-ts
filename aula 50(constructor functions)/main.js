// Função fabrica -> Retorna objetos. Inicia com letra minúscula. Ex: criaPessoa
// Função construtora -> Constroi objetos.Inicia com letra maiúscula 
// e precisa da palavra chave 'new'.
// Começar com letra maiúscula não é regra, mas é uma convenção.
// Ex: new Pessoa

// Conseguimos criar variáveis que serão privadas, ou seja,
// não conseguimos acessar fora da função construtora. Serão utilizadas somente 
// dentero da função, basta remover o this. O mesmo vale para métodos.
function Pessoa(nome, sobrenome){
  const ID = 123456 // Variável privada
  const metodoInterno = function(){ // Método privado
    console.log('Sou um método interno')
  }
  
  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.showName = function(){
    console.log(`${this.nome} ${this.sobrenome}`)
  }
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Cesar', 'Romero')
p1.showName()
p2.showName()