// 14- 最长公共前缀（easy）

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

// 提示：

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let comStr = '';
  let curStr = strs[0], flag = true
  for(let i = 0, len = curStr.length; i < len; i++) {
    for(let j = 1, sLen = strs.length; j < sLen; j++) {
      if (curStr[i] !== strs[j][i]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      comStr += curStr[i]
    } else {
      break;
    }
  }
  return comStr;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))