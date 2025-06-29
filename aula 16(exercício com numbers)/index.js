const numero = Number(prompt('Digite seu numero:'))

const numTitulo = document.getElementById('numero-titulo');
const conteudoTexto = document.getElementById('texto');

numTitulo.innerHTML = numero

conteudoTexto.innerHTML = `A raiz quadrada: <strong>${Math.sqrt(numero)}</strong><br>`
conteudoTexto.innerHTML += `<strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong><br>`
conteudoTexto.innerHTML += `<strong>${numero}</strong> é NaN: <strong>${Number.isNaN(numero)}</strong><br>`
conteudoTexto.innerHTML += `Arredondado pra baixo: <strong>${Math.floor(numero)}</strong><br>`
conteudoTexto.innerHTML += `Arredondado pra cima: <strong>${Math.ceil(numero)}</strong><br>`
conteudoTexto.innerHTML += `Com duas casas decimais: <strong>${numero.toFixed(2)}</strong><br>`