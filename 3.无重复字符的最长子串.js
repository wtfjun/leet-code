/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     var s = s.split('');
//     let longSub = '';
//     const allUnique = arr => [...new Set(arr)].length === arr.length;
//     let j = 1;
//     for (let i = 0; i < s.length; i++) {
//         for (; j <= s.length; j++) {
//             let sub = s.slice(i, j);
//             if (allUnique(sub) && sub.length > longSub.length) {
//                 longSub = sub;
//             }
//             if (!allUnique(sub)) {
//                 break;
//             }
//         }
//     }
//     console.log(longSub, longSub.length);
//     return longSub.length;
// };

var lengthOfLongestSubstring = function(s) {
    let str = '';
    let max = 0;
    for (let i = 0; i < s.length;) {
        if (str.indexOf(s[i]) === -1) {
            str += s[i];
            max = str.length > max ? str.length : max;
            i++;
        } else {
            str = str.substring(str.indexOf(s[i]) + 1);
        }
    }
    return max;
}



lengthOfLongestSubstring("111")
// lengthOfLongestSubstring('bbbbb');
// lengthOfLongestSubstring('pwwkew')
