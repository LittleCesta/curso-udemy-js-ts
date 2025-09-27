// Factory function
// function criaCalculadora(){
//   return{
//     display: document.querySelector('.display'),
//     // Criei os botões que vão ser usados na calculadora mas alguns não tem necessidade
//     // Como por exemplo o clearDisplay que já está utilizando a classe dele para saber qual botão é
//     btnClear: document.querySelector('.btn-clear'),
//     btnDel: document.querySelector('.btn-del'),
//     btnEq: document.querySelector('.btn-eq'),
    
//     inicia(){
//       this.cliqueBotoes()
//       this.pressionaEnter()
//     },

//     pressionaEnter(){
//       this.display.addEventListener('keyup', (e) => {
//         e.preventDefault();
//         if(e.keyCode === 13) { // 13 é o código da tecla Enter
//           this.calculate()
//         }
//       })
//     },
//     clearDisplay(){
//       this.display.value = '';
//     },


//     cliqueBotoes(){
//       // Nesse caso como estamos adicionando um eventListener no document e chamando 
//       // um this dentro dele, ele passa a considerar o this do document e não o da calculadora.
//       // Se fosse uma arrow function, o this sempre iria ser considerado o que criou o objeto.
//       document.addEventListener('click', function(e) {
//         const el = e.target

//         if(el.classList.contains('btn-num')) {
//           this.btnParaDisplay(el.innerText)
//         }

//         if(el.classList.contains('btn-clear')) {
//           this.clearDisplay()
//         }

//         if(el.classList.contains('btn-del')) {
//           this.deleteOneChar()
//         }

//         if(el.classList.contains('btn-eq')) {
//           this.calculate()
//         }

//         this.display.focus(); // Foca no display após cada ação
//       }.bind(this)) // bind(this) garante que o this dentro da função seja o da calculadora.
//     },

//     btnParaDisplay(valor){
//       this.display.value += valor;
//     },

//     deleteOneChar(){
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     calculate(){ // Vamos utilizar o eval para calcular a expressão. Precisamos ter cuidaro
//       let conta = this.display.value// Com esse método, pois ele executa qualquer código JavaScript que for passado como string.
//       try{
//         conta = eval(conta)
//         if(!conta){
//           alert('Conta inválida');
//           return;
//         }
//         this.display.value = String(conta);
//       }
//       catch(e) {
//         alert('Conta inválida');
//         return;
//       }
//     }

//   }
// }

//  Código refeito utilizando função construtora
function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.inicia = function(){
      this.cliqueBotoes()
      this.pressionaEnter()
    };

    this.pressionaEnter = function(){
      this.display.addEventListener('keyup', (e) => {
        e.preventDefault();
        if(e.keyCode === 13) { // 13 é o código da tecla Enter
          this.calculate()
        }
      })
    };

    this.clearDisplay = function(){
      this.display.value = '';
    };


    this.cliqueBotoes = function(){
      document.addEventListener('click', function(e) {
        const el = e.target

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if(el.classList.contains('btn-del')) {
          this.deleteOneChar()
        }

        if(el.classList.contains('btn-eq')) {
          this.calculate()
        }

        this.display.focus(); // Foca no display após cada ação
      }.bind(this)) // bind(this) garante que o this dentro da função seja o da calculadora.
    };

    this.btnParaDisplay = function(valor){
      this.display.value += valor;
    };

    this.deleteOneChar = function(){
      this.display.value = this.display.value.slice(0, -1);
    };

    this.calculate = function(){ // Vamos utilizar o eval para calcular a expressão. Precisamos ter cuidaro
      let conta = this.display.value// Com esse método, pois ele executa qualquer código JavaScript que for passado como string.
      try{
        conta = eval(conta)
        if(!conta){
          alert('Conta inválida');
          return;
        }
        this.display.value = String(conta);
      }
      catch(e) {
        alert('Conta inválida');
        return;
      }
    }

}


const calculadora = new Calculadora()
calculadora.inicia()

