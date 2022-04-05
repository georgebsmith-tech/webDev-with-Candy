let p = document.querySelector("p");

// let contents = [
//   "This is the content for all",
//   "This isfor oldschool",
//   "This is for the classic people",
// ];
let contents = {
  all: "This is the content for all",
  old: "This isfor oldschool",
  classic: "This is for the classic people",
};

p.innerText = contents[0];

let lis = document.querySelectorAll("li");

// lis.forEach((li, idx) => {
// //   console.log(li.dataset);
//   li.addEventListener("click", () => {
//     p.innerText = contents[idx];
//     li.classList.add("active");
//     lis.forEach((item, index) => {
//       if (index !== idx) {
//         item.classList.remove("active");
//       }
//     });
//   });
// });

lis.forEach((li, idx) => {
  //   console.log(li.dataset);
  li.addEventListener("click", () => {
    let tab = li.dataset.tab;
    console.log(tab);
    p.innerText = contents[tab];
    li.classList.add("active");
    lis.forEach((item, index) => {
      if (index !== idx) {
        item.classList.remove("active");
      }
    });
  });
});
