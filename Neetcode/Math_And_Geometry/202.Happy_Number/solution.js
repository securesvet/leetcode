/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let unhappy_numbers = []
    let current_n = n;
    while (!unhappy_numbers.includes(current_n)) {
        let sum = 0;
        for (let digit of String(current_n).split('')) {
            sum += Number(digit) ** 2;
        }
        if (sum === 1) {
            return true;
        }
        else {
            unhappy_numbers.push(current_n);
            current_n = sum;
        }
    }

    return false;
};