/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    return (matrix.flat(1).indexOf(target) > -1) ? true : false;
}