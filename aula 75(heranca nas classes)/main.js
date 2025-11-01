class DispositivoEletronico{
  constructor(nome){
    this.nome = nome
    this.ligado = false
  }

  ligar(){
    if(this.ligado){
      console.log(`${this.nome} ja esta ligado.`)
      return
    }
    this.ligado = true
  }
  desligar(){
    if(!this.ligado){
      console.log(`${this.nome} ja esta desligado.`)
      return
    }
    this.ligado = false
  }
}

// extends extende a criação da classe para que ela herde as propriedades e 
// métodos da classe pai, no caso DispositivoEletronico 
class Smartphone extends DispositivoEletronico{
  constructor(nome, cor, modelo){
    super(nome)// Método que hera os parâmetros da classe pai, 
    // é necessário informaro a propriedade a ser herdada
    this.cor = cor
    this.modelo = modelo
  }
}
class Tablet extends DispositivoEletronico{
  constructor(nome, temWifi){
    super(nome)// Método que hera os parâmetros da classe pai, 
    // é necessário informaro a propriedade a ser herdada
    this.temWifi = temWifi
  }

  ligar(){
    console.log('Método ligar alterado!')
  }
}

const s1 = new Smartphone('Iphone', 'Preto', 'X')
s1.ligar()
console.log(s1)

const t1 = new Tablet('Ipad', true)
t1.ligar()
console.log(t1)
// const d1 = new DispositivoEletronico('Celular')
// d1.ligar()
// console.log(d1)