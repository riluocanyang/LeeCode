// 20-有效的括号（easy）

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。


// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：s = "()"
// 输出：true

// 输入：s = "()[]{}"
// 输出：true

// 输入：s = "(]"
// 输出：false

// 输入：s = "([)]"
// 输出：false

// 输入：s = "{[]}"
// 输出：true

// 提示：

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2) return false;
  if (s.length === 0) return true;

  const map = {
    "(": ")",
    "[": ']',
    "{": "}"
  }
  let arr = [];
  let keys = Object.keys(map);
  for(let i = 0, len = s.length; i < len; i++) {
    if (keys.includes(s[i])) {
      arr.push(s[i])
    } else {
      if (s[i] !== map[arr[arr.length-1]]) {
        return false
      } else {
        arr.pop();
      }
    }
  }
  if (arr.length) {
    return false
  }
  return true
};

// 改进
var isValid = function(s) {
  const map = {
    "(": ")",
    "[": ']',
    "{": "}"
  }
  let stack = [];
  let value;
  let top = '';
  for(let char of s) {
    if ((value = map[char])) {
      stack.push(value)
    } else {
      top = stack.pop();
      if (top !== char) {
        return false
      }
    }
  }
  return !stack.length
};


console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('{[]}'))
console.log(isValid('([)]'))
console.log(isValid('(]'))