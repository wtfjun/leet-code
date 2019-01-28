/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const dividendArray = Number(dividend).toString(2).split('');
    const divisorArray = Number(divisor).toString(2).split('');

    console.log(dividendArray);
};

divide(8, 2);