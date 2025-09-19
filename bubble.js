function myBubble(arr) {
    const size = arr.length;
    for (let i = 0; i < size - 1; ++i) {
        for (let j = 0; j < size - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


function otherBubble(arr) {
    for(let i = 0; i < arr.length - 1; ++i) {
        let flag = false;
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                flag = true;
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
        if(!flag) break;
    }
    return arr;
}
let arr1 = [6,2,1,7,8]
console.log(bubble(arr1));
