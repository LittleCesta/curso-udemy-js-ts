const array = [1, 2, 3]
// Arrays - Uma estrutura de dados ordenada, onde conseguimos
// acessar as propriedades e métodos pelo index

// Objetos - Uma estrutura de dados não ordenada, onde criamos ela com o padrão 
// 'chave: valor', e conseguimos acessar elas pela chave.
// const pessoa1 = {
//     nome: 'Cesar',
//     sobrenome: 'Romero',
//     idade: 26
// }
// console.log(pessoa1.nome + ' ' + pessoa1.sobrenome)

function criaPessoa(nome, sobrenome, idade){
    return {
        nome,sobrenome,idade
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
        // As duas formas estão corretas.
    }
}
// Criando uma função para criar pessoas. Funções com esse proposito são chamadas
// de 'Factory Functions'.
// Quando as keys do objeto tem o mesmo nome que os parâmetros na função, podemos
// simplesmente colocar só o nome da key do objeto que o javascript já entende
// o que ele vai representar para a função.
const pessoa1 = criaPessoa('Cesar', 'Romero', 26)// Esses valores são argumentos
// console.table(pessoa1)
// O valores que passamos ao chamar uma função são conhecidos como argumentos,
// e os valores que ela pede ao criarmos ela são chamados de parâmetros.
// Argumento é o valor que é passado para o parâmetro.

// const pessoa2 = criaPessoa('Jose', 'Silva', 50)
// const pessoa3 = criaPessoa('Maria', 'Da Penha', 55)
// const pessoa4 = criaPessoa('Leandro', 'Bonifacio', 69)
// const pessoa5 = criaPessoa('Alfredo', 'Silva', 30)


const pessoaQueFala = {
    nome: 'Cesar',
    sobrenome: 'Romero',
    idade: 25,

    fala(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)
    },
    envelhecer(){
        this.idade++
        console.log(`Agora eu tenho ${this.idade} anos`)
    }
}

// Criamos um objeto que possui um método de falar, e usamos o 'this' para indicar
// que ele vai usar o contexto desse objeto para falar.
pessoaQueFala.fala()
pessoaQueFala.envelhecer()