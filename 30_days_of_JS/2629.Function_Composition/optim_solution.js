/* This solution uses reduceRight method. So basically we may get rid of for loop */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if (functions.length === 0) {
        return x => x;
    }
        
    return functions.reduceRight(function(prev, curr) {
        return function(x) {
            return curr(prev(x));
        }
    })
    };

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/