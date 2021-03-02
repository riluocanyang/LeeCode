// 66-加一（easy）

// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。

// 输入：digits = [0]
// 输出：[1]

// 提示：

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length;
  for(let i = len -1 ; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i-1 < 0) {
        digits.unshift(1)
      }
    } else {
      digits[i]++;
      break;
    }
  }
  return digits
};


var plusOne = function(digits) {
  // 数值6145390195186705544超出Number基本类型的容纳范围，改用BigInt基本类型
  let num = BigInt(digits.join(''))
  // BigInt基本类型进行数学操作时，需要在数字字面量后加个n
  let string = String(num + 1n);
  return string.split('').map(item => Number(item))
}

console.log(plusOne([4,3,2,1]))
console.log(plusOne([9,9,9,9]))
console.log(plusOne([1]))