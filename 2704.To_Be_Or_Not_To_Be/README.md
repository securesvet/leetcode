#The problem:
https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
So basically we have a variable called ```expect``` and we have to pass the value through this exact expect, to be honest, I was not familiar with such thing in JS, but it is extremely interesting:
```
...
    return {
        toBe: (variable) => {
                some code here
            },
        notToBe: (variable) => {
                some code here
            }
        }
...
```
So we can make new (as I prefer to call it here) methods, that we can call the way we want them to be called. So we access those elements of `dictionary`, where keys are "toBe" and "notToBe", it passes the new variable (damn, that is cool) and we my add any kind of code we want.
