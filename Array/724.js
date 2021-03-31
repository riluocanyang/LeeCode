// 724 - 寻找数组的中心索引

// 给你一个整数数组 nums，请编写一个能够返回数组 “中心下标” 的方法。

// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果数组不存在中心下标，返回 -1 。如果数组有多个中心下标，应该返回最靠近左边的那一个。

// 注意：中心下标可能出现在数组的两端。

// 输入：nums = [1, 7, 3, 6, 5, 6]
// 输出：3
// 解释：
// 中心下标是 3 。
// 左侧数之和 (1 + 7 + 3 = 11)，
// 右侧数之和 (5 + 6 = 11) ，二者相等。


// 输入：nums = [1, 2, 3]
// 输出：-1
// 解释：
// 数组中不存在满足此条件的中心下标。

// 输入：nums = [2, 1, -1]
// 输出：0
// 解释：
// 中心下标是 0 。
// 下标 0 左侧不存在元素，视作和为 0 ；
// 右侧数之和为 1 + (-1) = 0 ，二者相等。


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let total = 0, left = 0, right = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      left = 0;
    } else {
      left += nums[i-1]
    }
    right = total - nums[i] - left;
    if (left === right) {
      return i
    }
  }
  return -1;

};

// 代码优化
var pivotIndex = function(nums) {
  const total = nums.reduce((a, b) => a + b, 0)
  // right = total - nums[i] - left; left == right
  // left = total - nums[i] - left
  // 2 * left + nums[i] = total
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] === total) {
      return i
    }
    sum += nums[i]
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2, 1, -1]))