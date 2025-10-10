class BucketDeque {
    constructor(bucketSize = 4) {
        this.bucketSize = bucketSize;
        this.buckets = [new Array(bucketSize).fill(null)];
        this.frontBucket = 0;
        this.backBucket = 0;
        this.frontIndex = Math.floor(bucketSize/2);
        this.backIndex = this.frontIndex - 1;
        this.size = 0;
    }
    pushFront(value) {
        if (this.frontIndex < 0) {
            this.buckets.unshift(new Array(this.bucketSize).fill(null));
            this.frontBucket++;
            this.backBucket++;
            this.frontIndex = this.bucketSize - 1;
        }
        this.buckets[this.frontBucket][this.frontIndex] = value;
        this.frontIndex--;
        this.size ++;
    }
    pushBack(value) {
         if (this.backIndex >= this.bucketSize - 1) {
      this.buckets.push([...Array(this.bucketSize).fill(null)]);
      this.backIndex = -1;
      this.backBucket++;
    }

    this.backIndex++;
    this.buckets[this.backBucket][this.backIndex] = value;
  }

    print() {
        console.log("Buckets:");
        this.buckets.forEach((b, i) => {
            console.log(`Bucket ${i}: [${b.join(", ")}]`);
        });
        console.log(`frontBucket=${this.frontBucket}, frontIndex=${this.frontIndex}`);
        console.log(`backBucket=${this.backBucket}, backIndex=${this.backIndex}`);
        console.log("Size:", this.size);
        console.log("=".repeat(40));
    }

}
