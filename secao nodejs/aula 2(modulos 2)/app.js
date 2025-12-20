const cachorro = require('./Z/mod2')
const path = require('path')

const dog = new cachorro('Rex')

// dog.latir()

// ./ -> Busca dentro da pasta em que voce está
// ../ -> Retorna uma pasta atrás e busca a partir dela.
// Conseguimos voltar varias vezes para fazer a busca
// Ex: ../../../../pastaAlvo/arquivoAlvo

// Conseguimos visualizar o caminho absoluto(desde a raiz)
// do arquivo e da pasta atual
// console.log(__filename)
// console.log(__dirname)

// Conseguimos com o path do node, retornar o caminho absoluto. Ainda dentro dessa
// função, conseguimos navegar e remover pastas e arquivos do caminho.
// Usamos essa função para garantir que o caminho vai ser compativel com o sistema 
// que utilizamos.
console.log(path.resolve(__dirname, "..", ".."))