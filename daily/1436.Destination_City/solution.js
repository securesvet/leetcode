/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const setOfCities = new Set();
    // Adding outgoing cities
    paths.map((el) => {setOfCities.add(el[0])});
    for (const [_, dest] of paths)  {
        if (!setOfCities.has(dest)) {
            return dest;
        }
    }

    return "";
};