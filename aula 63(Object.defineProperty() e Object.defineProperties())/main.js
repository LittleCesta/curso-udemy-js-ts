// definePorperty defineProperties

function Produto(nome, preco, estoque){
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Deixa a propriedade do objeto iteravel e visivel
    value: estoque, // Dá o informa o valor que a propriedade vai receber
    writable: false, // Dá a possibilidade de alterar o valor da propriedade
    configurable: false // Dá a possibilidade de configurar a propriedade(delete, writable, enumerable)
  })

  // Com o configurable  como true, podemos chamar esse método do objeto e
  // altera os parametros da propriedade
  // Object.defineProperty(this, 'estoque', {
  //   enumerable: true, // Deixa a propriedade do objeto iteravel e visivel
  //   value: estoque, // Dá o informa o valor que a propriedade vai receber
  //   writable: false, // Dá a possibilidade de alterar o valor da propriedade
  //   configurable: true // Dá a possibilidade de configurar a propriedade(delete, writable, enumerable)
  // })

  // Funcionalidade similar ao defineProperty, só que com mais de uma propriedade do
  // mesmo objeto
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // Deixa a propriedade do objeto iteravel e visivel
      value: nome, // Dá o informa o valor que a propriedade vai receber
      writable: false, // Dá a possibilidade de alterar o valor da propriedade
      configurable: true // Dá a possibilidade de configurar a propriedade(delete, writable, enumerable)
    },
    preco: {
      enumerable: true, // Deixa a propriedade do objeto iteravel e visivel
      value: preco, // Dá o informa o valor que a propriedade vai receber
      writable: false, // Dá a possibilidade de alterar o valor da propriedade
      configurable: true // Dá a possibilidade de configurar a propriedade(delete, writable, enumerable)
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 52222 // Não alterou por que está com writable: false
delete p1.estoque // Com o configurable: false, não conseguimos apagar a propriedade
console.log(p1);
console.log(Object.keys(p1)) // Com o enumerable: true, conseguimos iterar o objeto
// Consegumos o mesmo resultado com for.. in