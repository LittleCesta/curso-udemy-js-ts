function qualquerCoisa(){
  console.log('qualquerCoisa');
}
qualquerCoisa();

// Immediately Invoked Function Expression (IIFE)

// (function(){
//   const nome = 'IIFE';
//   console.log(`Nome: ${nome}`);
// })()

(function(idade, altura){
  const nome = 'Cesar';
  function sobrenome(){
    return `${nome} Romero`
  }
  console.log(`Nome completo: ${sobrenome()}\nIdade: ${idade}\nAltura: ${altura}`);
})(30, 1.70)