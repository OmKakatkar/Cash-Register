const billAmount = document.querySelector("#bill-amount");
const custAmount = document.querySelector("#cust-amount");
const calc = document.querySelector("#calc");
const output = document.querySelector("#output");
const nextBtn = document.querySelector("#next-input");
const notesQty = document.querySelectorAll(".quantity");

const returnBackTable = document.querySelector(".return-back");
const outputContainer = document.querySelector(".output-container");
console.log(`${billAmount.value} - ${custAmount.value} here`);
const noteArray = [2000, 500, 100, 20, 10, 5, 1];

calc.addEventListener("click", () =>
  getNotes(billAmount.value, custAmount.value)
);

nextBtn.addEventListener("click", function () {
  if (billAmount.value !== "") {
    nextBtn.style.display = "none";
    returnBackTable.style.display = "block";
  } else {
    alert("Please enter the amount");
  }
});

function getNotes(actual, given) {
  clearData();
  if (actual !== "" && given !== "") {
    let retAmt = given - actual;

    if (retAmt === 0) {
      output.innerText = "Bill is settled";
      // alert("Bill is settled");
      return;
    } else if (retAmt < 0) {
      output.innerText = "Not enough money";
      // alert("Not enough money");
      return;
    }
    for (let i = 0; i < noteArray.length; i++) {
      retAmt = getNoteQty(retAmt, noteArray[i], i);
    }
  } else {
    output.innerText = "Please enter all details";
    // alert("Please enter all details");
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
  outputContainer.style.display = "block";
  output.innerText = "";
  for (let i = 0; i < noteArray.length; i++) {
    notesQty[i].innerText = "";
  }
}
