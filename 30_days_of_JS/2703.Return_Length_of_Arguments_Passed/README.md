### The link: https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript

Here we are going to learn how to know how many arguments were passed into function.

The interesting thing to learn here is this:


With respect to (...args) =>, ...args is a rest parameter. It always has to be the last entry in the parameter list and it will be assigned an array that contains all arguments that haven't been assigned to previous parameters.

It's basically the replacement for the arguments object. Instead of writing

function max() {
  var values = Array.prototype.slice.call(arguments, 0);
  // ...
}
max(1,2,3);

you can write

function max(...value) {
  // ...
}
max(1,2,3);

Also, since arrow functions don't have an arguments object, this is the only way to create variadic (arrow) functions.