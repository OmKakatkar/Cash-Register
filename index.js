const billAmount = document.querySelector("#bill-amount");
const custAmount = document.querySelector("#cust-amount");
const calc = document.querySelector("#calc");
const notesQty = document.querySelectorAll(".quantity");
console.log(`${billAmount.value} - ${custAmount.value} here`);
const noteArray = [2000, 500, 100, 20, 10, 5, 1];

calc.addEventListener("click", () =>
  getNotes(billAmount.value, custAmount.value)
);

function getNotes(actual, given) {
  clearData();
  if (actual !== "" && given !== "") {
    let retAmt = given - actual;

    if (retAmt === 0) {
      alert("Bill is settled");
      return;
    } else if (retAmt < 0) {
      alert("Not enough money");
      return;
    }
    for (let i = 0; i < noteArray.length; i++) {
      retAmt = getNoteQty(retAmt, noteArray[i], i);
    }
  } else {
    alert("Please enter all details");
    return;
  }
}

function getNoteQty(balance, noteVal, index) {
  if (balance >= noteVal) {
    let notes = Math.floor(balance / noteVal);
    balance = balance - notes * noteVal;
    notesQty[index].innerText = notes;
  }
  return balance;
}

function clearData() {
  for (let i = 0; i < noteArray.length; i++) {
    notesQty[i].innerText = "";
  }
}
