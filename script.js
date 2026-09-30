const calculateInterest = (principal, rate, time) => {
  const p = Number(principal);
  const r = Number(rate);
  const t = Number(time);

  if (isNaN(p) || isNaN(r) || isNaN(t)) {
    return { simpleInterest: 0, amount: 0 };
  }

  const simpleInterest = (p * r * t) / 100;
  const amount = p + simpleInterest;
  return { simpleInterest, amount };
};

const calculate = () => {
  const p = parseFloat(document.getElementById("principal").value);
  const r = parseFloat(document.getElementById("rate").value);
  const t = parseFloat(document.getElementById("time").value);

  const { simpleInterest, amount } = calculateInterest(p, r, t);

  const result = document.getElementById("result");
  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculateInterest };
}