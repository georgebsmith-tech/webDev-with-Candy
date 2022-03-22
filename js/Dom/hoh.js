function addIt(a, b) {
  // function declaration
  return 12 - a + b;
}

console.log(addIt(2, 4));

let y = addIt;

console.log(y(3, 5));

let touchIt = function (h) {
  return 2 * h;
};

console.log(touchIt(2));
