import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

const cpfGerado = document.querySelector('.cpf-gerado');
const novoCpfButton = document.querySelector('.novo-cpf');
// IIFE
function generateCPF() {
  const novoCpf = new GeraCPF();
  cpfGerado.innerHTML = novoCpf.geraNovoCpf();
}
generateCPF()

novoCpfButton.addEventListener('click', () => {
  generateCPF()
})