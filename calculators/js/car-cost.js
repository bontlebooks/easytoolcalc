function calculateCarCost() {
  const fuel = parseFloat(document.getElementById('fuel').value) || 0;
  const maintenance = parseFloat(document.getElementById('maintenance').value) || 0;
  const insurance = parseFloat(document.getElementById('insurance').value) || 0;

  const total = fuel + maintenance + insurance;
  document.getElementById('result').innerText = `Your total monthly car cost is: R${total.toFixed(2)}`;
}
