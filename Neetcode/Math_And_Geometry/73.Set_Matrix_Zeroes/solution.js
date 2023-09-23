/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var getIndexesOfZeroes = function(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            if (matrix[i][j] === 0) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

var getTrimmedIndexesOfZeroes = function(arrayOfIndexes, arrayOfIndexesOfZeroes) {
    let result = [];
    for (let indexes of arrayOfIndexes) {
        if (!arrayOfIndexesOfZeroes.include(indexes)) {
            result.push(indexes)
        }
    }
    return result;
}

var setZeroes = function(matrix) {
    let indexesOfZeroes = getIndexesOfZeroes(matrix);
    console.log(indexesOfZeroes)
    for (let indexes of indexesOfZeroes) {
        console.log(indexes)
        for (let i = 0; i < matrix.length; ++i) {
            matrix[i][indexes[0]] = 0;
        }
        for (let i = 0; i < matrix[0].length; ++i) {
            matrix[indexes[1]][i] = 0;
        }
    }
    return matrix;
};
