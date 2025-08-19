const relogio = document.querySelector('.relogio');
const iniciarButton = document.querySelector('#iniciar');
const pausarButton = document.querySelector('#pausar');
const zerarButton = document.querySelector('#zerar');
let hours = 0
let minutes = 0
let seconds = 0
let timer


function formatTempo(tempo) {
  return tempo < 10 ? '0' + tempo : tempo;
}

function updateClock(isRunning){
  seconds++
  if(seconds == 60){
    minutes++
    seconds = 0
  }
  if(minutes == 60){
    hours++
    minutes = 0
  }
  if(hours == 24){
    hours = 0
    minutes = 0
    seconds = 0
  }
  relogio.innerHTML = `${formatTempo(hours)}:${formatTempo(minutes)}:${formatTempo(seconds)}` 
}

document.addEventListener('click', (e) => {
  let el = e.target // Pegamos o target relacionado ao evento 'click' e com isso podemos fazer algumas condições
  if(el.classList.contains('iniciar')){
    clearInterval(timer); 
  relogio.classList.remove('pausado');
  timer = setInterval(updateClock, 1000); 
  }

  if(el.classList.contains('pausar')){
  clearInterval(timer); 
  relogio.classList.add('pausado'); 
  }

  if(el.classList.contains('zerar')){
  clearInterval(timer);
  hours = 0
  minutes = 0
  seconds = 0
  relogio.innerHTML = `${formatTempo(hours)}:${formatTempo(minutes)}:${formatTempo(seconds)}` 
  relogio.classList.remove('pausado'); 
  }
})

// iniciarButton.addEventListener('click', () => {
// })

// pausarButton.addEventListener('click', () => {
// })

// zerarButton.addEventListener('click', () => {
// })