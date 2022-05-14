// An online retailer sells two products: widgets and gizmos. Each widget weighs 75
// grams. Each gizmo weighs 112 grams. Write a program that reads the number of
// widgets and the number of gizmos in an order from the user. Then your program
// should compute and display the total weight of the order.

const widgets = 75;
const gizmos = 112;

let widgetsNumber = 1;
let gizmosNumber = 17;

let totalOne = widgets * widgetsNumber;
let totalTwo = gizmos * gizmosNumber;

console.log(totalOne + totalTwo + " grams");

// Pretend that you have just opened a new savings account that earns 4 percent interest
// per year. The interest that you earn is paid at the end of the year, and is added
// to the balance of the savings account. Write a program that begins by reading the
// amount of money deposited into the account from the user. Then your program should
// compute and display the amount in the savings account after 1, 2, and 3 years. Display
// each amount so that it is rounded to 2 decimal places.

// const money = 100000;
// const interest = money * 0.04;

// let sum = interest + money;

// console.log("For the First Year the User earned " + sum.toFixed(2));

// let sumNew = sum;
// let anotherInterest = sumNew * 0.04;
// let secondEarn = anotherInterest + sumNew;
// console.log("For the Second Year the User earned " + secondEarn.toFixed(2));

// let lastSum = secondEarn;
// let lastInterest = lastSum * 0.04;
// let lastEarn = lastInterest + lastSum;

// console.log("For the Third Year the User earned " + lastEarn.toFixed(2));

// let money = 100000;
// let interest = money * 0.04;

// money = interest + money;

// console.log("For the First Year the User earned " + money.toFixed(2));

// interest = money * 0.04;
// money = money + interest;
// console.log("For the Second Year the User earned " + money.toFixed(2));

// interest = money * 0.04;
// money = money + interest;

// console.log("For the Third Year the User earned " + money.toFixed(2));
let money = 100000;
for (let i = 0; i < 5; i++) {
  let interest = money * 0.04;
  money = interest + money;
  console.log(`For year ${i + 1} the money received is ` + money.toFixed(2));
}
