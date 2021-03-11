// 119 - 杨辉三角 II （easy）
// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
// 输入: 3
// 输出: [1,3,3,1]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// 此方法超时
 var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1,1]
  let dp = Array(rowIndex)
  dp[rowIndex] = [], dp[rowIndex][0] = 1, dp[rowIndex][rowIndex] = 1;

  function getVal(i, j) {
    dp[i] = []
    if (i == 0 || i == 1 || j == 0 || i == j )  { 
      dp[i][j] =  1 
    } else {
      dp[i][j] = getVal(i - 1, j-1) + getVal(i - 1, j)
    }
    return dp[i][j]
  }
  for (let i = 1; i < rowIndex; i++) {
    // dp[rowIndex-2][i-1] = getVal(rowIndex-2, i-1);
    // dpdp[rowIndex-2][i] = getVal(rowIndex-2, i);
    dp[rowIndex][i] = getVal(rowIndex-1, i-1) + getVal(rowIndex-1, i)
  } 
  return dp[rowIndex]  
};

var getRow = function(rowIndex) {
  let dp = [];
  for (let i = 0; i <= rowIndex; i++) {
    dp[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
      }
    }
  }  
  return dp[rowIndex]  
}
console.log(getRow(3))
