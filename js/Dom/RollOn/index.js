let get = (item) => document.querySelector(item);
let done = (item) => document.querySelectorAll(item);
const log =console.log


let inputOneHolder = get(".input-1");
let inputOneButton = get(".enter-1");
let playerOne = get(".player-1");
let formContainerOne = get(".form-container-1");
let rollOne = get(".roll-1");
let enterBox = get(".enter-1");
let enterBox_2 = get(".enter-2")
let scoreOne = get(".score-1");
let all = done(".player-score");
let next = done(".player");
let close = get(".close");
let contain = done(".form-container");
let writeName = done(".input");


let inputTwoHolder = get(".input-2");
let inputTwoButton = get(".enter-2");
let playerTwo = get(".player-2");
let formContainerTwo = get(".form-container-2");
let rollTwo = get(".roll-2");
let scoreTwo = get(".score-2");
let game = get(".game");
let winner = get(".winner");
let characTwo_Name = get(".character-2")
let charac_Name = get(".character")

let flag = true



function final() {
  console.log("here")

  console.log(scoreOne)
  console.log(scoreOne.innerText)


  if (scoreOne.innerText * 1 >= 100) {
    // all.innerText === 0;
    game.innerText = "GAME OVER!!!";
    // game.classList.add("game");
    winner.textContent = "PLAYER ONE WINS";
    get(".modal").classList.remove("hide")

  }

  else {
    game.innerText = "";
    winner.innerText = "";
  }
}

function final_two() {

//  log(scoreTwo.innerText*1)

  if (scoreTwo.innerText * 1 >= 100) {
    log("inner")
    game.innerText = "GAME OVER!!!";
    winner.innerText = "PLAYER TWO WINS";
    get(".modal").classList.remove("hide")
  }
  else {
    game.innerText = "";
    winner.innerText = "";
  }

}




function character() {
  if (inputOneHolder.value === "") {
    charac_Name.innerText = "input a name!";

    // console.log(formContainerTwo.classList.remove("hide"));
  }
  else {
    charac_Name.innerText = "";
    console.log(formContainerOne.classList.add("hide"));
  }
}


function character_two() {
  if (inputTwoHolder.value === "") {
    characTwo_Name.innerText = "input a name!";
    
  }
  else {
    characTwo_Name.innerText = "";
    console.log(formContainerTwo.classList.add("hide"));
  }
}


enterBox.addEventListener("click", character);

enterBox_2.addEventListener("click", character_two);


inputTwoButton.addEventListener("click", () => {
  playerTwo.innerText = inputTwoHolder.value;
  // console.log(formContainerTwo.classList.add("hide"));
});


rollTwo.addEventListener("click", () => {

if (flag === false) {


  if (playerTwo.innnerText !== ""){
  let roll = 1 + Math.floor(Math.random() * 5);
  scoreTwo.innerText = scoreTwo.innerText * 1 + roll;
final_two()
flag = true
  }
   else {
      alert("Player Two name must be entered!!")}

}
else {
    alert("Allow Player ONE na")
  }


});


inputOneButton.addEventListener("click", () => {
  playerOne.innerText = inputOneHolder.value;
  console.log(formContainerOne.classList);
  // console.log(formContainerOne.classList.add("hide"));
  console.log(formContainerOne.classList);
});

rollOne.addEventListener("click", () => {

  if (flag === true) {


    if (playerOne.textContent !== "") {
      let roll = 1 + Math.floor(Math.random() * 5);
      scoreOne.innerText = scoreOne.innerText * 1 + roll;
      final()
      flag = false
    } else {
      alert("Player one name must be entered!!")
    }

  } else {
    alert("Allow Player Two na")
  }

});

// inputOneHolder.addEventListener("input",(e)=>{
//   console.log(e.target.value)
//   if(e.target.value!==""){
//     rollOne.disabled=false
//   }else{
//     rollOne.disabled=true

//   }
// })

// inputOneHolder.addEventListener("input",(e)=>{
//   console.log(e.target.value)
//   if(e.target.value!==""){
//     rollOne.disabled=false
//   }else{
//     rollOne.disabled=true

//   }
// })

// get(".modal").addEventListener("click", () => {

//   get(".modal").classList.add("hide");
//   all[0].innerText = 0;
//   all[1].innerText = 0;
// })


close.addEventListener("click", () =>{
get(".modal").classList.add("hide");
all[0].innerText = 0;
  all[1].innerText = 0;
  next[0].innerText = "";
  next[1].innerText = "";
  contain[0].classList.remove("hide");
  contain[1].classList.remove("hide");
  writeName[0].value = "";
  writeName[1].value = "";
}
)

get(".modal>div").addEventListener("click", (e) => {
  e.stopPropagation()
})


