function insertion(arr) {
    for (let i = 1; i < arr.length; ++i) {
        let current = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            --j;
        }
        arr[j+1] = current;
    }
    return arr;
}
let arr = [1,23,4,56]
console.log(insertion(arr));


function insertion(arr) {
    for (let i = 1; i < arr.length; ++i) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            --j;
        }
        arr[j + 1] = key;
    }
return arr;
}
