function frequent(params) {
    let freq = {}
    params.forEach(element => {
        if (freq.hasOwnProperty(element)) return freq[element]++
        else return freq[element] = 1
    });
    console.log(freq);

    let ans = Object.keys(freq).reduce((acc,next) => {
        console.log(freq[acc], freq[next]);
        // 1 > 2 ? 1 : 2
        // 2 > 2 ? 2 : 3
        // 3 > 3 ? 3 : 3
        // 3 > 3 ? 3 : 3
        // Three 3 times repeate
        return freq[acc] > freq[next] ? acc : next
    })
    console.log("Repeated Number is =",ans);
}

// 1 one time
// 2 two time
// 3 three time

frequent([1,2,2,3,3,3])


// function frequent1(arr){
//     let ans = arr.reduce( (acc,num)=>{
//         return freq[acc] > freq[num] ? acc : num;
//     })
//     console.log(ans);
// }
// frequent1([1,2,3,4,1,4,3,1,3,7,])