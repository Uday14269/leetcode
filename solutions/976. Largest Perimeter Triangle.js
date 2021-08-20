/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b-a);
    let i = 0, j = 1, k = 2;
    let a, b, c;
    while (k < nums.length) {
        a = nums[i], b = nums[j], c = nums[k];
        if (canFormTriangle(a, b, c)) return a+b+c;
        i++; j++; k++;
    }
    return 0;
};
​
function canFormTriangle(a, b, c) {
    if ((a+b) <= c) return false;
    else if ((a+c) <= b) return false;
    else if ((b+c) <= a) return false;
    return true;
}
