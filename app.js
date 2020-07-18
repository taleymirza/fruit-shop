let budget = 0;
let total = 0;
let balance = 0;
let qnApple = 0;
let prApple = 7;
let prMango = 2;

function onLoad() {
  console.log("---", document.getElementById("total"));
}
window.document.onload = onLoad();

function checkBalance() {
  budget = document.getElementById("budget").value;
  return budget <= 0;
}

function calculateBalance() {
  budget = document.getElementById("budget").value;
  balance = budget - total;
  document.getElementById("balance").innerHTML = balance;
}

function calculateTotalOfApple() {
  total = qnApple * prApple;
  document.getElementById("total").innerHTML = total;
}

function addApple() {
  qnApple++;
  document.getElementById("qnApple").innerHTML = qnApple;

  calculateTotalOfApple();
  calculateBalance();
}

function minusApple() {
  if (qnApple > 0) qnApple--;
  else alert("quantity can not be less than 0");
  document.getElementById("qnApple").innerHTML = qnApple;

  calculateTotalOfApple();
  calculateBalance();
}

// let budget = 0;
// let qnApple = 0;
// let prApple = 7;
// let qnMango = 0;
// let prMango = 10;
// let total = 0;

// function addMyBudget() {
//   budget = document.getElementById("budget").value;
//   if (budget === "") alert("please add value");
// }

// function addApple() {
//   qnApple++;
//   document.getElementById("qnApple").innerHTML = qnApple;
// }

// function minusApple() {
//   qnApple--;
//   document.getElementById("qnApple").innerHTML = qnApple;
// }

// function addMango() {
//   qnMango++;
// }

// function minusMango() {
//   qnMango--;
// }
