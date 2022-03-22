let number_of_items = 9;
let price = 50;

// let totalPrice = number_of_items * price;
// if (totalPrice >= 500) {
//   let discount = (totalPrice * 10) / 100;
//   let pay = totalPrice - discount;
//   console.log("Pay:", pay);
// } else {
//   pay = totalPrice;
//   console.log("Pay:", pay);
// }

let totalPrice = number_of_items * price;
let pay;
if (totalPrice >= 500) {
  let discount = (totalPrice * 10) / 100;
  pay = totalPrice - discount;
} else {
  pay = totalPrice;
}
console.log("Pay:", pay);
