// 125 - 验证回文串(easy)

// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 输入: "A man, a plan, a canal: Panama"
// 输出: true

// 输入: "race a car"
// 输出: false

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let str = s.replace(/[^A-Za-z0-9]+/g, '').toLocaleLowerCase();
  let str2 = str.split('').reverse().join('')
  return str === str2 ? true : false
};

var isPalindrome = function(s) {
  let str = s.replace(/[^A-Za-z0-9]+/g, '').toLocaleLowerCase();
  let left = 0, right = str.length - 1;
  while(left < right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      return false
    }
  }
  return true
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
