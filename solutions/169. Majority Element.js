/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const majority = Math.round(nums.length / 2)
    const map = {}
    for(let i = 0; i<nums.length; i++){
        const cur = nums[i]
        // Increment the count of each number in the hashmap
        map[cur] = (map[cur] || 0) + 1
        // Return the first number whose count is equal to the majority
        if(map[cur]===majority) return cur;
    }
};
