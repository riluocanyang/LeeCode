// 7-整数反转(easy)

// 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1]  ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。
//  

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-integer
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 示例1:
// 输入：x = 123
// 输出：321

// 示例2:
// 输入：x = -123
// 输出：-321

// 示例3:
// 输入：x = 120
// 输出：21

// 示4:
// 输入：x = 0
// 输出：0

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const max = Math.pow(2,31) - 1
  const min = Math.pow(2,31) * -1
  if (typeof x !== 'number'  || x === 0) {
    return 0
  }
  let res = Math.abs(x).toString().split('').reverse().toString().replace(/,/g,'').replace(/^0+/, '');
  res = x > 0 ? +res : -res
  if ((x > 0 && res > max) || (x < 0 && res < min)) {
    return 0
  }
  return res
};

// 简化代码：
var reverse = function(x) {
  if (typeof x !== 'number'  || x === 0) {
    return 0
  }

  const border = Math.pow(2,31);
  const max = border - 1;
  const min = -border;
  // join方法会去掉，
  let res = Math.abs(x).toString().split('').reverse().join('')
  // +、-会去掉前面的0
  res = x > 0 ? +res : -res
  return res > max || res < min ? 0 : res
};


// 位计算方法
var reverse = function(x) {
  if (typeof x !== 'number'  || x === 0) {
    return 0
  }

  let res = 0;
  while(x!==0) {
    res = res * 10 + x % 10;
    // 只有有一个数为1，异或结果就为1
    // 所有的按位操作符的操作数都会被转成补码（two's complement）形式的有符号32位整数
    // 也就是按位操作符只适用于有符号32位整数
    x = (x / 10) | 0;

  }
  return (res  | 0) === res ? res : 0
};


console.log(reverse(-123))
console.log(reverse(123))
console.log(reverse(120))
console.log(reverse(0))
