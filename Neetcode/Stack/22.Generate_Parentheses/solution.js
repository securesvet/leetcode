/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = [];
    let result = [];
    var backTrack = function(open, closed) {
        if (closed === n) {
            result.push(stack.join(''));
        }

        if (open < n) {
            stack.push('(');
            backTrack(open + 1, closed);
            stack.pop();
        }

        if (closed < open) {
            stack.push(')');
            backTrack(open, closed + 1);
            stack.pop();
        }

    }

    backTrack(0, 0);

    return result;
};