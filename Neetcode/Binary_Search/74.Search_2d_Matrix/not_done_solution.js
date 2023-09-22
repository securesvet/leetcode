/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix === undefined) return false;
    let row = 0;
    while (row < matrix.length) {
        // console.log(matrix[row][matrix[0].length - 1] < target)
        if (matrix[row][matrix[0].length - 1] < target) {
            ++row;
        }
        else {
            break;
        }
    }
    // console.log(row);
    return matrix[row].includes(target);
};

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 3

console.log(searchMatrix(undefined, target));