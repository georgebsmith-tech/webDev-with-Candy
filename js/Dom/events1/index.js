let divs = document.querySelectorAll("div");
let inputHolder = document.querySelectorAll("input");
let buttons = document.querySelector("button");

divs[0].addEventListener("click", () => {
  divs[0].style.backgroundColor = "red";
});
divs[1].addEventListener("click", (e) => {
  divs[1].style.backgroundColor = "blue";
  e.stopPropagation();
});

// divs[0].addEventListener("click", (candy) => {
//   console.log(candy);
//   candy.target.style.backgroundColor = "red";
// });
let values = [];

buttons.addEventListener("click", (get) => {
  get.preventDefault();
  let first = inputHolder[0].value;
  let second = inputHolder[1].value;
  values.push(first);

  values.push(second);
  console.log(values);
});
