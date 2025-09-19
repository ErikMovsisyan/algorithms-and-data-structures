function counting(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    const out = new Array(arr.length);
    for (let num of arr) {
        count[num]++;
       // console.log(count[num]); // its for checking loop
    }
     for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
       // console.log(count[i]);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
    out[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
}
return out;
}
let arr = [2,6,1,3,7,9]
console.log(counting(arr));
