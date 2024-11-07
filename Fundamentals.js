// String + Alert
let meow = "Hello, I\'m a cat! ";
alert(meow);

// Array
let meow2 = "I like to eat ";
let food = ["Chicken", " Tuna", " Salmon."];
console.log(meow + meow2 + food);

food[1] = ' Egg yolk';
console.log("I mean " + food + " Lol");

// Object
const cat = {
    name: "Willy",
    age: 2,
    breed: "Long haired-Domestic",
    eyeColor: "Yellowish"
};
console.log(cat);

// Boolean + Number + Logical Operators + Equality Comparison
const x = 10;
const y = 10.0;
const z = 1e3; // 100

const a = 5;
const b = "5";

console.log(x < y && y > z); // F && F -> F
console.log(!(x == y));      // !T -> F
console.log(x > z || z > y); // F || T -> T
console.log(x < y);          // F
console.log(x == y);         // T
console.log("Strict xy(===): ", x === y); // tipe data sama (number) -> T
console.log("Loose xy(==): ", x == y); // nilai sama -> T
console.log("Strict ab(===): ", a === b); // tipe data beda (a: int, b: string) -> F
console.log("Loose ab(==): ", a == b); // nilai sama -> T

