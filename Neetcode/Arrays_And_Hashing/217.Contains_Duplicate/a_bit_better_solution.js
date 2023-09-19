/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = [];
    for (let num of nums) {
        if (set.includes(num)) {
            return true
        }
        set.push(num);
    }
    return false;
};
