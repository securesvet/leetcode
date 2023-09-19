/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    function getFreqTableEmpty() {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let freqTableEmpty = {};
        for (let letter of alphabet) {
            freqTableEmpty[letter] = 0;
        }
        return freqTableEmpty;
    }

    function getFreqTable(inputString) {
        let freqTable = getFreqTableEmpty();
        for (let letter of inputString) {
            if (letter in freqTable) {
                freqTable[letter] = 1;
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

    function isAnagram(s, t) {
        return dictsAreEqual(getFreqTable(t), getFreqTable(s));
    }

    let anagramsMap = new Map();
    

    for (let str of strs) {
        let currentFreqTable = getFreqTable(str);
        let f1 = getFreqTable('eat')
        let f2 = getFreqTable('tea')

        anagramsMap.set(f1, []);
        if (anagramsMap.get(currentFreqTable) === undefined){
            anagramsMap.set(currentFreqTable, []);
            console.log(`Does map have tea: ${anagramsMap.has(f2)}`)
        }
        else {
            console.log(`${str} is anagram of ${anagramsMap.get(currentFreqTable)}`)
        }
        anagramsMap.set(currentFreqTable, anagramsMap.get(currentFreqTable).push(str))
        console.log(str);
        console.log(anagramsMap.get(f1));
    }


    return Object.values(anagramsMap);
};

strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))