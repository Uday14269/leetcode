/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var map={};
    for(var i=0;i<nums.length;i++){
        var values=nums[i];
        var complementPair=target-values;
        if(map[complementPair]!= undefined){
            return [map[complementPair], i];
        }else{
            map[values]= i;
                  }
        }
  
};
