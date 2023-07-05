#The problem:
https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
Basically we should just create a new array and push the modified elements into.
Nothing scary, but this particular line: result.push(fn(arr[i], i)) bugs me out a little. Like, what if the function does not expect two arguments? What if it is going to be three arguments?
