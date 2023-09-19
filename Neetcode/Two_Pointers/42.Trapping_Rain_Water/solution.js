/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let [left, currentAreaToSubtract, maxHeightBeforeDescending, right] = [0, 0, 0, 1];


    while (right < height.length - 1) {
        if (height[left] < height[right]) {
            if (maxHeightBeforeDescending !== 0) {

            }
            else {
                maxHeightBeforeDescending = Math.max(height[left], height[right])
                left = right;
                ++right;
            }
        }
        else {
            
        }
    }
};

height = [0,1,0,2,1,0,1,3,2,1,2,1]
