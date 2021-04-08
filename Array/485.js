// 485. 最大连续 1 的个数
// 给定一个二进制数组， 计算其中最大连续 1 的个数。
// 输入：[1,1,0,1,1,1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0, slow = 0, fast = 0;
  while(fast < nums.length) {
    if (nums[slow] === 1) {
      
      if (nums[fast] === 1) {
        ++fast;
        if (fast === nums.length) {
          max = Math.max(max, fast - slow)
        }
        
      } else {
        max = Math.max(max, fast - slow)  
        ++fast;
        slow = fast;       
      }
    } else {
      ++slow;
      ++fast;
    }
    
  }
  return max
};

var findMaxConsecutiveOnes = function(nums) {
  let max = 0, count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
      max = Math.max(max, count)
    } else {
      count = 0
    }
  }
  return max;
}

// fast 每次加1， slow 遇1加1，遇0则断，等同于上面代码
var findMaxConsecutiveOnes = function(nums) {
  let slow = 0, max = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] === 1) {
      slow++;
      max = Math.max(max, slow)
    } else {
      slow = 0;
    }
  }
  return max;
}

var findMaxConsecutiveOnes = function(nums) {
  return Math.max(...nums.join('').split('0').map(el => el.length))
}

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))