// 58-最后一个单词的长度（easy）

// 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。
// 如果不存在最后一个单词，请返回 0 。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 输入：s = "Hello World"
// 输出：5

// 输入：s = " "
// 输出：0

// 提示：

// 1 <= s.length <= 104
// s 仅有英文字母和空格 ' ' 组成

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let trimS = s.trim();
  if (!trimS.length) return 0;
  let arrS = trimS.split(' ');
  return arrS[arrS.length-1].length;

};

var lengthOfLastWord = function(s) {
  var a = s.match(/[A-Za-z]+/g);
  return a == null ? 0 : a[a.length-1].length;
}

var lengthOfLastWord = function(s) {
  let  end  = s.length - 1;
  while(end >= 0 && s[end] == ' ') end--;
  if (end < 0) return 0;
  let start = end;
  while(start >= 0 && s[start] !== ' ') start--;
  return end - start;
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord(" "))