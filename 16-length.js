function retrive(arr,n) {
    if (n <= arr.length) {
        for(i = 0; i < n; i++){
            console.log(arr[i]);
        }
    }
    else{
        console.log(n + " not ele in this array");
    }
}

retrive([1,2,3,4,5,6],4)