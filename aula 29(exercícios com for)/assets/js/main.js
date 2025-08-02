const container = document.getElementById('container');
const div = document.createElement('div')

const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'}
]
// Temos que usar o appendChild para adicionar os elementos ao container.
// O appendChild adiciona o elemento como filho do container depois do ultimo filho.

for (let i = 0; i < elementos.length; i++){
  const { tag, texto } = elementos[i] 
  let elemento = document.createElement(tag) // Criando o elemento de acordo com a tag
  elemento.innerHTML = texto; // Colocando o texto dentro do elemento criado
  // elemento.innerText = texto;// Colocando o texto dentro do elemento criado
  // let textoNode = document.createTextNode(texto); // Criando um nó de texto
  // elemento.appendChild(textoNode); // Adicionando o texto como filho do elemento
  div.appendChild(elemento); // Adicionando o elemento criado dentro do div

  // Colocamos o índice para que ele pegue a tag e o texto no
  // índice informado, se não colocarmos o índice, ele vai pegar o array todo.
}
container.appendChild(div); // Adicionando o div dentro do container

// function criarElementos(arr){
//   for (let i = 0; i < arr.length; i++){
//     const {tag, texto} = arr[i]
//     const elemento = document.createElement(tag)
//     elemento.innerText = texto
//     container.appendChild(elemento)
//   }
// }
// criarElementos(elementos)

