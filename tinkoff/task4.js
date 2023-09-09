const readline = require('readline');

const read = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

read.question('', (input) => {
    const [sum, billsAmount] = input.split(' ').map(Number);

    read.question('', (input) => {
        const existingBills = input.split(' ').map(Number);

        let prevCalculations = {};

        // Далее проходим по массиву
        for (let bill of existingBills) {
            // Массив, который понадобится вдальнейшем для JSON.Stringrify и запихивания в предыдущие калькуляции
            // То есть в prevCalculations будут лежать вот такие объекты: '[1]: 1, [1, 1]: 2, [2]: 2, [2, 2]: 4, [1, 2]: 3'
            let currentCalculations = {}
            currentCalculations[JSON.stringify([bill])] = bill;
            currentCalculations[JSON.stringify([bill, bill])] = bill * 2;
            // А далее будем идти по ключам из prevCalculations
            for (let key of Object.keys(prevCalculations)) {
                let currentArray = JSON.parse(key);
                prevCalculations[JSON.stringify(currentArray.concat([bill]))] = currentArray.concat([bill]).reduce((a, b) => a + b);
                prevCalculations[JSON.stringify(currentArray.concat([bill, bill]))] = currentArray.concat([bill, bill]).reduce((a, b) => a + b);
            }
            
            // Extend'им предыдущие калькуляции. Кэширующий декоратор на костылях.
            prevCalculations = {...prevCalculations, ...currentCalculations};
        }


        if (Object.values(prevCalculations).indexOf(sum) > -1) {
        const flip = (data) => Object.fromEntries(
            Object
              .entries(data)
              .map(([key, value]) => [value, key])
            );
        let flippedCalculations = flip(prevCalculations);
        console.log(JSON.parse(flippedCalculations[sum]).length)
        console.log(JSON.parse(flippedCalculations[sum]).join(' '))
        }
        else {
            console.log('-1')
        }
        read.close();
    });
});