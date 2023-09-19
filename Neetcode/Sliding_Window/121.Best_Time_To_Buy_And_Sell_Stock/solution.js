/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [left, right, max] = [0, 1, 0];
    
    while (right < prices.length) {
        if (prices[left] > prices[right]) {
            left = right;
        }
        if (prices[left] < prices[right]) {
            max = Math.max(max, prices[right] - prices[left])
        }
        ++right;
    }
    return max;
};