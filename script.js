function generateNumber() {
  const min = document.querySelector('.input-min').value;
  const max = document.querySelector('.input-max').value;

  const minValue = parseInt(min);
  const maxValue = parseInt(max);

  // Validação básica
  if (isNaN(minValue) || isNaN(maxValue)) {
    alert("Por favor, insira dois números válidos.");
    return;
  }

  if (minValue >= maxValue) {
    alert("O valor mínimo deve ser menor que o valor máximo.");
    return;
  }

  const result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  alert(`🎉 Número sorteado: ${result}`);
}
