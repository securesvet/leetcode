/**
 * @param {Function} fn
 */
function memoize(fn) {
    let arrayOfArgs = {};
    return function(...args) {
        const key = JSON.stringify(args);

        if (!(key in arrayOfArgs)) {
            arrayOfArgs[key] = fn(...args);
        } 

        return arrayOfArgs[key];

    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */