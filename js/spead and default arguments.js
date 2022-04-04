const numbers = [2, 4, 5, 6]
let  log = console.log

// numbers.push(3,5,5,6)

// console.log(numbers)

let new_numbers = numbers.copyWithin()

log(new_numbers)

// log(new_numbers)

numbers.push("Candy")

log(new_numbers)

// let a = 34
// let b = a

// a=10
// log(b)

let n_numbers = [...numbers]
log(n_numbers)

numbers.push(20)

log(n_numbers)
log(numbers)


// function addNumbers(a, b) {
//     if (!b) {
//         log(a)
//     } else {
//         log(a+b)
//     }
// }

// function addNumbers(a, b=20) {
 
//         log(a+b)
  
// }

function addNumbers(a=10, b=20) {
 
        log(a+b)
  
}

addNumbers(12, 4)
addNumbers(12)
addNumbers()
addNumbers(b=12,a=30)



