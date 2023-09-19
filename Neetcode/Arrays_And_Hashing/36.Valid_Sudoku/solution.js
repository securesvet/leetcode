/**
 * @param {character[][]} board
 * @return {boolean}
 */
function getEmptyMatrix(length) {
    return Array(length).fill().map(()=>Array(length).fill());
}

function getNoDotsArray(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; ++i) {
        if (inputArray[i] !== '.') {
            result.push(inputArray[i])
        }
    }
    return result;
}

function getMatrixOfCubes(board) {
    let result = getEmptyMatrix(board.length);
    let sizeOfBoard = board.length / 3;
    let countX = 0;
    let countY = 0;
    if (Array.isArray(board)) {
        for (let m = 0; m < sizeOfBoard; ++m) {
            for (let i = 0; i < sizeOfBoard; ++i) {
                for (let j = 0; j < 3; ++j) {
                    for (let k = 0; k < 3; ++k) {
                        result[countX][countY] = board[j + i * 3][k + m * 3];
                        ++countY;
                    }
                }
                countY = 0;
                ++countX;
            }
        }
    }
    return result;
}

function getTransportedBoard(board) {
    let result = getEmptyMatrix(board.length);
    if (Array.isArray(board)) {
        for (let i = 0; i < board[0].length; ++i) {
            for (let j = 0; j < board.length; ++j) {
                result[i][j] = board[j][i];
            }
        }    
    }
    return result;
    
}

function arrayContainsDuplicate(inputArray) {
    let temp = new Set(inputArray);
    return temp.size !== inputArray.length;
}

function innerArraysContainDuplicate(matrix) {
    for (let i = 0; i < matrix.length; ++i) {
        if (arrayContainsDuplicate(getNoDotsArray(matrix[i]))) {
            return true;
        }
    }
    return false;
}

var isValidSudoku = function(board) {
    return !(innerArraysContainDuplicate(board) || innerArraysContainDuplicate(getTransportedBoard(board)) || innerArraysContainDuplicate(getMatrixOfCubes(board)))
};

// board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// console.log(isValidSudoku(board));