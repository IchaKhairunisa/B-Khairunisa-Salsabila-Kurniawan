// callBack
function myFirst() {
    myDisplayer("Good Bye");
}
function mySecond(callback) {
    myDisplayer("Hello");
    callback();
}
function myDisplayer(message) {
    console.log(message);
}

mySecond(myFirst);



// setTimeout
console.log("Paragraf 1");
setTimeout(() => {
    console.log("Paragraf 2");
}, 3000);
console.log("Paragraf 3");
console.log("Paragraf 4");
console.log("Paragraf 5");



// setInterval
function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish");




function divide(x, y) {
    try {
        if (x == undefined || y == undefined) {
            throw new Error("Kedua parameter harus diisi!");
        }
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error("Input harus berupa angka!");
        }
        if (y === 0) {
            throw new Error("Pembagian dengan 0 tidak dapat dilakukan!")
        }
        const result = x/y;
        return result;
    }
    catch(error) {
        console.error("Terjadi kesalahan: " + error.message);
        return null;
    }
}
console.log(divide(3, 5));
console.log(divide(3, 0));
console.log(divide("a", 5));
console.log(divide(5));

// function divide(x, y) {
//     return (typeof x === 'number' && typeof y === 'number' && y !== 0) ? x / y : null;
// }
// console.log(divide(3, 5));
// console.log(divide(3, 0));
// console.log(divide("a", 5));
// console.log(divide(5));
