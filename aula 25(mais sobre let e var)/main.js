// const verdade = true;

// let nome = 'Cesar'
// O escopo de variáveis declaradas com let é de bloco
// Variáveis declaradas com let vão priorizar o bloco onde elas foram declaradas antes de 
// procurar no escopo global ou de função. Ela pode dar erro de referência se for
// usada antes de ser declarada no bloco, mesmo ela sendo declarada no escopo global.

// var nome2 = 'Cesar'
// Var só tem escopo de função ou global.
// A var sempre vai considerar o ultimo valor atribuído a ela, 
// independente do bloco onde ela foi declarada.

// if(verdade){
//     let nome = 'Cesar 2'
//     console.log(nome, nome2)

//     if(verdade){
//         let nome = 'Cesar 3'
//         console.log(nome)
//     }
// }

// function falaOi(){
//     var nome = 'Cesar func'
//     console.log('oi')

//     if (verdade){
//         let nome2 = 'Cesar let'
//     }
//     console.log(nome2); 
//     // Isso vai dar erro, pois nome2 não foi declarado no escopo da função
// };
// console.log(nome); 
// // Isso vai dar erro, pois nome não foi declarado no escopo global
// // e ele está sendo protegido por ter sido declarado no escopo de função.

// falaOi();

