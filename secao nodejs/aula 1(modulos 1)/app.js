// Podemos importar o modulo uitilizando o caminho absoluto, ou seja, o caminho 
// completo da pasta desde a raiz, ou o relativo, que é o caminho a partir do arquivo
// em que estamos trabalhando.

// const mod1 = require('./mod1')
// console.log(mod1.falaNome())

// Conseguimos importar algo específico do modulo também utilizando o modulo.algoEspecífico
// const falaNome = mod1.falaNome
// console.log(falaNome())

// Conseguimos importar via desestruturação também por se tratar de um objeto
// const { nome, sobrenome, falaNome } = require('./mod1')
// console.log(nome, sobrenome)

// Estamos fazendo o destructuring, ou seja, selecionando a chave pessoa de dentro do objeto
// do modulo.
// const { Pessoa } = require('./mod1')
// const pessoa = new Pessoa('Cesar')
// console.log(pessoa.nome)
// Essa parte foi a importação de modulos que nos mesmos criamos e nesses casos 
// nós passamos o caminho do arquivo.

// Agora vamos importar um modulo nativo do Node, ou seja, um modulo que já vem
// instalado com o Node.js. Um exemplo é o modulo path, que nos ajuda a trabalhar
// com caminhos de arquivos e pastas.
const path = require('path')
console.log(path.resolve())

// importando um modulo externo, ou seja, um modulo que não vem com o Node.js
const axios = require('axios')
console.log(axios.HttpStatusCode)