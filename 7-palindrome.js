// method 1

function checkPalindromeString(params) {
    let len = params.length;
    for(let i = 0; i < len/2; i++){
        if (params[i] !== params[len - i - 1]) {
            return "not a Palindrome number"
        }
        return "palindrome number"
    }
}

let a = "madam"
let b = checkPalindromeString(a)
console.log(b);


// method 2 

function palindromestring(params) {
    let str = params.split("").reverse().join("")
    return str === params
}

console.log("palindrome string or not =",palindromestring("lool"));
console.log("palindrome string or not =",palindromestring("pool"));