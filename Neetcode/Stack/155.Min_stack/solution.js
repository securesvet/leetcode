var MinStack = function() {
    this.object = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.object.push({
        value: val,
        min: (this.object.length === 0 ? val : Math.min(val, this.getMin()))
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.object.pop(this.object.length - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.object[this.object.length - 1].value
};

MinStack.prototype.getMin = function() {
    return this.object[this.object.length - 1].min;
};
