const path = require('path')
const filePath = path.resolve(__dirname, 'teste.json')
const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

const pessoas = [
  {nome: 'João', idade: 30},
  {nome: 'Maria', idade: 60},
  {nome: 'Pedro', idade: 59},
  {nome: 'Alfred', idade: 17},
  {nome: 'Eduardo', idade: 33},
  {nome: 'Mateus', idade: 28},
]

const json = JSON.stringify(pessoas, '', 2)
escrever(filePath, json)

async function lerArquivo(caminho){
  const dados = await ler(caminho)
  renderizarDados(dados)
}

function renderizarDados(dados){
  dados = JSON.parse(dados)
  dados.forEach(val => {
     console.log(val)
  });
}

lerArquivo(filePath)