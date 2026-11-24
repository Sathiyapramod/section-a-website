// you need to Listen the button activity

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

addBtn.addEventListener("click", () => {
  // read the values from the input box
  // first
  // second
  let x = document.getElementById("first");
  let y = document.getElementById("second");

  x = x.value;
  y = y.value;

  let temp = parseInt(x) + parseInt(y);

  const final = document.getElementById("output");

  final.innerText = temp;
});

subBtn.addEventListener("click", () => {
  // read the values from the input box
  // first
  // second
  let x = document.getElementById("first");
  let y = document.getElementById("second");

  x = x.value;
  y = y.value;

  let temp = parseInt(x) - parseInt(y);

  const final = document.getElementById("output");

  final.innerText = temp;
});

multiplyBtn.addEventListener("click", () => {
  // read the values from the input box
  // first
  // second
  let x = document.getElementById("first");
  let y = document.getElementById("second");

  x = x.value;
  y = y.value;

  let temp = parseInt(x) * parseInt(y);

  const final = document.getElementById("output");

  final.innerText = temp;
});

divideBtn.addEventListener("click", () => {
  // read the values from the input box
  // first
  // second
  let x = document.getElementById("first");
  let y = document.getElementById("second");

  x = x.value;
  y = y.value;

  let temp = 0;

  if (y == 0) {
    temp = "Invalid Y value";
  } else {
    temp = parseInt(x) / parseInt(y);
  }

  const final = document.getElementById("output");

  final.innerText = temp;
});
