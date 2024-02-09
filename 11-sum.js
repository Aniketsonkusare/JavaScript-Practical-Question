let a = [1,2,3,4,5,6,7,8,9,10]
let sum = 0

a.forEach(element => {
    sum = sum + element
});

console.log("The Sum of Array is =",sum);


let b = [11,22,33]
let sum1 = 0;

b.map((e) => {
    sum1 = sum1 + e
})

console.log("The Sum of Array is =",sum1);