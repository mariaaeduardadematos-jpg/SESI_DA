// Pega o elemento do visor pelo ID
const visor = document.getElementById('visor');

// Adiciona o número ou operador digitado no visor
function adicionar(valor) {
  visor.value += valor;
}

// Limpa tudo o que está escrito no visor
function limpar() {
  visor.value = '';
}

// Faz o cálculo da expressão que está no visor
function calcular() {
  try {
    visor.value = eval(visor.value);
  } catch (erro) {
    visor.value = 'Erro';
  }
}