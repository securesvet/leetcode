/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    ++digits[i];
    if (digits[i] === 10) {
        while (digits[i] === 10) {
            digits[i] = 0;
            --i;
            if (i === -1) {
                return [1].concat(digits);
            }
            ++digits[i];
        }
    }
    return digits;
};

digits = [9, 9]
console.log(plusOne(digits))
