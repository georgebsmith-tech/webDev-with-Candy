let p = document.querySelector("p");
let input = document.querySelector("input");
let btns = document.querySelectorAll("button");
let myInt;
function start() {
  let time = input.value * 1;
  myInt = setInterval(function () {
    p.innerText = time;
    time = time - 1;
    p.innerText = time;
    if (time === 0) {
      clearInterval(myInt);
    }
  }, 1000);
}

btns[1].addEventListener("click", start);
btns[2].addEventListener("click", function () {
  clearInterval(myInt);
  btns[2].innerText = "Play";
});
