function shuffleNumber(arr) {
    let totalShuffle = arr.length
    while (totalShuffle > 0) {
        totalShuffle--;
        let indexChanged = Math.floor(Math.random() * totalShuffle)
        let temp = arr[totalShuffle]
        arr[totalShuffle] = arr[indexChanged]
        arr[indexChanged] = temp
    }
    return arr
}

console.log(shuffleNumber([1,2,3,4,5,6]));