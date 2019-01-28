/**
 * @param {number[]} nums
 * @return {number[][]}
 */


const threeSum = nums => {
    let answer = [];
    const numsMin = [], numsMax = [];

    const twoSum = (nums, target) => {
        let map = new Map();
        nums.forEach((e, i) => map.set(e, i));
    
        for(let i=0;i<nums.length;i++) {
            let j = map.get(0 - target - nums[i]);
            if(j && j !== i) {
                let repeat = false;
                for (let k = 0; k < answer.length; k++) {
                    if (answer[k].includes(nums[i]) && answer[k].includes(nums[j])) {
                        repeat = true;
                        break;
                    }
                }
                if (!repeat) {
                    answer.push([nums[i], nums[j], target]);
                }
                // break;
            }
        }
    };
    
    nums.forEach(e => {
        e <= 0 && numsMin.push(e);
        // e === 0 && numsZero.push(e);
        e > 0 && numsMax.push(e);
    })

    // numsMin.forEach(e => {
    //     twoSum(numsMax, e);
    // })

    numsMax.forEach(e => {
        twoSum(numsMin, e);
    })

    let zeroNum = 0;
    numsMin.forEach(e => e === 0 && zeroNum++);
    zeroNum >= 3 && answer.push([0, 0, 0])
    console.log(answer)
    return answer;
};

threeSum([-1,0,1,2,-1,-4])