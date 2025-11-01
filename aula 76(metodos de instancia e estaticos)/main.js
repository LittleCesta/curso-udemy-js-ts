function teste(stringUsada){
  console.log(stringUsada)
  console.log(this) // Objeto global no node
}

class controleRemoto {
  constructor(tv){
    this.tv = tv
    this.volume = 0;
    teste('Teste dentro do constructor') // Conseguimos chamar funções dentro do constructor também
  }
 // Metodo de Instancia - Métodos que interagem somente com a instancia criada 
 // do objeto
  aumentarVolume(){
    this.volume += 2
  }
  // Metodo de Instancia - Métodos que interagem somente com a instancia criada 
  // do objeto
  diminuirVolume(){
    this.volume -= 2
  }

  // Método estático - Método que vai interagir com todas as instancias criadas 
  // do objeto.
  // Nesse método eu quero que ele troque a pilha de todas as instancias criadas 
  // do controle.
  // 
  static trocarPilha(){
    console.log('Trocando a pilha')
  }

  // Qualquer método de classe pode receber parâmetros adicionais. Vou colocar outro
  // Static para mostrat.
  static somar(a, b){
    console.log(this) // This referente a classe e não ao objeto.
    return a + b
  }

}

const controle1 = new controleRemoto('LG')

controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()

console.log(controle1)

// Para acessar o método estático, nós chamamos a classe ao invés do objeto criado.
// controle1.trocarPilha() <- Errado!
controleRemoto.trocarPilha()// <- Correto
// Como chamamos essas funções de forma diferente, não temos acesso aos parâmetros
// que eles recebem na instancia. Por exemplo, não conseguimos acessar o volume da tv por que o
// método constructor não chegou a ser chamado nesse caso. Ele retorna undefined
// nesses casos.
console.log(controleRemoto.somar(10, 20))

// const controle2 = new controleRemoto('Samsung')
// controle2.aumentarVolume()