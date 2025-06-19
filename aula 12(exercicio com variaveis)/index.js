let varA = 'A'
let varB = 'B'
let varC = 'C'
let varStorer = ''

varStorer = varC
varC = varA
varA = varB
varB = varStorer

console.log(varA, varB, varC)

// Eu consigo definir o valor de mais de uma variável na mesma linha
let [varD, varE, varF] = [varC, varA, varB]
console.log(varD, varE, varF)