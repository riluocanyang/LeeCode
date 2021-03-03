// 67-二进制求和(easy)

// 给你两个二进制字符串，返回它们的和（用二进制表示）。

// 输入为 非空 字符串且只包含数字 1 和 0。

// 输入: a = "11", b = "1"
// 输出: "100"

// 输入: a = "1010", b = "1011"
// 输出: "10101"

// 提示：

// 每个字符串仅由字符 '0' 或 '1' 组成。
// 1 <= a.length, b.length <= 10^4
// 字符串如果不是 "0" ，就都不含前导零。

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // 转换为十进制进行计算，再将结果转换为二进制返回。会产生溢出
  // 所以测试用例不能100%通过
  let numA = parseInt(a,2);
  let numB = parseInt(b,2);
  return (numA + numB).toString(2)
};

//  改进，使用BigInt方法
var addBinary = function(a, b) {
  let numA = BigInt("0b"+a);
  let numB = BigInt("0b"+b);
  return (numA + numB).toString(2)
};


// 改进，其实就相当于计算加法，是否有进位
var addBinary = function(a, b) {
  let ans = "";
  let ca = 0;
  for (let i = a.length -1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    sum = ca;
    // sum += (i >= 0 ? parseInt(a[i]) : 0);
    // sum += (j >= 0 ? parseInt(b[j]) : 0);
    sum += i >= 0 ? parseInt(a[i]) : 0;
    sum += j >= 0 ? parseInt(b[j]) : 0;
    ans += sum % 2;
    ca = Math.floor(sum / 2);
  }
  ans += ca === 1 ? ca : '';
  return ans.split('').reverse().join('');
}

console.log(addBinary("11", "1"))
// console.log(addBinary("1010", "1011"))
// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))
