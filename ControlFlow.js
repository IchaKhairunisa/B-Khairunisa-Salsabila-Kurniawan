// For Loop
console.log("First loop: \n");
for(let i = 0; i < 6; i++) {
    console.log((i + 1) + " Da ba dee da ba dee");
}



// For Loop 2
console.log("\nSecond loop: \n");
for(let j = 25; j >= 0; j -= 5) {
    console.log(j);
}



const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
let i = 0;

// Array loop (for)
console.log("\nThird loop: \n");
for(i= 0; i < people.length; i++) {
    console.log(people[i]);
}

// // Array loop (while)
// console.log("\nThird loop: \n"); 
// while(i < people.length) {
//     console.log(people[i]);
//     i++;
// }

// // Array loop (do while)
// console.log("\nThird loop: \n");
// do {
//     console.log(people[i]);
//     i++; 
// }
// while(i < people.length);