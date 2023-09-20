/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let token of tokens) {
        switch (token) {
            case "+" : {
                stack.push(stack.pop() + stack.pop())
                break;
            }
            case "-" : {
                stack.push( - stack.pop() + stack.pop())
                break;
            }
            case "*" : {
                stack.push(stack.pop() * stack.pop());
                break;
            }
            case "/" : {
                stack.push(~~(1 / (stack.pop() / stack.pop())));
                break;
            }
            default: {
                stack.push(Number(token));
                break;
            }
        }
    }
    return stack[0];
};