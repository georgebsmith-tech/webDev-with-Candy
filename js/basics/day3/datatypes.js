// let d = "78.45";

// explicit type casting
// console.log(typeof d);
// d = Number.parseInt(d);
// console.log(d);
// d = Number.parseFloat(d);
// console.log(d);

// console.log(typeof d);

// implicit typecasting

/*
 console.log("5" + 6);
console.log("5" * 6);
console.log("5" / 6);

*/

// String Dat type

let lastName = "George";

let otherName = "Smith";
let firstName = `Boma`; // backtick or template literals

let fulName = lastName + otherName + firstName;

console.log(fulName);

fulName = lastName + " " + otherName + " " + firstName;

console.log(fulName);

// String Interpolation
const fullNaame2 = `${lastName} ******* ${otherName} firstName`;

console.log(fullNaame2);

let sentence = `my name is ${firstName} ${lastName} and i'm in love with pretty precious`;

console.log(sentence);

// var fullNaame2 = `${lastName} ******* ${otherName} firstName`;

// console.log(fullNaame2);

//length

console.log(fulName.length);
console.log(firstName.length);

// string methods(behaviours or actions)
console.log(fulName.toLowerCase());
console.log(fulName.toUpperCase());
console.log(fulName.endsWith("o"));
console.log(fulName.endsWith("a"));
console.log(fulName.endsWith("ma"));
console.log(fulName.includes("sm"));
console.log(fulName.includes("Sm"));
console.log(fulName.includes("Sm"));
console.log(fulName.toLowerCase().includes("sm")); // Method chaining

console.log(fulName.replace("George", "Precious"));

//String indexing and Slicing

console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);
console.log(firstName[10]);
