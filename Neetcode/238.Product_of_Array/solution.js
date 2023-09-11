/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = 1;
    let output = [];
    for (let num of nums) {
        output.push(prefix);
        prefix *= num;
    }
    prefix = 1;
    for (let i = nums.length - 1; i >= 0; --i) {
        output[i] *= prefix;
        prefix *= nums[i];
    }

    return output;
};