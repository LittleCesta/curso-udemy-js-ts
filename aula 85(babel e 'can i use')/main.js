// Can i use serve para verificarmos se algum recurso do js vai funcionar em determinados
// browsers.
// link -> https://caniuse.com/

// Babel é uma lib que serve para transformar o js mais novo para o mais antigo em casos onde precisamos
// usar o js mais antigo.
// Normalmente instalamos como uma devDependency, por que 
// outras pessoas podem não utilizar o babel.
// link -> https://babeljs.io/

// npx babel main.js -o bundle.js --presets=@babel/env
// Comando para converter o js atual para um mais antigo com o
// babel

const nome = "Luiz"
const obj = { nome }
const novoObj = { ...obj }
console.log(novoObj)