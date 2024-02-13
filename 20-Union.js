function UnionArray(arr1,arr2) {
    return [...new Set(arr1.concat(arr2))]
}

// console.log(UnionArray([1,2,3,4,5,6,6,6,6,6,6],[2,3,4,5,6]));


let a = [1,2,3,4,5,6,6,6,6,]

console.log([...new Set(a)]);