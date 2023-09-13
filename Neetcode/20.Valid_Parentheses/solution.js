/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracketsMap = {')' : '(',
                        '}' : '{',
                        ']' : '['}

    stack = [];

    for (let char of s) {
        // console.log(`Stack: ${stack.join(' ')}`)
        if (char in bracketsMap) {
            if (stack.length === 0) {
                return false;
            }
            else if (stack[stack.length - 1] === bracketsMap[char]){
                stack.pop();
            }
            else {
                return false;
            }
        }
        else {
            stack.push(char)
        }
    }

    return stack.length === 0;

};

s="([([])]){}"

console.log(isValid(s))