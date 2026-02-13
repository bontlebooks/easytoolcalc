function calculateInflation() {
  const amount = parseFloat(document.getElementById('amount').value);
  const years = parseFloat(document.getElementById('years').value);
  const inflation = parseFloat(document.getElementById('inflation').value) / 100;

  if (!amount || !years || !inflation) return alert("Enter all values");

  const futureValue = amount / Math.pow(1 + inflation, years);
  document.getElementById('result').innerText = `Adjusted for inflation, your money will be worth: R${futureValue.toFixed(2)}`;
}
