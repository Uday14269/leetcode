/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
 var result = [newInterval];
    for(i=0;i<intervals.length;i++){
         if(intervals[i][1]<=result[0][1]
         && intervals[i][1]>=result[0][0]){
            result[0][0] = Math.min(intervals[i][0],result[0][0]);   
            continue;
         } 
         if(result[0][1]>=intervals[i][0]
         && result[0][0]<=intervals[i][0]){
            result[0][1] = Math.max(intervals[i][1],result[0][1]);    
            continue;
         }
         if(result[0][1]<=intervals[i][1]
         && result[0][0]>=intervals[i][0]) result.shift();    
         result.push(intervals[i]);
    }
    return result.sort((a,b)=>a[0]-b[0]);
};
