function lastElementPrint(arr,n) {
    if (n <= arr.length) {
        for(i = 0; i < n; i++){
            console.log(arr[arr.length - 1 - i]);
        }
    }
    else{
        console.log(n + " ele not in this array");
    }
}

lastElementPrint([1,2,3,4,5,6],3)