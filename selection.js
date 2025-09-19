function selection(arr) {
    let size = arr.length;
    for(let i = 0; i < size - 1; ++i) {
        let min = i;
        for (let j = i + 1; j < size; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
  }
  const arr  = [4,2,1,5]
  console.log(selection(arr));
  
