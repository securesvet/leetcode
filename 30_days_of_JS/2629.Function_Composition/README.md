### The problem: https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript

Nothing difficult. But I guess it may be optimized a lot.

В оптимизированном солюшне узнал че такое callback (это функция с 4 аргументами: previous, current, index, array) а в методе reduceRight так же есть помимо вызова колбэка возможность задать initialValue. А можно и не задавать initialValue. Если задать, тогда initialValue будет помещено в previous, а то, что было бы previous без начального значения, станет current. Короче говоря, интересно. Много ли встроенных функций в JS-e работают таким образом?