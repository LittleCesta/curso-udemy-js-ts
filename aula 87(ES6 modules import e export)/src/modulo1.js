// const nome = "Cesar";
// const sobrenome = "Romero";
// const idade = 27;

// function soma(a, b) {
//   return a + b;
// }

// export { nome as nome2, sobrenome, idade, soma }
// Conseguimos exportar direto na criação da variavel

export const nome = "Cesar";
export const sobrenome = "Romero";
export const idade = 27;

export default function soma(a, b) {
  return a + b;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  sayMyname() {
    return this.nome + " " + this.sobrenome
  }
}