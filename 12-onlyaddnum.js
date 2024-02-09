let a = ["aniket",123,"harsh",456]
let sum = 0;

a.forEach(element => {
    if (typeof element === "number") {
        sum = sum + element
    }
});

console.log("Sum of Array is =",sum);


let b = ["aniket",789,"harhs",123]
let sum1 = 0;

b.map((ele) => {
    if (typeof ele === "number") {
        sum1 = sum1 + ele
    }
})

console.log("Sum Of array is =",sum1);


let c = "Concat "
let d = "The String"

let e = c.concat(d)
console.log(e);