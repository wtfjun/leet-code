/**
 * 解法一：暴力求解（O^3）
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function(s) {
    let maxPal = '';
    let str = '';

    const isPalindrome = s => {
        const len = s.length;
        let result = true;
        for (let i = 0; i < len/2; i++) {
            if (s[i] !== s[len - i - 1]) {
                result = false;
                break;
            }
        }
        return result;
    }

    for (let i = 0; i < s.length; i++) {
        if (maxPal.length === s.length - i) {
            break;
        }
        str = '';
        for (let j = i; j < s.length; j++) {
            str += s[j];
            if (isPalindrome(str)) {
                if (str.length > maxPal.length) {
                    maxPal = str;
                }
            } 
        }
    }
    return maxPal;
};

/**
 * 解法二：（O^2）
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function(s) {
    let maxStr = '';
    s = '#'+s.split('').join('#')+'#';
    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        let j = 1;
        while (i - j >= 0 && i + j <= s.length && s[i - j] === s[i + j]) {
            str = `${s[i - j]}${str}${s[i + j]}`;
            if (str.length > maxStr.length) {
                maxStr = str;
            }
            j++;
        }
    }
    maxStr = maxStr.replace(/#/g, '');
    // console.log(maxStr);
    return maxStr;
};

longestPalindrome2('121')

