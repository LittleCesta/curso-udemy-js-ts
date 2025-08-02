const dataDisplay = document.getElementById('display-data');
let data = new Date();
let diaSemana = data.getDay();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();



function getDayName(day){
  switch(day){
    case 0:
        return 'Domingo';
    case 1:
        return 'Segunda-feira';
    case 2:
        return 'Terça-feira';
    case 3:
        return 'Quarta-feira';
    case 4:
        return 'Quinta-feira';
    case 5:
        return 'Sexta-feira';
    case 6:
        return 'Sábado';
    default:
        return 'Dia inválido';
  }
}

function getMonthName(month){
  switch(month){
    case 0:
        return 'Janeiro';
    case 1:
        return 'Fevereiro';
    case 2:
        return 'Março';
    case 3:
        return 'Abril';
    case 4:
        return 'Maio';
    case 5:
        return 'Junho';
    case 6:
        return 'Julho';
    case 7:
        return 'Agosto';
    case 8:
        return 'Setembro';
    case 9:
        return 'Outubro';
    case 10:
        return 'Novembro';
    case 11:
        return 'Dezembro';
    default:
        return 'Mês inválido';
  }
}

function fixDisplay(number){
  return number < 10 ? `0${number}` : number
}

function displayDate(){
  return `${getDayName(diaSemana)}, ${dia} de ${getMonthName(mes)} de ${ano} ${fixDisplay(hora)}:${fixDisplay(minutos)}`
}
// Consigo exibir de uma forma mais simple usando o dateStyle
let data2 = new Date();
const opcaoData = {
  dateStyle: 'full',
};

const opcaoHora = {
  hour: '2-digit',
  minute: '2-digit',
};

// Daria para pegar o nome do mes com um array também, com a função abaixo

function getMonthNameArray(month){
  const months = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ]

  return months[month] || 'Mês inválido'
}

dataDisplay.innerHTML = displayDate();

dataDisplay.innerHTML += `<br>${data2.toLocaleString('pt-BR', opcaoData)} ${data2.toLocaleString('pt-BR', opcaoHora)}`;
dataDisplay.innerHTML += `<br>${getMonthNameArray(mes)}`;