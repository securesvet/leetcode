/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length < 2) {
        return 0;
    }

    let [left, right, max] = [0, height.length - 1, 0];
    while (left < right) {
        const current = Math.min(height[left], height[right]) * (right - left);
        if (height[left] > height[right]) {
            --right;
        }
        else {
            ++left;
        }
        max = Math.max(current, max);
    }
    return max;
};