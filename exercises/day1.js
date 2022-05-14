//[3,4,5]=>[3,4,6]

function myFunction(arr) {
  let newAArr = [];
  arr.forEach((item, idx) => {
    if (idx == arr.length - 1) {
      newAArr.push(item + 1);
    } else {
      newAArr.push(item);
    }
  });
  return newAArr;
}

// console.log(myFunction([3, 4, 5, 34, 56, 1, 34, 6]));

function myFunction1(arr) {
  let newAArr = [...arr];
  newAArr[arr.length - 1] = newAArr[arr.length - 1] + 1;
  return newAArr;
}
// console.log(myFunction1([3, 4, 5, 34, 56, 1, 34]));

// her helper x = x + 1 or x++ or x +=1

let arr = [3, 4, 9];
let str = "";
arr.forEach((n, idx) => {
  str += n;
});

// > x++
// 7
// > x
// 8
// > ++x
// 9
// > let u=[3,4,5,6]
// undefined
// > u
// [ 3, 4, 5, 6 ]
// > u.pop()
// 6
// > u
// [ 3, 4, 5 ]
// > u.shift()
// 3
// > u
// [ 4, 5 ]
// > u.unshift(6)
// 3
// > u
// [ 6, 4, 5 ]
// > u.unshift(6)
// 4
// > u
// [ 6, 6, 4, 5 ]
// > u.splice(1,2)
// [ 6, 4 ]
// > u
// [ 6, 5 ]
// > u.push(...[6,5])
// 4
// > u
// [ 6, 5, 6, 5 ]
// > u.splice(2,0,[10,7])
// []
// > u
// [ 6, 5, [ 10, 7 ], 6, 5 ]
// > u.pop(2)
// 5
// > u
// [ 6, 5, [ 10, 7 ], 6 ]
// > u.splice(1,0,...[12,4])
// []
// > u
// [ 6, 12, 4, 5, [ 10, 7 ], 6 ]
// >
