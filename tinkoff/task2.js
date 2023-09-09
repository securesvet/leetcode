const readline = require('readline');

const read = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

read.question('', (input) => { 
    const inputString = String(input);
    let constWord = 'sheriff';


    // Функция составляет таблицу частоты повторения букв
    function getFreqTable(inputString) {
        let freqTable = {};
        for (let letter of inputString) {
            if (!(letter in freqTable)) {
                freqTable[letter] = 1;
            } else {
                freqTable[letter] += 1;
            }
        }
        return freqTable;
    }
    
    // Функция считает количество повторений в inputString букв,
    // которые содержатся в constString
    function getFreqTableForCertainString(inputString, constString) {
        let freqTable = {};
        const setOfLetters = new Set(constString.split(''));
        for (let letter of inputString) {
            if (setOfLetters.has(letter)) {
                if (!(letter in freqTable)) {
                    freqTable[letter] = 1;
                } else {
                    freqTable[letter] += 1;
                }
            }
        }
        return freqTable;
    }

    freqTableConst = getFreqTable(constWord);
    freqTableInput = getFreqTableForCertainString(inputString, constWord);
    

    // Булевая функция, которая будет сверять схожесть словарей по ключам (не по значениям!!!!!! по ключам!!!!)
    function dictsAreEqualByKeys(dict1, dict2) {
        if (dict1 == null || dict2 == null)
            return false;

        if (Object.keys(dict1).length !== Object.keys(dict2).length)
            return false;

        for (let key in dict1) {
            if (!(dict1.hasOwnProperty(key) || dict2.hasOwnProperty(key))) {
                return false;
            }
        }
        return true;
    }

    // Дальше пойдет код чисто для слова 'sheriff', потому как придумать алгоритм
    // в то время как на задачи так мало времени, тяжко. Возможно, вернусь, если останется время
    
    // Получается, что нам нужно найти такую букву, где минимальное количество повторений. 
    // Соответственно, по всему словарю ищем минимальное значение, и так же проверяем букву f
    // так как она повторяется дважды, должны проверить по key (f) значение, если оно в 2 раза больше, то 
    // тогда ответом будет value(minFrequent), если меньше, то количество слов, которые можно составить,
    // будет определяться формулой if 2 * amountOfRepetition < freqTableInput.f => amountOfRepetition;
    // else => freqTableInput.f // frequency.
    // где frequency это 2.

    let amountOfWords = 0;
    if (dictsAreEqualByKeys(freqTableConst, freqTableInput)) {
    let keys = Object.keys(freqTableInput);
    let lowestValue = Math.min.apply(null, keys.map((x) => freqTableInput[x]));
        if (2 * lowestValue <= freqTableInput.f) {
            amountOfWords = lowestValue;
        }
        else {
            amountOfWords = parseInt(freqTableInput.f / 2)
        }
    }
    console.log(amountOfWords);
    read.close();
});