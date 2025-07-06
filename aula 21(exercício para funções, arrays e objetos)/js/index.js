// IIFE = Immediately Invoked Function expression

function meuEscopo(){
    const meuFormulario = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []
    // meuFormulario.onsubmit = function(evento){
    //     evento.preventDefault();
    //     // Previne o que era para acontecer por padrão, ou seja, envio do formulário. 
    //     // O navegador está enviando rápido demais e recarregando a página e com esse 
    //     // comportamento perdemos as informações do nosso script.
    //     alert(1)
    //     console.log("Formulário enviado!")
    // };
    function criaPessoa(nome, sobrenome, peso, altura){
    return {
        nome, sobrenome, peso, altura
    }
}
    function recebeEventoForm(evento){
        evento.preventDefault()
        const nomeValue = meuFormulario.querySelector('.nome').value
        const sobrenomeValue = meuFormulario.querySelector('.sobrenome').value
        const pesoValue = meuFormulario.querySelector('.peso').value
        const alturaValue = meuFormulario.querySelector('.altura').value
        
        pessoas.push(criaPessoa(nomeValue, sobrenomeValue, pesoValue, alturaValue))
        console.log(pessoas)
        resultado.innerHTML += `<p>${nomeValue} ${sobrenomeValue} ${pesoValue} ${alturaValue}</p>`  
    }
    meuFormulario.addEventListener('submit', recebeEventoForm)
}
// Nesse código estamos passando um eventlistener no nosso fomrulário, quando o evento submit ocorrer, 
// vamos chamar a função recebeEventoForm, essa função vai receber os valores que inserimos no formulário, preencher
// o array pessoas com a função criaPessoa(que retorna um objeto com as infos que inserimos no formulário), exibir
// essas informações no console.log e também na div resultado.

meuEscopo()