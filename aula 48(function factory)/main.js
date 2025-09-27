function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está falando sobre ${assunto}. Ele tem ${altura} metros e pesa ${peso} kg.`;
        },
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura * this.altura)
            return indice.toFixed(2)
        },
        // Getters são usados para acessar propriedades como se fossem atributos
        get imc2(){
            const indice = this.peso / (this.altura * this.altura)
            return indice.toFixed(2)
        },
        // 
        get fullName(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set fullName(valor) {
          valor = valor.split(' ');
          this.nome = valor.shift();
          this.sobrenome = valor.join(' ');
          console.log(valor)
        }
    };
}

const p1 = criaPessoa('João', 'Silva', 1.80, 80);
console.log(p1.fala('JavaScript')); // "João está falando sobre JavaScript."
console.log(p1.imc()); // Imc sendo passado como uma função
console.log(p1.imc2); // Imc sendo passado como uma propriedade
p1.fullName = 'Cesar Romero Costa';
console.log(p1.fullName); // Função sendo passada como propriedade para retornar o nome completo