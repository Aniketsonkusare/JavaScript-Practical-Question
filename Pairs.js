const a = [1,2,3,4,5,6,7,8,9,10]
const target = 11;

function findPairs(arr,target) {
    const pairs = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target) {
                pairs.push(`(${arr[i]}, ${arr[j]})`)
            }
        }
    }
    return pairs
}

const Output = findPairs(a,target)
console.log(Output);


const  arr="LoremipsumdolorsitametconsecteturadipisicingelitQuosexpeditamollitiaillovoluptatenemoearumeiusaccusantiumiste!Nihilquasiteneturofficiacorruptimagnamillofacereporroaliasminusneque."

// example output
// output = {a: 3, b: 3, c: 30}