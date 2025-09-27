function criaPessoa(nome, sobrenome){
  // Precisamos criar dessa forma por que vamos utilizar o prototype
  // Como o prototype eh um objeto, podemos utilizar o Object.create para definir
  // também as propriedades e métodos.

  const falar = {
    falar(assunto){
      console.log(`${this.nome} esta falando sobre ${assunto}`)
    }
  }
  const comer = {
    comer(){
      console.log(`${this.nome} esta comendo`)
    }
  }

  const beber = {
    beber(){
      console.log(`${this.nome} esta bebendo`)
    },
  }

  const pessoaPrototype = {
  ...falar,
  ...comer,
  ...beber,
  // Ou Object.assign({}, falar, comer, beber)  
  }
  
  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome}
  })
}

const p1 = criaPessoa('Cesar', 'Romero')
const p2 = criaPessoa('Maria', 'Santos')
console.log(p1)
console.log(p2)