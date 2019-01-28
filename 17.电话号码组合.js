/**
 * 利用eval打印出多重循环
 * 优点：理解简单
 * 缺点：执行效率低下
 */
const letterCombinations = digits => {
    let cycles = '';
    let digitsMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    cycles += `(function () {let result = [];`
    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        let digitStr = digitsMap[digit];
        let len = digitStr.length;
        let iN = `i${i}`;
        cycles += `for (let i${i} = 0; ${iN} < ${len}; ${iN}++) {
                    let var${i} = '${digitStr}'[${iN}];`
    }
    let one = '';
    for (let i = 0; i < digits.length; i++) {
        one += `var${i}+`;
    }
    one = one.substr(0, one.length - 1);
    cycles += `result.push(${one});`

    for (let i = 0; i < digits.length; i++) {
        cycles += '}'
    }
    cycles += 'return result}())'
    // console.log(cycles);
    console.log(eval(cycles))
    return eval(cycles);
};

/**
 * 逐层增加组合，3层循环
 * 优点：效率较高
 */
const letterCombinations = digits => {
    if (digits.length === 0) return [];
    let digitsMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    let digitsObjTree = {
        0: digitsMap[digits[0]].split('')
    };
    for (let i = 1, len = digits.length; i < len; i++) {
        digitsObjTree[i] = [];
        for (let j = 0, lastArray = digitsObjTree[i - 1]; j < lastArray.length; j++) {
            for (let k = 0; k < digitsMap[digits[i]].length; k++) {
                let compose = lastArray[j] + digitsMap[digits[i]][k];
                digitsObjTree[i].push(compose)
            }
        }
    }
    // console.log(digitsObjTree[digits.length - 1])
    return digitsObjTree[digits.length - 1];
}

letterCombinations('234')