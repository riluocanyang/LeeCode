// 88-合并两个有序数组(easy)

// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//   let res = nums1.concat(nums2);
//   res.map((item, i) => {
//     nums1[i] = item;
//   })
//   nums1.sort();
//   for (let i = 0;; i++) {
//     if (nums1.length > m+n) {
//       if (!nums1[i]) {
//         nums1.splice(i, nums1.length-m-n)
//         break;
//       }
      
//     } else  {
//       break;
//     }
//   }
//   return nums1
// };


// 改进
var merge = function(nums1, m, nums2, n) {
  // let len1 = nums1.length - 1;
  // let len2 = nums2.length - 1;
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while(len1 >=0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  // 插入剩余的nums2，nums2可能为空
  // slice 返回一个新的数组对象
  nums1.splice(0, len2+1, ...nums2.slice(0, len2+1))
  return nums1                  
}


console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
// console.log(merge([1], 1, [], 0))