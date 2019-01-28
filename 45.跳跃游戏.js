var jump = function(nums) {
    if (nums.length === 1) {
        return 0;
    }
    let jumpStep = 1;
    let n = 0;
    let i = 0;
    for(; i < nums.length; i++) {
        let next = 0;
        let max = 0;
        for (let j = 0; j < jumpStep; j++) {
            if (i + j + nums[i + j] > max) {
                next = i + j;
                max = i + j + nums[i + j];
            }
            if (i + j + nums[i + j] >= nums.length - 1) {
                next = nums.length - 1;
            }
        }
        i = next;
        n++;
        jumpStep = nums[i];
        if (jumpStep === 0) break;
    }
    return n;
};

jump([2,3,1,1,4])

class LRUCache {
    constructor(capacity) {
      this.capacity = capacity
      this.map = new Map()
    }
  
    get(key) {
      let val = this.map.get(key)
      if (typeof val === 'undefined') { return -1 }
      this.map.delete(key)
      this.map.set(key, val)
      return val
    }
  
    put(key, value) {
      if (this.map.has(key)) { 
        this.map.delete(key) 
      }
  
      this.map.set(key, value)
      let keys = this.map.keys()
      while (this.map.size > this.capacity) { this.map.delete(keys.next().value) }
    }
  }
  