/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let finalSum = Number(init);
    for (let i = 0; i < nums.length; ++i) {
        finalSum = fn(finalSum, nums[i]);
    }
    return finalSum;
};
