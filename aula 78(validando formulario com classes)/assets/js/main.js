class ValidateForm {
  constructor(){
    this.formulario = document.querySelector('.formulario')
    this.cpfField = document.querySelector('#input-cpf')
    this.events();

  }

  events(){
    this.formulario.addEventListener('submit', event => {
      this.handleSubmit(event)
    })

    this.cpfField.addEventListener('keyup', event => {
      this.formatCpf(event.target)
    })

  }

  handleSubmit(event){
    event.preventDefault()
    const validFields = this.areFieldsValid()
    const validPasswords = this.arePasswordsValid()

    if (validFields && validPasswords){
      alert('Formulário enviado.')
      this.formulario.submit()
    }
  }

  areFieldsValid(){
    let valid = true

    // Limpando erros antigos.
    for (let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove()
    }

    for(let field of this.formulario.querySelectorAll('.validar')){
      const label = field.previousElementSibling.innerText
      
      // 1° validação: Campos vazios
      if(!field.value){
        this.createError(field, `Campo "${label}" não pode estar vazio!`)
        valid = false
      }

      // 2° validação: CPF
      if(field.id.includes('cpf')){
        if(!this.validateCpf(field)) valid = false
      }

      // 3° validação: CPF

      if(field.id.includes('usuario')){
        if(!this.validateUser(field)) valid = false
      }
    }

    return valid

  }

  createError(field, message){
    const errorDiv = document.createElement('div')
    errorDiv.innerHTML = message
    errorDiv.classList.add('error-text')
    field.insertAdjacentElement('afterend', errorDiv)
  }

  validateCpf(field){
    const cpf = new ValidaCPF(field.value)
    const {isValid, message} = cpf.valida()

    if(!isValid){
      this.createError(field, message)
      // if(message.includes('Cpf não informado') && field.nextElementSibling.innerText === 'Cpf não informado'){
      //   field.nextElementSibling.remove()
      // }
      return false
    }
    return true
  }

  validateUser(field){
    const usuario = field.value
    let isValid = true

    if(usuario.length < 3 || usuario.length > 12){
      this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.')
      isValid = false
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
      this.createError(field, 'Usuário precisa conter apenas letras e/ou números.')
      isValid = false
    }

    return isValid
  }

  arePasswordsValid(){
    let isValid = true

    const password = this.formulario.querySelector('#input-senha')
    const repeatPassword = this.formulario.querySelector('#input-repetir-senha')

    if(password.value !== repeatPassword.value){
      this.createError(password, 'Senhas precisam ser iguais.')
      this.createError(repeatPassword, 'Senhas precisam ser iguais.')
      isValid = false
    }

    if(password.value.length < 6 || password.value.length > 12){
      this.createError(password, 'Senha precisa ter entre 6 e 12 caracteres.')
      isValid = false
    }

    if(repeatPassword.value.length < 6 || repeatPassword.value.length > 12){
      this.createError(repeatPassword, 'Senha precisa ter entre 6 e 12 caracteres.')
      isValid = false
    }


    return isValid
  }

  formatCpf(input) {
  // Remove todos os caracteres que não são dígitos
  var valor = input.value.replace(/\D/g, '');

  // Adiciona a máscara
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  // Atualiza o valor do input
  input.value = valor;
}
}

const validate = new ValidateForm()