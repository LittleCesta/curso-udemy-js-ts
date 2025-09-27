// CPF de exemplo: 705.484.450-52 070.987.720-03

/*
Primeiro, pegamos os 9 primeiros digitos do CPF e multiplicamos cada 
um deles por um número que começa em 10 e vai até 2.
Depois, somamos todos os resultados dessas multiplicações.
Em seguida, pegamos o resultado da soma e fazemos o seguinte cálculo: 
11 - (resultado da soma % 11).
Se o resultado desse cálculo for maior que 9, o primeiro dígito do CPF é 0. 
Caso contrário, o resultado do cálculo é o primeiro dígito do CPF.

7x 0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

7x 0x 5x 4x 8x 4x 4x 5x 0x 9x
11 10 9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20 0 10 = 284

11 - (237 % 11) = 5(decimo dígito)
11 - (284 % 11) = 2(decimo primeiro dígito)
*/
// Expressão regular para substituir tudo que não for número por vazio
// Não consguimos iterar pelo cpfLimpo como em um array. Precisamos usa o Array.from()
function validaCPF(cpfEnviado) {
  let cpfLimpo = cpfEnviado.replace(/\D+/g, '')
  let cpfArray = Array.from(cpfLimpo)
  let decimoDigito = cpfArray[9]
  let decimoPrimeiroDigito = cpfArray[10]

  if (cpfArray.length !== 11) {
    console.log('Tamanho do CPF inválido')
    return false;
  }

  // Pegando os 9 primeiros digitos do CPF com slice(0, 9)
  let accDecDigito = cpfArray.slice(0, 9).reduce((ac, val, i) => {
    ac += Number(val) * (10 - i)
    return ac
  }, 0)

  // Pegando os 10 primeiros digitos do CPF com slice(0, 10)
  let accDecPrimeiroDigito = cpfArray.slice(0, 10).reduce((ac, val, i) => {
    ac += Number(val) * (11 - i)
    return ac
  }, 0)

  let contaDecDigito = (11 - (accDecDigito % 11))
  let contaDecPrimeiroDigito = (11 - (accDecPrimeiroDigito % 11))

  if(contaDecDigito > 9){
    contaDecDigito = 0
  }

  if(contaDecDigito !== Number(decimoDigito) || contaDecPrimeiroDigito !== Number(decimoPrimeiroDigito)){
    console.log('CPF inválido')
    return false
  } 
  else {
    console.log('CPF válido')
    return true
  }

}
let cpf = '705.484.450-52'
let cpf2 = '070.987.720-03'
// validaCPF(cpf)
// validaCPF(cpf2)

// Reposta feita pelo professor
function ValidaCPF2(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function() {
      return cpfEnviado.replace(/\D+/g, '')
    }
  })

}

ValidaCPF2.prototype.valida = function(){
  if(typeof this.cpfLimpo === 'undefined') 
    return {
    isValid: false,
    message: 'CPF inválido: Não enviado'  
  } // Se não for enviado o CPF, vai retornar false 

  if(this.cpfLimpo.length !== 11) 
    return {
    isValid: false,
    message: 'CPF inválido: Tamanho inválido'
  } // Se o tamanho do CPF for diferente de 11, vai retornar false

  if(this.isSequencia())
    return {
      isValid: false,
      message: 'CPF inválido: Sequência'
    }// Se for uma sequência, vai retornar false

  const cpfParcial = this.cpfLimpo.slice(0, -2) // Pega o CPF menos os dois últimos digitos
  const digito1 = this.criaDigito(cpfParcial)
  const digito2 = this.criaDigito(cpfParcial + digito1)

  const novoCPF = cpfParcial + digito1 + digito2

  if(novoCPF !== this.cpfLimpo)
    return {
      isValid: false,
      message: 'CPF inválido: Digitos não conferem'
    }  
  else{
    return {
      isValid: true,
      message: 'CPF válido'
    }
  }  
}

ValidaCPF2.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial)
  let regressivo = cpfArray.length + 1
  const total = cpfArray.reduce((ac, val, i) => {
    ac += Number(val) * regressivo// Precisamos transformar o valor em nunmero, pois no momento ele é uma string
    regressivo--
    return ac
  }, 0)

  let digito = 11 - (total % 11)
  return digito > 9 ? '0' : String(digito) // Garantindo o retorno como string
}

ValidaCPF2.prototype.isSequencia = function(){
  return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
  // Vai repetir o primeiro caractere do CPF e depois verificar se é igaul ao
  // CPF enviado. Se for igual, é uma sequencia e retorna true.
}

const cpf3 = new ValidaCPF2('705.484.450-52')
const cpf4 = new ValidaCPF2('070.987.720-03')
const cpf5 = new ValidaCPF2('070.987.721-03')
const cpf6 = new ValidaCPF2('111.111.111-11')
console.log(cpf3.valida().isValid, cpf3.valida().message)
console.log(cpf4.valida().isValid, cpf4.valida().message)
console.log(cpf5.valida().isValid, cpf5.valida().message)
console.log(cpf6.valida().isValid, cpf6.valida().message)
