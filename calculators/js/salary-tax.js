function calculateSalary() {
  const gross = parseFloat(document.getElementById('gross').value);
  if (!gross) return alert("Enter a valid salary");

  // UIF 1% deduction
  const uif = gross * 0.01;

  // Example simple tax brackets (2026, simplified)
  let tax = 0;
  if (gross <= 9875) tax = gross * 0.18;
  else if (gross <= 21000) tax = 1777.5 + (gross - 9875) * 0.26;
  else if (gross <= 34000) tax = 4153.5 + (gross - 21000) * 0.31;
  else tax = 7663.5 + (gross - 34000) * 0.36;

  const takeHome = gross - tax - uif;

  document.getElementById('result').innerText = `Your monthly take-home pay is: R${takeHome.toFixed(2)}`;
}
