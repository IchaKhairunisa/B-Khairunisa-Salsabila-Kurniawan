function printHeart(heart) {
    console.log(heart)
}
printHeart("<3")



// Return
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));

function multiply(a, b) {
    return a * b;
}
const pairs = [
    [2, 3],
    [4, 5],
    [6, 7]
];
for (const [a, b] of pairs) {
    console.log(multiply(a, b));
}



let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}
observe();



// Arrow
const sayHello = (name) => `${name}`;

console.log(sayHello("Hedwig"));
console.log(sayHello("Harry"));

// const sayHello = (name) => {
//     console.log(`${name}`);
// };
// sayHello("Toji");
// sayHello("Ryomen");
