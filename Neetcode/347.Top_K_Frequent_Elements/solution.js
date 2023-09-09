/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    function getFreqTableEmpty(nums) {
        let numSet = new Set(nums);
        let freqTable = {};
        for (let num of numSet) {
            freqTable[num] = 0;
        }
        return freqTable;
    }

    function getFreqTable(nums) {
        let freqTable = getFreqTableEmpty(nums);
        for (let num of nums) {
            freqTable[num] += 1;
        }
        return freqTable;
    }

    function sortPropertiesByValues(obj) {
        let sortable = [];
        for (let property in obj) {
            sortable.push([property, obj[property]]);
        }

        sortable.sort((a,b) => b[1] - a[1]);

        return sortable;

    }
    
    let result = [];
    for (let key_value_pair of sortPropertiesByValues(getFreqTable(nums)).slice(0, k)) {
        result.push(key_value_pair[0]);
    }
    
    return result;
};