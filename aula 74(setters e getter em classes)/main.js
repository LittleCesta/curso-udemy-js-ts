const _velocidade = Symbol('[velocidade]')
// Utilizando um symbol para armazenar a velocidae, nós impedimos ou dificultamos
// que a gente acesse essa variável fora da classe
class Carro {
  constructor(nome){
    this.nome = nome
    this[_velocidade] = 0
  }

  acelerar(){
    if(this[_velocidade] >= 100){
      return
    }
    this[_velocidade]++
  }

  freiar(){
    if(this[_velocidade] <= 0){
      return
    }
    this[_velocidade]--
  }

  get velocidade(){
    console.log('GETTER')
    return this[_velocidade]
  }

  set velocidade(valor){
    console.log('SETTER')
    if (typeof valor !== 'number') return
    if(this.velocidade >= 100) return
    this[_velocidade] = valor
  }

}

const c1 = new Carro('Fusca')

// for (let i = 0; i < 200; i++){
//   c1.acelerar()
// }
// c1.velocidade = 50
// console.log(c1.velocidade)

class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
  }

  get nomeCompleto(){
    return `${this.nome} ${this.sobrenome}`
  }

  set nomeCompleto(valor){
    valor = valor.split(' ')
    this.nome = valor.shift()
    this.sobrenome = valor.join(' ')
  }
}

const p1 = new Pessoa('Cesar', 'Romero')
p1.nomeCompleto = 'Cesar Romero Costa'
console.log(p1.nome, p1.sobrenome)
console.log(p1.nomeCompleto)