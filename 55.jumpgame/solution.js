/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if ([0, 1].includes(nums.length)) return true;

  let currentSegmentLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > currentSegmentLength) {
      return false;
    }
    currentSegmentLength = Math.max(currentSegmentLength, i + nums[i]);
    if (currentSegmentLength >= nums.length) return true;
  }
};
