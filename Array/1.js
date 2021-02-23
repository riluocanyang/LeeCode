// 1-两数之和(easy) 

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，
// 并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 你可以按任意顺序返回答案。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 示例1:
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 示例2:
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 示例3:
// 输入：nums = [3,3], target = 6
// 输出：[0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // Map方法：get、set、has、values、keys
var twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0, len = nums.length; i < len; i++) {
    let diffV = target - nums[i]
    if (map.has(diffV)) {
      let endI = map.get(diffV)
      return [endI, i]
    }
    map.set(nums[i], i)
  }
};

// 更快的方法
var twoSum = function(nums, target) {
  let obj = {}
  for(let i = 0, len = nums.length; i < len; i++) {
    let diffV = target - nums[i]
    if (obj.hasOwnProperty(diffV)) {
      let endI = obj[diffV]
      return [endI, i]
    }
    obj[nums[i]] = i
  }
};

var twoSum = function(nums, target) {
  let obj = {}
  for(let i = 0, len = nums.length; i < len; i++) {
    let diffV = target - nums[i]
    // 注意，这里是undefined，不是‘unddfined’
    if (obj[diffV] !== undefined) {
      return [obj[diffV], i]
    }
    obj[nums[i]] = i
  }
};


console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([2,7,11,15], 9))