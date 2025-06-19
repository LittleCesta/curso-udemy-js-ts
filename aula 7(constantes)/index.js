// Const é mais recente e usado quando é uma constante, 
// que não vai ter seu valor alterado ao longo do programa
// A constante deve ser criada e inicializada ao
// mesmo tempo. Ela não pode ter seu valor modificado
const nome = 'João da Silva'
const numero = 10

console.log(`${nome} nasceu em 1984`)
console.log(`Em 2000 ${nome} conheceu Maria`)
console.log(`${nome} casou-se com Maria em 2012`)
console.log(`Maria teve um filho com ${nome} em 2015`)
console.log(`O filho de ${nome} se chama Eduardo\n`)

for(let char in nome){
    console.log(nome[char])
}

// Retornando o tipo da variável
console.log(typeof numero)