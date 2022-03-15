function printMessage() {
  console.log("This is the message");
}

// printMessage();
// console.log("This is the first");
// console.log("This is the second");

// setTimeout(printMessage, 4000); // Higher order function
// setTimeout(function () {
//   console.log("Hey, Pretty Candy, How are you?");
// }, 3000);
// console.log("This is the first");
// console.log("This is the second");

// setInterval(printMessage, 4000); // Higher order function
// setInterval(function () {
//   console.log("Hey, Pretty Candy, How are you?");
// }, 3000);
// console.log("This is the first");
// console.log("This is the second");

let count = 0;
let messgae = setInterval(printMessage, 4000); // Higher order function
let pretty = setInterval(function () {
  console.log("Hey, Pretty Candy, How are you?");
  count = count + 1;
  //   console.log(count);
  if (count === 5) {
    clearInterval(messgae);
    clearInterval(pretty);
  }
}, 3000);
console.log("This is the first");
console.log("This is the second");
