class ValidaCPF{
  constructor(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false, // Nao pode ser alterado
      enumerable: true, // Exibe a propriedade e a torna iteravel
      configurable: false, // Nao pode ser deletado
      value: cpfEnviado.replace(/\D+/g, '')
    })
  }

  naoESequencia(){
    // Pega o primeiro caractere do cpf, repete ele de acordo com o tamanho do cpf e 
    // compara com o cpf enviado
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
  }

  geraNovoCpf(){
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos) 
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1) 

    this.novoCpf = cpfSemDigitos + digito1 + digito2
  }

  static geraDigito(cpfSemDigitos){ 
    // Transformamos em static por que não possui this em nenhum momento nela
    let total = 0
    let reverso = cpfSemDigitos.length + 1

    for (let stringNumerica of cpfSemDigitos){
      total += reverso * Number(stringNumerica)
      reverso--
    }

    const digito = 11 - (total % 11)
    
    return digito <= 9 ? String(digito) : '0' 
  }
  valida(){
    let isValid = false
    if(!this.cpfLimpo) // Verifica se tem cpf
    {
      return {
        isValid,
        message: 'Cpf nao informado'
      }
    }
    if(typeof this.cpfLimpo !== 'string') // Verifica se é uma string
    {
      return {
        isValid,
        message: 'Cpf precisa ser uma string'
      }
    }
    if(this.cpfLimpo.length !== 11) // Verifica se tem 11 caracteres
    {
      return {
        isValid,
        message: 'Cpf precisa ter 11 caracteres'
      }
    }
    if(this.naoESequencia()) // Verifica se e sequencia
    {
      return {
        isValid,
        message: 'Cpf não pode ser sequencia'
      }
    }
    this.geraNovoCpf();
    
    return {
      isValid: this.novoCpf === this.cpfLimpo,
      message: this.novoCpf === this.cpfLimpo ? 'CPF Valido' : 'CPF Inválido'
    }
  }
}

const validaCPF = new ValidaCPF('070.987.720-03')
console.log(validaCPF.valida())
const validaCPFSequencia = new ValidaCPF('111.111.111-11')
console.log(validaCPFSequencia.valida())
