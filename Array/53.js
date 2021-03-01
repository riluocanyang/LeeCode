// 53-最大子序和(easy)

// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

// 输入：nums = [1]
// 输出：1

// 输入：nums = [0]
// 输出：0

// 输入：nums = [-1]
// 输出：-1

// 输入：nums = [-100000]
// 输出：-100000

// 提示：

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105

// 进阶：如果你已经实现复杂度为O(n)的解法，尝试使用更为精妙的 分治法 求解。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length < 2) return nums[0] || 0
  let len = nums.length, sum = -Infinity, numMax = Math.max(...nums);
  for(let i = 0; i < len; i++) {
    let total = nums[i]
    for(let j = i+1; j < len; j++) {  
      total = total + nums[j]
      if (total > sum) {
        sum = total
      }
    }
  }
  return sum > numMax ? sum : numMax
};


// 动态优化

// 解题思路：

// 示例: [a, b , c, d , e]
// 解答这类题目, 省略不掉遍历, 因此我们先从遍历方式说起

// 通常我们遍历子串或者子序列有三种遍历方式

// 1、以某个节点为开头的所有子序列: 如 [a]，[a, b]，[ a, b, c] ... 
// 再从以 b 为开头的子序列开始遍历 [b] [b, c]。
// 2、根据子序列的长度为标杆，如先遍历出子序列长度为 1 的子序列，在遍历出长度为 2 的 等等。
// 3、以子序列的结束节点为基准，先遍历出以某个节点为结束的所有子序列，
// 因为每个节点都可能会是子序列的结束节点，因此要遍历下整个序列，
// 如: 以 b 为结束点的所有子序列: [a , b] [b] 
// 以 c 为结束点的所有子序列: [a, b, c] [b, c] [ c ]。

// 第一种遍历方式通常用于暴力解法,
// 第二种遍历方式 leetcode (5. 最长回文子串 ) 中的解法就用到了。
// 第三种遍历方式 因为可以产生递推关系, 采用动态规划时, 经常通过此种遍历方式, 
// 如 背包问题, 最大公共子串 , 
// 这里的动态规划解法也是以 先遍历出 以某个节点为结束节点的所有子序列 的思路

// 对于刚接触动态规划的, 我感觉熟悉第三种遍历方式是需要抓住的核心
// 因为我们通常的惯性思维是以子序列的开头为基准，先遍历出以 a 为开头的所有子序列，再遍历出以 b 为开头的...
// 但是动态规划为了找到不同子序列之间的递推关系，
// 恰恰是以子序列的结束点为基准的，这点开阔了我们的思路。
var maxSubArray = function(nums) {
  if (!nums.length) {
    return
  }
  let dp = new Array(nums.length), max = nums[0];
  dp[0] = nums[0];
  for(let i = 1; i < nums.length; i++) {
    // 以i为结尾的最大公共子序列最大值
    // 比如数组为[2,-1,3]
    // i为2，dp[i]  表示 [2,-1,3],[-1,3],[3]的最大值
    // 其中，[2,-1,3] 和 [-1, 3] 的最大值可以用dp[i-1] + nums[i]表示
    // [3] 可以用nums[i] 表示
    // 可以这样理解吗？
    dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
    max = Math.max(dp[i], max)
  }
  return max
}



// 优化 - 有大佬说这种方法类似于贪心算法，不是动态规划
// 
// 解题思路
// 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
// 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
// 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
// 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果

var maxSubArray = function(nums) {
  let sum = 0;
  let ans = nums[0];
  for(let num of nums) {
    // if (sum > 0) {  // 可以这样写
    if (sum + num > num) {
      sum += num
    } else {
      sum = num
    }
    ans = Math.max(ans, sum)
  }
  return ans
}


var maxSubArray = function(nums) {
  // 遍历数组，不单独定义变量，使用数组元素保存不断变化的最大子序和
  for (let i = 1; i < nums.length; i++) {
    // 从第 i 项开始，判断第 i - 1 项是否大于 0
    if (nums[i-1] > 0) {
      // 如果第 i - 1 项大于 0，表示具有增益效果，累加第 i - 1 项
      // 累加的第 i 项，相当于是当前的最大子序和，后续累加会基于当前最大子序和的基础上累加
      nums[i] += nums[i-1]
    }
    // 如果不满足，即第 i - 1 项小于等于 0，表示具有减益效果，直接跳过
  }
  // 取出并返回最大子序和
  return Math.max(...nums)
}

// 分治算法, 时间复杂度咋还慢了呢，是new了导致的吗？
var maxSubArray = function(nums) {
  return getInfo(nums, 0, nums.length - 1).mSum
}

function getInfo(a, l, r) {
  if (l === r) {
    return new Status(a[l], a[l], a[l], a[l]);
  }
  // const m = l + (r - l) >> 1;
  const m = (l + r) >> 1;              
  const lSub = getInfo(a, l, m);
  const rSub = getInfo(a, m+1, r);
  return pushUp(lSub, rSub)
}
                                           
function Status(l, r, m, i) {
  this.lSum = l;  // 以 l 为左端点的最大子段和
  this.rSum = r;  // 以 r 为右端点的最大子段和
  this.mSum = m;  // 区间子序列最大值
  this.iSum = i;  // 区间和
}

function pushUp(l, r) {
  console.log(l, r)
  const iSum = l.iSum + r.iSum;
  const lSum = Math.max(l.lSum, l.iSum + r.lSum);
  const rSum = Math.max(r.rSum, r.iSum + l.rSum);
  const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
  return new Status(lSum, rSum, mSum, iSum)
}


console.log(maxSubArray([4,-1,2,1]))
