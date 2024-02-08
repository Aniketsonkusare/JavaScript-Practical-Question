// method 1

function capitalizeString(params) {
    let allwords = params.split(" ").map((ele) => {
        return ele.charAt(0).toUpperCase() + ele.slice(1)
    })
    console.log(allwords.join(" "));
}

capitalizeString("my name is aniket")


// method 2

let a = "aniket sonkusare"
let b = a.split(" ").map((e) => {
    return e.charAt(0).toUpperCase() + e.slice(1)
})
console.log(b.join(" "));

// method 3

function capitalize1(params) {
    return params.charAt(0).toUpperCase() + params.slice(1)
}
console.log(capitalize1("aniket"))















