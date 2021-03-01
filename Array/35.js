// 35- 搜索插入位置（easy）

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 输入: [1,3,5,6], 5
// 输出: 2

// 输入: [1,3,5,6], 2
// 输出: 1

// 输入: [1,3,5,6], 7
// 输出: 4

// 输入: [1,3,5,6], 0
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (target === nums[i]) {
      return i
    } else if (target < nums[i]) {
      return i
    }
  }
  return nums.length;
};

var searchInsert = function(nums, target) {
  let i = 0;
  while(i < nums.length && nums[i] < target) 
    i++;
  return i;
};


// 简化
var searchInsert = function(nums, target) {
  let i = 0;
  while(i < nums.length && nums[i] < target) 
    i++;
  return i;
};

// 二分查找
var searchInsert = function(nums, target) {
  return findInsPost(nums, 0, nums.length - 1, target)
};

function findInsPost(arr, left, right, target) {
  if (left > right) return 0
  let i = left + ~~((right - left) >> 1);
  if (arr[i] ===  target) {
    return i
  } else if (arr[i] < target) {
    if(i + 1 > right) return i+1
    return findInsPost(arr, i + 1, right, target)
  } else { 
    if (left > i - 1) return left
    return findInsPost(arr, left, i - 1, target)
  }
}

// 改进
function findInsPost(arr, left, right, target) {
  while (left <= right) {
    var m =  left + (right - left >>> 1)
    if (arr[m] === target) return m
    else if (arr[m] > target) return findInsPost(arr, left, m-1, target)
    else return findInsPost(arr, left + 1, right, target)
  }
  return left
}



console.log(searchInsert([1,2], 0))

// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1,3,5,6], 7))
// console.log(searchInsert([1,3,5,6], 0))

