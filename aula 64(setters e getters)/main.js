// Getters e Setters - Propriedades de leitura e escrita

function Produto(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    // Eliminamos o value e o writable por que vamos utilizar setters e getters
    enumerable: true, // Deixa a propriedade do objeto iteravel e visivel
    configurable: true, // Dá a possibilidade de configurar a propriedade(delete, writable, enumerable)
    get: function(){
      return estoque;
    },
    set: function(valor){
      if(typeof valor !== 'number') 
      {
        console.log('Apenas numeros! Valor nao alterado')
        return
        // Podemos também lançar um typeerror com:
        // throw new TypeError('Apenas numeros! Valor nao alterado')
      }
      else
      {
      estoque = valor
      }
    }
  })
}

const p1 = new Produto('Shorts', 40, 5);
console.log(p1)// Dessa forma exibimos alem das key, no caso do getter ele 
// retorna [Getter] ao invés do valor. Para mostrar o valor precisamos chamar o getter

console.log(p1.estoque)

// Com a validação do setter, conseguimos proteger caso tentem passar algum valor
// de tipo diferente do aceito. Nesse caso abaixo, ele não vai alterar e vai manter
// o mesmo valore definido na criação do objeto
p1.estoque = 'Testeee'
console.log(p1.estoque)

// Nesse caso ele vai alterar por que o valor é do tipo number
p1.estoque = 3
console.log(p1.estoque)

// Com function factory dá para definir os setters e getters no mesmo objeto

function criaProduto(nome){
  return{
    // Conseguimos com os setters e getters realizar qualquer tratamento necessário
    // nos valores que eles recebem e retornam
    get nome(){ // Exemplo no getter
      return `${nome} nova`
    },
    set nome(valor){ // Exemplo no setter
      nome = valor.replace('Teste', 'Prova')
    }
  }
}

const p2 = criaProduto('Camisa')
console.log(p2)
p2.nome = 'Teste'
console.log(p2.nome)