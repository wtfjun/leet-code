/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = (new Array(numRows)).fill('');
    let flag = -1;
    let addNum = 0;
    for (let i = 0; i < s.length; i++) {
        let arrIndex = (i + addNum) % numRows; 
        if (flag === 1) {
            arrIndex = numRows - 1 - arrIndex;
        }
        arr[arrIndex] += s[i];
        if (arrIndex === 0 || arrIndex === numRows - 1) {
            
            if (arrIndex === 0 && flag !== -1) {
                flag = 0;
                addNum++;
            }
            if (arrIndex === numRows - 1) {
                flag = 1;
                addNum++;
            }
        }
    }
    // console.log(arr.join(''));
    return arr.join('');
};
/**
 * 思路：
 * flag标志位标志当前是竖的还是斜的
 * 竖的下标为 (i + addNum) % numRows
 * 斜的下标为 numRows - 1 - (i + addNum) % numRows
 */
convert('PAYPALISHIRING', 4)