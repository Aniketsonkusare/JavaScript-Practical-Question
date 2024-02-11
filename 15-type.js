function typearr(params) {
    return typeof params
}

console.log(typearr([]))
console.log(typearr({}))
console.log(typearr(12))
console.log(typearr("12"))
console.log(typearr(true))
console.log(typearr(undefined))
console.log(typearr(null))
console.log(typearr(function name(params) {
    
}))