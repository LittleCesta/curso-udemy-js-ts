function fizzBuzz(a){
  let answer = ''
  if(typeof a !== 'number'){
    answer = 'Tipo inválido'
  }
  else if((a < 0) || (a > 100)){
    answer = 'Numero inválido'
    }
  else{
    if(a % 3 === 0 && a % 5 === 0){
      answer = 'FizzBuzz'
    }
    else if(a % 5 === 0){
      answer = 'Buzz'
    }
    else if (a % 3 === 0){
      answer = 'Fizz'
    }
    else{
      answer = a
    }
  }
  return answer
}

fizzBuzz('Oii')
for (let i = 0; i <=100; i++){
  console.log(`${i} - ${fizzBuzz(i)}`)
}