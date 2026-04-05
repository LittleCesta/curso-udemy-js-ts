// Correção par o caso do navegador não suportar
// o regenerator run-time por ser antigo
// import "regenerator-runtime/runtime"; 

// Correção para o caso do navegador nao suportar 
// o async/await por ser antigo
// import "core-js/stable";

import './assets/css/style.css';
import executa from './modules/promises.js';

executa();
