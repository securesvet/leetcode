/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) { return -1} 
    let [low, high] = [0, nums.length - 1];
    while (low < high) {
        let mid = low + Math.floor((high - low + 1) / 2);
        if (target < nums[mid]) {
            high = mid - 1;
        }
        else {
            low = mid;
        }
        console.log(`High: ${high}, low: ${low}, mid: ${mid}`);

    }

    return nums[target] === target ? low : -1;
};

nums =
[-1,0,3,5,9,12]

console.log(search(nums, 3))