// Herança é a capacidade de uma classe de herdar propriedades e métodos de outra classe.
// Produto -> Aumento, Desconto
// Camiseta = Cor, Caneca = Material
function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
  this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco) // Call chama a função Produto com o contexto do this de Camiseta
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); // Cria o protótipo de Camiseta baseado no protótipo de Produto
Camiseta.prototype.constructor = Camiseta; // Corrige o construtor de Camiseta

Camiseta.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque){
  Produto.call(this, nome, preco)
  this.material = material;
  this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function(){
      return estoque;
    },
    set: function(valor){
      if (typeof valor !== 'number') return;
      estoque = valor
    }
  })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 555);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Canecaa', 13, 'Porcelana', 5);
camiseta.aumento(100);
console.log(produto);
console.log(camiseta);
console.log(caneca);