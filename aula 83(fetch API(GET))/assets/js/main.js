document.addEventListener("click", (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault(); // Previne que ao clicar no link, ele navegue para outra página
    loadPage(element);
  }
});

async function loadPage(elemento) {
  const href = elemento.getAttribute("href");
  try{
    const response = await fetch(href);

    if(response.status !== 200) throw new Error("Resposta diferente de 200"); 
    
    const html = await response.text()
    loadResult(html);
  }
  catch(e){
    loadError(e, href);
  }

  // fetch(href)
  // .then(response => {
  //   
  //   return response.text()
  // })
  // .then(html => loadResult(html))
  // .catch(e => loadError(e, href));

}

function loadResult(response) {
  const resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = response;
}
function loadError(error, page) {
  const container = document.querySelector(".container");
  if (container.querySelector(".error")) {
    return;
  }
  const errorDiv = document.createElement("div");
  const errorText = `Erro ao carregar ${page.slice(0, page.indexOf("."))}: ${error.message}`;
  errorDiv.classList.add("error");
  errorDiv.appendChild(document.createTextNode(errorText));
  container.appendChild(errorDiv);
}

// A resposta que recebemos do fetch precisam ser tratados antes de serem usados.
// Para usarmos essa resposta, vamos precisar de outro then, pois o retorno do 
// response.text() também é uma promise.
// fetch('pagina1.html') 
// .then(response => {
//   if(response.status !== 200) throw new Error("Erro ao carregar página")
//   return response.text()
// })
// .then(html => console.log(html)) // then para podermos usar o texto do response.text()
// .catch(e => console.error(e))