/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum < target) {
            ++left;
        }
        else if (sum > target) {
            --right;
        }
        else {
            return [left + 1, right + 1]
        }

    }
    return [-1, -1]
};

nums = [2,7,11,15]

console.log(twoSum(nums, 9))