function cool(text, changeLang) {
    function getSeparated(text, changeLang) {
        let stackOfText = [];
        for (let i = 0; i < text.length; ++i) {
            if (text[i] === "[") {
                stackOfText.push(text[i].concat(text[i + 1], text[i + 2]));
                i += 2;
            }
            else {
                stackOfText.push(text[i]);
            }
        }
        return stackOfText;
    }

    const stack = getSeparated(text);
    let result = [];
    let previousChar;

    // Флаг для того, чтобы понимать, менялся ли язык
    let langIsChanged = false;

    let specialCharacters = ["[_]", "[b]", "[l]" ,"[v]"]

    for (let i = 0; i < stack.length; ++i) {
        console.log(stack[i] === ":")
        const char = stack[i];
        if (char.length === 1) {
            if (previousChar !== char) {
                const charToPush = (langIsChanged) ? changeLang(char) : char;
                result.push(charToPush);
            }
            previousChar = char;
        }
        else {
            if (previousChar !== char) {
                if (char === "[b]") result.pop();
                if (char === "[l]") langIsChanged = !langIsChanged;
                if (char === "[v]") {
                    let countOfPasting = 1;
                    if (i + 1 > stack.length) break;
                    while (stack[i + 1] === "[v]") {
                        ++countOfPasting;
                        ++i;
                    }
                    let pastingResult = [];
                    const indexOfStart = i;
                    while (!specialCharacters.includes(stack[i + 1]) && i < stack.length) {
                        pastingResult.push(stack[i + 1]);
                        ++i
                    }
                    const indexOfEnd = i;
                    pastingResult = pastingResult.slice(0, ~~((indexOfEnd - indexOfStart) / countOfPasting));
                    for (let charOfPasting of pastingResult) {
                        result.push(charOfPasting);
                    }
                }
                previousChar = "";
                countOfRepeating = 1;
            }
            previousChar = char;
        }
        console.log(result);
    }
return result.join('')
}

text = "T[_]o[_]d[_]o[_]:[_][_][v][v]погладь котапогладь кота"

console.log(cool(text))