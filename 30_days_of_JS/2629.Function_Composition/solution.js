/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        if (functions.length === 0) {
            return x;
        }
        let result = 0;
        let currentValue = x;
        for (let i = functions.length - 1; i >= 0; --i) {
            currentFunction = functions[i];
            result = currentFunction(currentValue);
            currentValue = result;
        }
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */