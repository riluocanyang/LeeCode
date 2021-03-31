// 15 - 三数之和(mid)

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 输入：nums = []
// 输出：[]


// 输入：nums = [0]
// 输出：[]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let arr = [];
  if (nums == null || nums.length < 3) return arr
  // 排序
  nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    // 不应该放在外面，每比较一次就重新new Map
    let hashMap = new Map(), flag = false;
    // 当前第一个值就大于0，返回arr
    if (nums[i] > 0) return arr;
    // 去重i
    if ( i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < len; j++) {
      if (j - i > 2 && nums[j] == nums[j -1] && flag) continue;
      let dif = -(nums[i] + nums[j])
      if (hashMap.has(dif)) {
        arr.push([nums[i], nums[hashMap.get(dif)], nums[j]])
        // 找到置为true
        flag = true
      } else {
        hashMap.set(nums[j], j)
        flag = false
      }
    }
  }
  return arr;

};

// 不用flag，认为第三个值才是重复值，在找到值的地方用delete方法
var threeSum = function(nums) {
  let arr = []
  if(nums == null || nums.length < 3) return arr;
  nums.sort((a, b) => a - b)
  for(var i =0; i<nums.length-2; i++){
    const hashMap = new Map();
    if(nums[i] > 0) break;
    // 去重处理
    if(i > 0 && nums[i] == nums[i-1]) continue
    for(var j =i+1; j<nums.length; j++){
      const dif = -(nums[i]+nums[j])
      // 去重处理
      // 因为hashMap是首次记录第二次才会push到数组，所以需要判断只有三次重复才能continue
      if(j>i+2 && nums[j]==nums[j-1] && nums[j] === nums[j- 2] )
        continue
      if(hashMap.has(dif)){
        arr.push([nums[i],nums[hashMap.get(dif)],nums[j]])
        // 通过delete 方法
        hashMap.delete(dif)
      } else {
        hashMap.set(nums[j],j)
      }
      
    }
  }
  return arr

};

// 改进 排序 + 双指针
var threeSum = function(nums) {
  let arr = []
  if (nums == null || nums.length < 3 ) return arr;
  nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) break;  // 第一个值就大于0，三数之和一定大于0，结束循环
    if (i > 0 && nums[i] == nums[i-1]) continue;
    // 双指针
    let L = i+1, R = len-1;
    while (L < R) {
      const sum = nums[i] + nums[L]+ nums[R];
      if (sum == 0) {
        arr.push([nums[i], nums[L], nums[R]])
        while( L < R && nums[L] == nums[L+1]) L++;  // 去重
        while( L < R && nums[R] == nums[R-1]) R--; // 去重
        L++;
        R--;
      }
      else if (sum < 0) L++;
      else if (sum > 0) R--;
    }

  }
  return arr;
}



console.log(threeSum([-2,0,1,1,2]))

