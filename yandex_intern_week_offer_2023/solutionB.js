function onionWrapper(stringOrFunction) {
    const taxFunc = (typeof stringOrFunction === "function") ? stringOrFunction : null;
    const visitedCities = [...new Set(visitedCities)];
    
    function superOnion(stringOrFunction) {
        const taxFunc = (typeof stringOrFunction === "function") ? stringOrFunction : null;
        if (taxFunc) return taxFunc();
        else {
            const visitedCities = [...new Set(visitedCities)];
        }
        return function() {
            const remainingCities = [...new Set(visitedCities)];
            if (taxFunc) taxFunc(remainingCities);
        };
    }

    if (taxFunc) return superOnion;
    else { visitedCities.push(stringOrFunction); }
    console.log(visitedCities)
    return onionWrapper;
}

var a = onionWrapper('a')('a')('b')('c')();