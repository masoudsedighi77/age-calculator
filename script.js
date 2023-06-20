let inputDay = document.querySelector("#day");
let inputMonth = document.querySelector("#month");
let inputYear = document.querySelector("#year");
const logoBtn = document.querySelector(".logo");
const resultYear = document.querySelector("#result-year");
const resultMonth = document.querySelector("#result-month");
const resultDay = document.querySelector("#result-day");
const message = document.querySelector(".message");
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const date = new Date();
//functions

const clickHandler = (e) => {
  e.preventDefault();
  const thisYear = date.getFullYear();

  if (
    inputMonth.value === "" ||
    inputDay.value === "" ||
    inputYear.value === ""
  ) {
    //meassage for empty fields
    emptyErrorMessage();
  } else if (inputMonth.value > 12 || inputDay.value > 31) {
    //message for invalid fields
    invalidDateValue();
  } else {
    resultYear.innerHTML = thisYear - inputYear.value;
    resultMonth.innerHTML = 12 - inputMonth.value;
    resultDay.innerHTML = 30 - inputDay.value;
  }
};

const emptyErrorMessage = () => {
  let spanElem = document.createElement("span");
  spanElem.classList = "emptyMessage";
  spanElem.innerHTML = "You need to fill in the blanks!";
  spanElem.style.color = "red";
  message.append(spanElem);
};

const invalidDateValue = () => {
  console.log("ds");

  resultDay.innerHTML = "";

  let spanElem = document.createElement("span");
  spanElem.classList = "invalidMessage";
  spanElem.innerHTML = "You need to put valid date numbers!";
  spanElem.style.color = "red";
  message.append(spanElem);
};
//events
logoBtn.addEventListener("click", clickHandler);
