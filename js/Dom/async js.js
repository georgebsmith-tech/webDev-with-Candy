function doIt(a) {
  console.log(a * 2);
}

function getResult(a, b, func) {
  let x = (a + b) / 2;
  func(x);
}

// function getResult(a, b, func) {
//   let x = (a + b) / 2;
//   func(x);
// }

// getResult(20, 10, doIt);

// Promise;

// let presh = new Promise((rel, rej) => {
//   return rel();
// });

// console.log(presh);

// presh.then((info) => {
//   console.log(info);
// });

// let presh = new Promise((rel, rej) => {
//   return rel("Done with the task");
// });

// console.log(presh);

// presh.then((info) => {
//   console.log(info);
// });

// let presh = new Promise((rel, rej) => {
//   return rej("You're stupid");
//   return rel("Done with the task");
// });

// // console.log(presh);

// presh
//   .then((info) => {
//     console.log(info);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let presh = new Promise((rel, rej) => {
  let a = 10;
  let b = 40;
  if (a + b >= 30) {
    return rel({ result: a + b, message: "You're good" });
  } else {
    return rej({ error: { message: "Try  again" } });
  }
});

// console.log(presh);

// presh
//   .then((info) => {
//     console.log(info);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

presh.then(
  (info) => {
    console.log(info);
  },
  (err) => {
    console.error(err);
  }
);
