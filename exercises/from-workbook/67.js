const ages = [3, 5, 3, 66, 87, 87, 54];

let totalCost = 0;
ages.forEach((age, idx) => {
  if (age <= 2) {
    totalCost = totalCost + 0;
  } else if (age >= 3 && age <= 12) {
    // totalCost =totalCost+14
    totalCost += 14;
  }
});
console.log(totalCost);
