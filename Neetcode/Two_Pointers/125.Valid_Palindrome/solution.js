/**
 * @param {string} s
 * @return {boolean}
 */
function getOnlyLettersArray(input) {
    let output = [];
    for (let char of input) {
        if (isLetter(char) || isNumber(char)) {
            // console.log(`${char} is letter, ${isLetter(char)} ${isNumber(char)}`)
            if (isUppercaseLetter(char)) {
                char = getLowerCaseLetter(char);
            }
            output.push(char);
        }
    }
    return output;
}

function isNumber(char) 
{
   let charCode = char.charCodeAt(0);
   return (charCode >= 48 && charCode <= 57)
}


function isLetter(char) {
    let charCode = char.charCodeAt(0);
    return (charCode <= 90 && charCode >= 65) || (charCode <= 122 && charCode >= 97);
}

function isUppercaseLetter(char) {
    let charCode = char.charCodeAt(0);
    return (charCode <= 90 && charCode >= 65);
}

function getLowerCaseLetter(letter) {
    let charCode = letter.charCodeAt(0);
    return String.fromCharCode(charCode + 32);
}

var isPalindrome = function(s) {
    let onlyLetters = getOnlyLettersArray(s);
    return onlyLetters.join("") === onlyLetters.reverse().join("");
};

s = "0A man, a plan, a canal: Panama0"
console.log(isNumber('0'))

console.log(isPalindrome(s));