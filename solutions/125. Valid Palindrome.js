/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let leftIdx = 0;
    let rightIdx = s.length - 1;
​
    while(leftIdx < rightIdx){
        if (s[leftIdx] !== s[rightIdx]) return true
​
        rightIdx --
        leftIdx ++ 
​
    }
    return true
};
