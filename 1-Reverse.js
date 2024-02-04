// method 1 (Map throw reverse)
let a = "My Name is Aniket";
let b = a.split(" ")
    .map(function (params) {
        return params.split("").reverse().join("")
    })

console.log(b.join(" "));

//  method 2 (function throw reverse)
function Name(params) {
    return params.split("").reverse().join("")
}

let q = "Aniket";
let value = Name(q);
console.log(value);



// var define and reverse (simple method)
let d = "Aniket"
let g = d.split("").reverse().join("")
console.log(g);


