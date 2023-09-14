class MinStack {
    constructor () {
        this.stack = [];
        this.minStack = [];
    }
    /** 
     * @param {number} val
     * @return {void}
     */
    push (val) {
        this.stack.push(val);
    }

    /**
     * @return {number}
     */
    top () {
        return this.stack.length ? this.stack[this.stack.length - 1] : null;
    }
}


MinStack.prototype.push = function(val) {
    this.object.push(val);
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
    return this.object[this.object.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
 
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */