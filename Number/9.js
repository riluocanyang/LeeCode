// 9-回文数（esay）

// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 示例1:
// 输入：x = 121
// 输出：true

// 示例2:
// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

// 示例3:
// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。

// 示例4:
// 输入：x = -101
// 输出：false

// 提示：-2^31 <= x <= 2^31 - 1

/**
 * @param {number} x
 * @return {boolean}
 */

//  此方法超时了
var isPalindrome = function(x) {
  const strX = String(x), len = strX.length;
  if (len === 1) return true
  if (x < 0) return false;

  let centerI  = len % 2 ? Math.floor(len / 2) :  Math.floor(len / 2) -1;
  for(let i = 0; centerI - i <=0; i++) {
    console.log(233)
   if (len % 2 && strX[centerI - i] !== strX[centerI + i]) {
     return false
   }
   if (len % 2 === 0 && strX[centerI-i] !== strX[centerI + 1 + i]) {
     return false
   }
  }
  return true
};

// 上面方法超时原因，centerI - i <=0 改为 centerI - i >=0，因为<=0一开始就不满足
var isPalindrome = function(x) {
  const strX = x.toString(), len = strX.length;
  if (len === 1) return true
  if (x < 0) return false;

  let centerI  = len % 2 ? Math.floor(len / 2) :  Math.floor(len / 2) -1;
  for(let i = 0; centerI - i <=0; i++) {
   if (len % 2 && strX[centerI - i] !== strX[centerI + i]) {
     return false
   }
   if (len % 2 === 0 && strX[centerI-i] !== strX[centerI + 1 + i]) {
     return false
   }
  }
  return true
};

// 其他方法：
var isPalindrome = function(x) {
  return Number(`${Math.abs(x)}`.split('').reverse().join(''))==x
};

var isPalindrome = function(x) {
  var sStr = x.toString();
  if(sStr[0] === '-') {
      return false;
  }

  for(let i = 0; i < sStr.length / 2; i++) {
      if(sStr[i] !== sStr[sStr.length - i - 1]) {
          return false
      }
  }
  return true;
};


console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(1000010))