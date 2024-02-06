// method 1

function reverse(params) {
    return Number(params.toString().split("").reverse().join(""))
}

console.log("Reverse the Number =",reverse(123456789));

// method 2

function reverse1(num) {
    let reverse = 0;
    let reminder;

    while (num > 0) {
        reminder = num % 10;
        reverse = reverse * 10 + reminder;
        num = Math.floor(num / 10)
    }
    console.log("Reverse Number is =",reverse);
}

reverse1(123456)

// method 3

function reverse2(str) {
    return Number(str.toString().split("").reverse().join(""))
}

let a = 123456789
let b = reverse2(a)
console.log("Reverse Number =",b);




