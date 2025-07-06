// Forma mais básica de ciar uma função

function saudacao(nome){
    // console.log()
    return `Ooi, ${nome}!`
    // Com o return e esse ajuste, ela agora tem um valor para retornar e 
    // e pode ser armazenado em uma variável.
}
// Essa função não está retornando nada, 
// ela apenas exibe algo na tela. Precisa do return para termos um retorno.

const variavel = saudacao('Cesar')
console.log(variavel)// Vai retornar undefined

function soma(num1 = 1, num2 = 1){
    const resultado = num1 + num2
    return `Resultado: ` + resultado
}
// Return é o ponto final da função, se ele for executado, nada depois dele vai ser
// considerado
// Definindo o valor direto nos parâmetros da função, nos informamos pro js que caso
// Não seja fornecido um valor, o padrão vai ser o que foi definido no parâmetro.
console.log(soma(5, 9))
console.log(`Soma com os valores padrões - ${soma()}`)

const raiz = function(n){
    return `Raiz quadrada: `+ (n ** 0.5)
};
// Aqui estamos criando uma função anônima e armazenando em uma const.
// Como é uma função anônima, ela não precisa de um nome, mas precisa de um ';' no final 
// da declaração dela. Essa função retorna a raiz quadrada do 'n'.
console.log(raiz(9))

// Forma mais atual e prática de criar função, chamada de 'Arrow Function'
const raiz2 = n => `(Arrow Function)Raiz quadrada: `+ (n ** 0.5)
console.log(raiz2(16))