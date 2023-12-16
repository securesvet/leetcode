/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let k = -1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        const res = piles.reduce((a, b) => a + Math.ceil(b / mid), 0);
        if (res > h) {
            left = mid + 1;
        }
        else {
            k = mid;
            right = mid - 1;
        }

    }
    return k
};
piles = [3,6,7,11]
h = 8
console.log(minEatingSpeed(piles, h))