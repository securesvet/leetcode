##The link to the problem:
```
https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
Here we create a function called createCounter and within it a variable should be passed in, so we just return function that returns a n++
```
Somehow, if I use:
```
let createCounter = (n) => {
    ...
}
```
it consumes more memory comapring to this method:
```
let createCounter = function(n) {
    ...
}
```
I guess it has something to do with array operator (=>). It is about to be figured out
