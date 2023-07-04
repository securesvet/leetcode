/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let countPresent = init;
    return {
        increment: () => {
            return ++countPresent;
        },
        decrement: () => {
            return --countPresent;
        },
        reset: () => {
            countPresent = init;
            return countPresent;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
