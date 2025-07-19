const resultado = document.getElementById('resultado')

// calculo IMC: (altura * altura) / peso

addEventListener('submit', evento => {
  evento.preventDefault()
  const pesoValue = document.getElementById('peso-input').value
  const alturaValue = document.getElementById('altura-input').value

  let isNumber = checkIfFieldIsNumber(alturaValue, pesoValue)
  let isFilled = checkIfFieldIsFilled(alturaValue, pesoValue)
  if (isNumber && isFilled){
    if(pesoValue && alturaValue){
      const imc = pesoValue / (alturaValue * alturaValue)
      let obLevel = ''
      if(imc<18.5){
        obLevel = 'Abaixo do peso'
      }
      else if(imc>=18.5 && imc<25){
        obLevel = 'Peso normal'
      }
      else if(imc>=25 && imc<30){
        obLevel = 'Sobrepeso'
      }
      else if(imc>=30 && imc<35){
        obLevel = 'Obesidade grau 1'
      }
      else if(imc>=35 && imc<40){
        obLevel = 'Obesidade grau 2'
      }
      else{
        obLevel = 'Obesidade grau 3'
      }

      resultado.innerHTML = `<p>Seu IMC: ${imc.toFixed(2)} - ${obLevel}</p>`
    }
  }

  function checkIfFieldIsFilled(altura, peso){
      if(altura && peso){
          return true
      }
      else if(!altura && peso){
      resultado.innerHTML = `<p id="error">Preencha o campo de altura!</p>`
          return false
      }
      else if(altura && !peso){
      resultado.innerHTML = `<p id="error">Preencha o campo de peso!</p>`
          return false
      }
      else if(!altura && !peso){
      resultado.innerHTML = `<p id="error">Preencha os campos de altura e peso!</p>`
          return false
      }
  }
  function checkIfFieldIsNumber(altura, peso){
      if(!(isNaN(altura)) && !(isNaN(peso))){
          console.log('É numero')
          return true
      }
      else if((isNaN(altura)) && !(isNaN(peso))){
      resultado.innerHTML = `<p id="error">Preencha o campo de altura com um numero!</p>`
          return false
      }
      else if(!(isNaN(altura)) && (isNaN(peso))){
      resultado.innerHTML = `<p id="error">Preencha o campo de peso com um numero!</p>`
          return false
      }
      else if((isNaN(altura)) && (isNaN(altura))){
      resultado.innerHTML = `<p id="error">Preencha os campos de altura e peso com um numero!!</p>`
          return false
      }
  }
})