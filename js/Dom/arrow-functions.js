function myNumber(number) {
  console.log(number ** 2);
}

let myNumber1 = function (number) {
  console.log(number ** 2);
};

let myNumber2 = (number) => console.log(number ** 2);
// let myNumber2 = (number) => console.log(number ** 2);

myNumber(10);
myNumber1(67);
myNumber2(15);

let avg1 = (nums1, nums2, nums3) => (nums1 + nums2 + nums3) / 3;
console.log(avg1(2, 3, 1));
