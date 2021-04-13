// 557. 反转字符串中的单词 III
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
};

// 
var reverseWords = function(s) {
  let arr = s.split(''), l = 0, r = l;
  while(r < arr.length) {
    while (arr[r] && arr[r] !== ' ') {
      r++
    }
    for(let i = l, j = r -1; i < j; i++, j--) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    l = r + 1;
    r = l;

  }
  return arr.join('')
};
console.log(reverseWords("Let's take LeetCode contest"))