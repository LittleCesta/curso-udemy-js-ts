const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
const umDia = 60 * 60 * 24 * 1000; // 1 dia em ms
const data = new Date(0 + tresHoras); 
// Cria um objeto Date com base no número de milissegundos desde 1 de janeiro de 1970
// A função Date() é uma função construtora, por isso usamos o new e a primeira lera maiúscula.
// Sempre que eu iniciar o código, o javascript vai pegar a data atual do sistema.

console.log(`Data 1: ${data.toString()}`); // Mostra a data atual do sistema em formato de string.

const data2 = new Date(2019, 3, 20, 15, 14, 27); // Ano, mês (0-11), dia, hora, minuto, segundo
console.log(`Data 2: ${data2.toString()}`); // Mostra a data especificada em formato de string.

const data3 = new Date('2019-04-20T20:20:59'); 
console.log(`Data 3: ${data3.toString()}`);

console.log(`Dia: ${data3.getDate()}`) // Numero do dia do mês (1-31)
console.log(`Mes: ${data3.getMonth()}`) // Numero do mês(0 - 11) 
console.log(`Ano: ${data3.getFullYear()}`) // Numerodo ano
console.log(`Hora: ${data3.getHours()}`) // Hora do dia
console.log(`Minuto: ${data3.getMinutes()}`) // Minuto do dia
console.log(`Seg: ${data3.getSeconds()}`) // Segundo do dia
console.log(`ms: ${data3.getMilliseconds()}`) // Milissigundos do dia
console.log(`Dia da semana: ${data3.getDay()}`) // Dia da semana (0-6, onde 0 é domingo)

console.log(Date.now()); // Retorna o número de milissegundos desde 1 de janeiro de 1970 até agora

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formatDate(date){
    const dia = zeroAEsquerda(date.getDate())
    const mes = zeroAEsquerda(date.getMonth() + 1)
    const ano = zeroAEsquerda(date.getFullYear())
    const hora = zeroAEsquerda(date.getHours())
    const min = zeroAEsquerda(date.getMinutes())
    const sec = zeroAEsquerda(date.getSeconds())

    return ` ${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}
const data4 = new Date()
const dataBrasil = formatDate(data4);
console.log(`Data formatada: ${dataBrasil}`)