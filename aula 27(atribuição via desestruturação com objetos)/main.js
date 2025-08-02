const pessoa = {
    nome: 'Cesar',
    sobrenome: 'Romero',
    idade: 30,
    endereco: {
      rua: 'Rua 1',
      numero: 123,
      cidade: 'São Paulo'
    }
}

// Atribuição normal
// const nome = pessoa.nome
// console.log(nome)

// Atribuição via desestruturação
const { nome, sobrenome, idade: teste = ''} = pessoa;// Conseguimos definir um valor padrão,
const { endereco: {rua, numero}, endereco } = pessoa
const { nome: nomee, ...resto } = pessoa // Conseguimos utilizar o rest operator em
// objetos também
// caso a propriedade não exista no objeto
// Nesse caso não precisamos mostrar qual propriedade cada variável está recebendo 
// por que o nome da variável é o mesmo da propriedade do objeto, mas caso precisassemos
// basta colocar o nome da variavel + dois pontos + nome da propriedade
// Exemplo: const { nome: nomePessoa } = pessoa
console.log(nome, sobrenome, teste);
console.log(rua, numero, endereco);
console.log(nomee, resto)