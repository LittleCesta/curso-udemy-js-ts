alert('Com a nossa mensagem!')
// Alert é um atalho para window.alert('mensagen')
// Window é o objeto que representa a janela do navegador.

confirm('Deseja realmente apagar?')
// Mostra um alert com 2 botões e dependendo do botão selecionado ele retorna true ou false

prompt('Digite o seu nome:')
// Mostra um alert com um campo de texto para o usuário preencher

const confirma = confirm('Deseja realmente apagar?')
// Armazenando o retorno do confirm

let num1 = Number(prompt('Digite um numero: '))
// O prompt pode ser salvo em variáveis também, mas salva tudo como string

let num2 = Number(prompt('Digite outro numero: '))

let soma = num1 + num2

