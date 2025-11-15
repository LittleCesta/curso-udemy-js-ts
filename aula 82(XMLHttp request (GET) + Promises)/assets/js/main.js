// AJAX - Assincronous Javascript and XML
// XMLHttp request (GET) + Promises
// O XMLHttp request não se limita a fazer requisições com arquivos xml, ele pode
// fazer requisições html, json, etc.
// Neste exemplo estaremos carregando uma página dinâmicamente sem fazer
// o full relaoad da página.
// GET - Vamos buscar o conteudo

// xhr -> XML Http Request
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // const method = 'GET'
    // const url = ''
    // const syncFalseAssinctrue = true
    xhr.open(obj.method, obj.url, true); // Inicializa uma nova requisição ou reinicializa
    // uma já existente.
    // Sintaxe: XMLHttpRequest.open(method, url, async, user, password)
    xhr.send(null); // Não precisamos mandar os dados por que estamos fazendo um GET

    xhr.addEventListener("load", () => {
      // Validando se ao terminar de carregar a requisição
      // vamos ter sucesso ou erro.
      if (xhr.status >= 200 && xhr.status < 300) {
        // Se o código retornado estiver entre 200 e
        // 300, foi sucesso.
        resolve(xhr.responseText);
      } else {
        // Ao contrário, vai mandar o cógo do erro que deu e a mensagem
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      }
    });
  });
};

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

  const objConfig = {
    method: "GET",
    url: href,
  };

  try{
  const response = await request(objConfig);
  loadResult(response);
  }catch(e){
    loadError(e, href);
  }

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
  const errorText = `Erro ao carregar ${page.slice(0, page.indexOf("."))}: ${error.status} ${error.statusText}`;
  errorDiv.classList.add("error");
  errorDiv.appendChild(document.createTextNode(errorText));
  container.appendChild(errorDiv);
}
