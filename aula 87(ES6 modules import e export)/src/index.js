/* 
  Formas de importar modulos
  import soma from './modulo1
  import * as moduloInteiro from './modulo1'
  import { nome } from './modulo1'
  import { sobrenome as alias } from './modulo1'
  import { nome as alias2, sobrenome as alias3, idade } from './modulo1'
  import soma2, * as outroModulo from './modulo1'

  console.log(alias2, soma, moduloInteiro, nome, alias, alias3, idade)
  console.log(soma2, outroModulo)
  --------------------------------
  Formas de exportar modulos
  const nome = 'Cesar'
  const sobrenome = 'Romero'
  const idade = 30

  export { nome, sobrenome, idade }
  export { nome as outroNome, sobrenome as outroSobrenome }

  export function teste(){
    console.log('Teste')
  }

  export class Pessoa{
    constructor(nome, sobrenome){
      this.nome = nome
      this.sobrenome = sobrenome
    }
  }

  exportações default
  export default (a, b) => a + b

  export default function (){}
  export default funtion funcao(){}
  export { name1 as default }

*/
import { nome, sobrenome, idade, Pessoa } from './modulo1'
// Conseguimos importar tudo do modulo com '*' 
import * as importeiTudo from './modulo1'

// Importando o padrão que tem no modulo, no caso, as 
// exportações que tiverem default na frente.
// Podemos importar com qualquer nome e sem as chaves
// inclusive, pois por se tratar de uma exportação default
// o js vai reconhecer que estamos falando dela.
// Só podemos ter uma exportação default por modulo
import soma from './modulo1'


// Criando variavél com mesmo nome da importação
// para mostrar que podemos renomear as importações.
// const nome = 'Cesar'

console.log(nome, sobrenome, idade,)
console.log(soma(1, 2))

const pessoa = new Pessoa('Cesar', 'Romero')
console.log(pessoa)
console.log(pessoa.sayMyname())