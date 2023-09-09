const readline = require('readline');

const read = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

read.question('', (input) => {
    const amountOfCards = parseInt(input);

    read.question('', (input) => {
        const initSequence = input.split(' ').map(Number)

        read.question('', (input) => {
            const winningSequence = input.split(' ').map(Number);

            // Здесь мы должны найти место, где элементы в начальной секвенции и конечной перестают совпадать

            let leftIndex = 0;
            let rightIndex = amountOfCards - 1;

            while (leftIndex < amountOfCards && initSequence[leftIndex] === winningSequence[leftIndex]) {
                ++leftIndex;
            }

            while (rightIndex > 0 && initSequence[rightIndex] === winningSequence[rightIndex]) {
                --rightIndex;
            }

            // Нашли индексы. Теперь сортируем по этим индексам и смотрим, есть совпадение с выигрышной комбинацией или нет.

            // Эту последовательность вычленяем из выигрышной, далее сортируем и вновь вставляем
            const reversedSequence = initSequence.slice(leftIndex, rightIndex + 1).sort();

            // И вновь соединяем
            const compareSequence = initSequence.slice(0, leftIndex).concat(reversedSequence, initSequence.slice(rightIndex + 1));

            if (JSON.stringify(compareSequence) === JSON.stringify(winningSequence)) {
                console.log('YES')
            }
            else {
                console.log('NO')
            }

            read.close();
        });
    });
});