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

        if(el.classList.contains('btn-num'))this.btnParaDisplay(el.innerText)
        if(el.classList.contains('btn-clear'))this.clearDisplay()
        if(el.classList.contains('btn-del'))this.deleteOneChar()
        if(el.classList.contains('btn-eq'))this.calculate()

        this.display.focus(); // Foca no display após cada ação
      }.bind(this)) // bind(this) garante que o this dentro da função seja o da calculadora.
    };

    this.btnParaDisplay = (e) => this.display.value += e;
    this.deleteOneChar = () => this.display.value = this.display.value.slice(0, -1)
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

