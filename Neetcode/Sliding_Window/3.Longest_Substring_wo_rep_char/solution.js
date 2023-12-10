/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let [i, j, max] = [0, 0, 0];
    let set = new Set();
    while (i < s.length) {
        let char = s.charAt(i);
        while (set.has(char)) {
            set.delete(s.charAt(j));
            ++j;
        }
        set.add(char);
        max = Math.max(max, i - j + 1);
        ++i;
    }
    return max;
};

s = "pwwkewaybhjk"

console.log(lengthOfLongestSubstring(s));