class DArray {
    #size = 0;
    #capacity = 0;
    #arr = null;
    #CAP_EXPONENT = 2;

    constructor(cap) {
        if (cap <= 0) return;
        this.#capacity = cap;
        this.#arr = new Uint32Array(cap);
    }
    size() {
        return this.#size;
    }
    capacity() {
        return this.#capacity;
    }
    empty() {
        if (this.#size === 0) {
            return true;
        }
        return false;
    }
    reserve(n) {
        if (n > this.#capacity) {
            this.resize(n);
        }
    }
    clear() {
        this.#size = 0;
    }
    set(index, value) {
        this.#arr[index] = value;
    }
    front() {
        return this.#arr[0];
    }
    back() {
         return this.#arr[this.size - 1];
    }
    toArray() {
        return this.#arr.slice(0,this.#size - 1)
    }
    popBack() {
        if (this.#size === 0) {
            throw new Error("out of range")
        }

        this.#size--;
    }
    insert (pos,value) {
        if (pos < 0 || pos >= this.#size) {
            throw new Error("Out of range");
        }
         if (this.#size === this.#capacity) {
              this.resize(this.#capacity * this.#CAP_EXPONENT);
    }
        for (let i = this.#size - 1; i >= pos; --i) {
               this.#arr[i + 1] = this.#arr[i];
        }
    this.#arr[pos] = value;
    this.#size++;
  }

    resize (new_cap, fill = 0) {
        const tmp = new Uint32Array(new_cap);
        for (let i = 0; i < this.#size; ++i) {
            tmp[i] = this.#arr[i]; 
        }
        for (let i = this.#size; i < new_cap; ++i) {
            tmp[i] = fill;
        }
        this.#capacity = new_cap;
        this.#arr = tmp;
    }
    push_back(elem) {
        if (this.#size === this.#capacity) {
            this.resize(this.#size * this.#CAP_EXPONENT);
        }
        this.#arr[this.#size++] = elem;
    }
    at(index) {
        if (index < 0 || index >= this.#size) {
            throw new Error("Out of range");
        }
        return this.#arr[index];
    }
    erase(pos) {
        if (pos < 0 || pos >= this.#size) {
            throw new Error("Out of range");
        }
        for (let i = pos; i < this.#size - 1; ++i) {
            this.#arr[i] = this.#arr[i + 1];
        }
        this.#size--;
    }
    [Symbol.iterator] () {
        const collection = this.#arr;
        const colection_length = this.#size;
        let index = 0;
        return {
            next() {
                if (index < colection_length) {
                    return {value : collection[index++], done : false}
                }
                return {value : undefined, done : true}
            }
        }
    }
    swap(i,j) {
        [this.#arr[i],this.#arr[j]] = [this.#arr[j],this.#arr[i]];
    }
    values() {
        let arr = [];
        for (let i = 0; i < this.#size; ++i) {
            arr.push(this.#arr[i]);
        }
        return arr;
    }
    keys() {
        let arr = [];
        for(let i = 0; i < this.#size; ++i) {
            arr.push(i);
        }
        return arr;
    }
    entries() {
        let arr = [];
        arr.push(this.keys());
        arr.push(this.values())
        return arr;
    }
    myforEach(fn) {
        if (typeof fn !== 'function') {
            throw new Error("fn is not a function");
        }
        for (let i = 0; i < this.#size; ++i) {
            fn(this.#arr[i],i,this);
            }
        }
        myMap(fn) {
            let newarr = [];
             if (typeof fn !== 'function') {
                    throw new Error("fn is not a function");
        }
                 for (let i = 0; i < this.#size; ++i) {
                    newarr.push(fn(this.#arr[i],i,this));
            }
            return newarr;
        }
        filter(fn) {
            let newArr = [];
            if (typeof fn !== 'function') {
                throw new Error("fn is not a function");
            }
            for (let i = 0; i < this.#size; ++i) {
                if (fn(this.#arr[i],i,this)) {
                    newArr.push(this.#arr[i]);
                }
            }
            return newArr;
        }
        some(fn) {
             let bool = false;
                for(let i = 0; i < this.#size; i++) {
                    if(fn(this.#arr[i],i,arr))  {
                        bool = true;
                    }
                }
            return bool;
        }
        every(fn) {
        let bool = true;
                for(let i = 0; i < this.#size; i++) {
                    if(!fn(this.#arr[i],i,arr))  {
                        bool = false;
                    }
                }
            return bool;
        }
    }

let arr = new DArray(4)
arr.push_back(3);
arr.push_back(5);
arr.push_back(6);
arr.push_back(7);
/*console.log(...arr);


arr.popBack()
console.log(...arr);

arr.insert(2,15);
console.log(...arr);*/
console.log(arr.every((val) => val > 6))





