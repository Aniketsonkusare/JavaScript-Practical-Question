let arr = [
    {name: "aniket",gender: "male"},
    {name: "harsh",gender: "male"},
    {name: "geeta",gender: "female"},
    {name: "deepa",gender: "female"},

]

let array = arr.filter((ele) => {
    return ele.gender === "male"
})

console.log(array);

let count = 0;
arr.forEach(function (ele) {
    if (ele.gender !== "male") {
        count++;
        arr.splice(ele,1);
    }
})
console.log(arr);

let abc = arr.forEach((ele) => {
    if (ele.gender !== "male") {
        console.log(ele.name ,"=" ,ele.gender);
    }
    else{
        console.log(ele.name , "=" ,ele.gender);
    }
})



for(let i = 1; i <= count; i++){
    for(let j = 0; j < arr.length; j++){
        if (arr[j].gender !== "male") {
            arr.splice(j,2)
            // console.log(arr[j].gender);
            // console.log(arr);
        }
    }
}

console.log(arr);

