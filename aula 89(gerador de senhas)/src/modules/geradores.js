// String.fromCharCode(numero) -> Função que pega um numero e retorna
// o char que ele representa na tabela ASCII.
// console.log(String.fromCharCode(33))

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

const geraMaiuscula = () => String.fromCharCode(rand(65, 91)) // A = 65 e Z = 91
const geraMinuscula = () => String.fromCharCode(rand(97, 123)) // a = 97 e z = 123
const geraNumero = () => String.fromCharCode(rand(48, 58)) // 0 = 48 e 9 = 58
const simbolos = ',.;~^[]{}!@#$%&*()_+-='
const geraSimbolo = () => simbolos[(rand(0, simbolos.length))]

export default function geraSenha(quantidade, maiusculas, minusculas, numeros, simbolos){
  let senhaArray = []

  quantidade = Number(quantidade)

  for(let i = 0; i < quantidade; i++){
    maiusculas && senhaArray.push(geraMaiuscula())
    minusculas && senhaArray.push(geraMinuscula())
    numeros && senhaArray.push(geraNumero())
    simbolos && senhaArray.push(geraSimbolo())
  }

  // No return estamos fazendo um slice para pegar apenas a quantidade que queremos
  // e usando o join para juntar o array em uma string
  return senhaArray.join('').slice(0, quantidade)
}