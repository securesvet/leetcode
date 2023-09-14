/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        console.log(count);
        for (let char of str) count[char.charCodeAt()-97]++;
        let key = count.join("#");
        console.log(count);

        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};

strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))