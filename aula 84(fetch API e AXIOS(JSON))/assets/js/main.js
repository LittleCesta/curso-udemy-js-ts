const container = document.querySelector('.container')

// Fetch responsável somente por pegar os dados do nosso JSON de pessoas
// fetch('pessoas.json')
// .then(response => response.json())
// .then(json => loadDataOnPage(json))

axios('pessoas.json')
.then(response => loadDataOnPage(response.data))

function loadDataOnPage(json){
  // Cria a tabela e adiciona a classe table a ela
  const table = document.createElement('table')
  table.classList.add('table')

  // Cria o cabeçalho da tabela, adiciona a classe thead a ela e insere ela antes da primeira
  // linha da tabela
  const thead = document.createElement('thead')
  thead.classList.add('thead')
  table.prepend(thead);

  // Pegando os títulos da tabela, utilizando o Object.keys no resultado do nosso json
  const tableHeaderTitle = Object.keys(json[0])

  // Cria os títulos da tabela, adiciona a classe th a eles e 
  // insere eles dentro da tabela. Só adicionei os titulos que estamos exibindo
  for(let title of tableHeaderTitle){
    if(title === 'nome' || title === 'idade' || title === 'salario'){
      const th = document.createElement('th')
      th.innerHTML = title
      thead.appendChild(th)
    }
  }

  // Cria as linhas da tabela
  for(let pessoa of json){
    const tr = document.createElement('tr')// Linhas da tabela

    let td = document.createElement('td') // Células da tabela
    td.innerHTML = pessoa.nome // Define o conteudo da celula como o nome
    tr.appendChild(td)// Insere o nome na celula

    td = document.createElement('td')// Célula da tabela
    td.innerHTML = pessoa.salario// Define o conteúdo da célula como o salario 
    tr.appendChild(td)// Insere o salario na celula

    td = document.createElement('td')// Célula da tabela
    td.innerHTML = pessoa.idade// Define o conteúdo da tabela como idade
    tr.appendChild(td)// Insere a idade na celula

    table.appendChild(tr)// Depois de criar e inserir os dados nas células, 
    // insere a linha na tabela
  }

  container.appendChild(table) // No final, insere a tabela no container
}