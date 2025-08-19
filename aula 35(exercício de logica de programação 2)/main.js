function ehPaisagem(largura, altura){
  return largura > altura
}
// A função vai checar e retornar se a largura da tela for maior que a altura
// Na nossa condição, ela já está retornando true ou false, então não tem necessidade de usar o if

console.log(ehPaisagem(1920, 1080))
console.log(ehPaisagem(1000, 1080))
console.log(ehPaisagem(1920, 1980))


const ehPaisagem2 = (largura, altura) => largura > altura
// Mesmo resultado com arrow function

console.log(ehPaisagem2(1920, 1080))
console.log(ehPaisagem2(1000, 1080))
console.log(ehPaisagem2(1920, 1980))