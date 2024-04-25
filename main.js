// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// ==============================================================================
var twoSum = function(nums, target) {
    
    let numberObject = {}
    for(let i = 0; i<nums.length; i++) {    
        
        let findnumber = target - nums[i];
        if(numberObject[findnumber] !== undefined) {

            return [numberObject[findnumber],i]
        }

        numberObject[nums[i]] = i

    
    }
  
};

// {
//     2:0,

// }
console.log(twoSum([15,2,11,7],9))
// ==============================================================================