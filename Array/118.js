// 118 - 杨辉三角（easy）
// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let dp = [];
  for (let i = 0; i < numRows; i++) {
    dp[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
      }
    }
  }  
  return dp  
                                                                                                                                                                                                                                                                                                                                                                                                             
};
console.log(generate(5))




