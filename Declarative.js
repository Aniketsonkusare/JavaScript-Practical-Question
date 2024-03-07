// Declarative Syntax

const arr = [1,2,3,4,5]
const arr2 = []

arr2 = arr.map(function (v,i) {
    return v * 2
})

console.log(arr2);