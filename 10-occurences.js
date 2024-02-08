function occ(params) {
    let occurences = {}
    params.split("").forEach(element => {
        if (occurences.hasOwnProperty(element) === false) {
            occurences[element] = 1
        }
        else{
            occurences[element]++
        }
    });
    return occurences
}

console.log(occ("aniket"));
console.log(occ("harsh"));


const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false


const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined


const example = {}
console.log("prop define",example.hasOwnProperty("prop"));   // false

example.prop = "exists";
console.log("prop exists",example.hasOwnProperty("prop"));   // true

example.prop = null
console.log("prop null",example.hasOwnProperty("prop"));   // true

example.prop = undefined
console.log("prop undefined",example.hasOwnProperty("prop"));   // true