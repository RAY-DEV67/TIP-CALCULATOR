const number = document.querySelector(".num")
const error =   document.querySelector(".error")
const amount = document.querySelector(".amount")
const bill = document.querySelector(".bill")
const total = document.querySelector(".Total")
const five = document.querySelector(".five")
const ten = document.querySelector(".ten")
const fiveteen = document.querySelector(".fiveteen")
const twenty5 = document.querySelector(".twenty5")
const fifty= document.querySelector(".fifty")
const reset =   document.querySelector(".reset")

function calctip(x, e) {
  document.querySelector(x).addEventListener("click", function () {
    if (number.value < 1) {
      error.style.display = "block";
    } else {
      error.style.display = "none";
      amount.textContent =
        `$` +
        (
          (Number(bill.value) * `${e}`) /
          Number(number.value)
        ).toFixed(2);
     total.textContent =
        `$` +
        (
          Number(bill.value) /
          Number(number.value)
        ).toFixed(2);
    }
  });
}

five
  .addEventListener("click", calctip(".five", 0.05));
ten.addEventListener("click", calctip(".ten", 0.1));
fiveteen
  .addEventListener("click", calctip(".fiveteen", 0.15));
twenty5
  .addEventListener("click", calctip(".twenty5", 0.25));
fifty
  .addEventListener("click", calctip(".fifty", 0.5));


 reset.addEventListener("click",function(){
  amount.textContent = "$0"
    total.textContent = "$0"
    bill.value = 0
  number.value = 0
  })