/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numsSet = new Set(nums);

    let numsNoDuplicates = Array.from(numsSet);

    numsNoDuplicates.sort((a, b) => a - b);

    console.log(numsNoDuplicates);

    let current = 1;

    let temp = 1;

    if (numsNoDuplicates.length > 0) {
        for (let i = 0; i < numsNoDuplicates.length - 1; ++i) {
            console.log(`numsNoDuplicates[${i}] ${numsNoDuplicates[i]} === numsNoDuplicates[${i + 1}] - 1 (${numsNoDuplicates[i + 1] - 1})`)

            if (numsNoDuplicates[i] === numsNoDuplicates[i + 1] - 1) {
                ++temp;
                current = Math.max(temp, current);
            }
            else {
                temp = 1;
            }
        }
    }
    else {
        return 0;
    }
    return current;
};

nums = [9,1,4,7,3,-1,0,5,8,-1,6]

console.log(longestConsecutive(nums))