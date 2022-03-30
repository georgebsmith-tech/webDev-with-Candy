let get = (item) => document.querySelector(item);

let inputOneHolder = get(".input-1");
let inputOneButton = get(".enter-1");
let playerOne = get(".player-1");
let formContainerOne = get(".form-container-1");
let rollOne = get(".roll-1");
let scoreOne = get(".score-1");

inputOneButton.addEventListener("click", () => {
  playerOne.innerText = inputOneHolder.value;
  console.log(formContainerOne.classList);
  console.log(formContainerOne.classList.add("hide"));
  console.log(formContainerOne.classList);
});

rollOne.addEventListener("click", () => {
  let roll = 1 + Math.floor(Math.random() * 5);
  scoreOne.innerText = scoreOne.innerText * 1 + roll;
});
