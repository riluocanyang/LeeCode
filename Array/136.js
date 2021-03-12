// 136 - 只出现一次的数字(easy)

// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 输入: [2,2,1]
// 输出: 1

// 输入: [4,1,2,1,2]
// 输出: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let obj = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] ++
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return key
    }
  }
};

// 改进
var singleNumber = function(nums) {
  let ans = 0;
  for (const num of nums) {
    ans ^= num
  }
  return ans
}

// 1 ^ 1 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// 0 ^ 0 = 0

console.log(singleNumber([4,1,2,1,2]))