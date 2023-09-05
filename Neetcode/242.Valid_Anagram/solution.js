/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    function getFreqTable(inputString) {
        let freqTable = {};
        for (let letter of inputString) {
            if (!(letter in freqTable)) {
                freqTable[letter] = 1;
            } else {
                freqTable[letter] += 1;
            }
        }
        return freqTable;
    }
    function dictsAreEqual(dict1, dict2) {
        if (dict1 == null || dict2 == null)
            return false;

        if (Object.keys(dict1).length !== Object.keys(dict2).length)
            return false;

        for (let key in dict1) {
            if (!(dict1.hasOwnProperty(key) || dict2.hasOwnProperty(key))) {
                return false;
            }

            if (dict1[key] !== dict2[key]) {
                return false;
            }

        }
        return true;
    }
    const freqTable1 = getFreqTable(s);
    const freqTable2 = getFreqTable(t);
    return dictsAreEqual(freqTable1, freqTable2);
}

s = "anagram";

t = "nagaram";

console.log(isAnagram(s, t));