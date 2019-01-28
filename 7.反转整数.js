/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let flag = x < 0 ? -1 : 1;
    let s = x * flag + '';
    // x *= flag;
    s = s.split('').reverse().join('');
    s = Number(s) * flag;
    
    if (s < Math.pow(-2, 31) || s > Math.pow(2, 31) - 1) {
        s = 0;
    }
    // console.log(s)
    return s;
};

reverse(1534236469)