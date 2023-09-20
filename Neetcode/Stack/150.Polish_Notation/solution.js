/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let operators = ['-', '+', '*', '/']
    for (let token of tokens) {
        const isOperator = operators.includes(token)
        if (isOperator) {
            let [firstValue, secondValue] = [stack.pop(), stack.pop()];
            stack.push(String(~~eval(`${secondValue} ${token} ${firstValue}`)));
        }
        else {
            stack.push(token);
        }
    }
    return stack[0];
};

tokens = ["4","13","5","/","+"]

console.log(evalRPN(tokens));