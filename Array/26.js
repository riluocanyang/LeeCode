// 26-删除排序数组中的重复项(easy)

// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 给定数组 nums = [1,1,2], 

// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
// 你不需要考虑数组中超出新长度后面的元素。


// 给定 nums = [0,0,1,1,1,2,2,3,3,4],

// 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
// 你不需要考虑数组中超出新长度后面的元素。

// 说明:

// 为什么返回数值是整数，但输出的答案是数组呢?

// 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

// 你可以想象内部操作如下:

// // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
// int len = removeDuplicates(nums);

// // 在函数里修改输入数组对于调用者是可见的。
// // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }



/**
 * @param {number[]} nums
 * @return {number} 
 */
var removeDuplicates = function(nums) {


  let len = nums.length;
  if (len === 0 || len === 1) return len;
  for(let i = 1; i < nums.length; i++) {
    // 此方法更耗时
    // if (nums.slice(0,i).includes(nums[i])) {
    //   nums.splice(i,1);
    //   i--;
    // }
    for(let j = 0; j < curLen; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(i,1);
        i--;
        curLen--;

      } 
    }
    curLen++;
  }
  // return nums.length
  return curLen

};

// 改进
var removeDuplicates = function(nums) {
  // Set未修改原数组，返回新的迭代器对象
  let temp = [...new Set(nums)]
  temp.forEach((item, i) => {
    nums[i] = item
  })
  return temp.length;
}


// 改进
// 这是一个有序数组
var removeDuplicates = function(nums) {
  let len = nums.length;
  if (len === 0 || len === 1) return len;
  let curLen = 0;
  for(let i = 0; i < len; i++) {
    if (nums[i] !== nums[i-1]) {
      nums[curLen] = nums[i]
      curLen++
    }
  }
  return curLen

};

console.log(removeDuplicates([1,1,2]))