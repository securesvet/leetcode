/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(p1, p2) {
    return Promise.all([p1, p2]).then(values => {
        return values.reduce((total, value) => total + value, 0)
    })
};

 addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); // 4
