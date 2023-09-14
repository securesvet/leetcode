/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    return (s.length !== t.length) ? false : s.split('').sort().every((val, index) => val === t.split('').sort()[index])
};
// let s = "anagram";
// let t = "nagaram";
// console.log(isAnagram(s, t))