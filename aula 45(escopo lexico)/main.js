const nome = 'Cesar'

function saudacao() {
  console.log(`Olá, ${nome}`)
}
saudacao()
// As funções têm escopo léxico, ou seja, elas "lembram" do local onde foram 
// definidas, mesmo quando são chamadas em outro contexto.
// A ordem de busca de variáveis da função é de dentro para fora, ou seja,
// ela começa buscando a variável dentro do escopo da função, e se não encontrar, 
// ela vai para o próximo escopo externo, e assim por diante, 
// até encontrar a variável ou chegar ao escopo global.