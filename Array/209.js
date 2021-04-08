// 209. 长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 
// [numsl, numsl+1, ..., numsr-1, numsr] ，
// 并返回其长度。如果不存在符合条件的子数组，返回 0fc  。


// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 输入：target = 4, nums = [1,4,4]
// 输出：1

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//  双指针，滑动窗口
// 子数组相当于一个可变大小的窗口，遍历数组，滑动窗口，即可求解
 var minSubArrayLen = function(target, nums) {
   let maxNum = Number.MAX_SAFE_INTEGER;
  let i = 0, sum = 0, ans = maxNum;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while(sum >= target) {
      ans = Math.min(ans, j - i + 1);
      sum -= nums[i++]
    }
  }
  return ans === maxNum ? 0 : ans
};

console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))
console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1,4,4]))