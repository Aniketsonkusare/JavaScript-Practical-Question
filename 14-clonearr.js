// function name(params) {
//     return [...params]
// }

// console.log(name([1,2,3,4,5]))


function cloneArrWithForeach(params) {
    let newarr = [];
    params.forEach(element => {
        return newarr.push(element)
    });
    return newarr
}

let arr = [1,2,3,4,5,6]
let arr1 = cloneArrWithForeach(arr)
console.log(arr1);


function cloneArrWithMap(params) {
    let newarr = []
    params.map((ele) => {
        newarr.push(ele)
    })
    return newarr
}

let a = [1,2,3,4,5]
let b1 = cloneArrWithMap(a)
console.log(b1);