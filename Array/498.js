// 498 - 对角线遍历
// 给定一个含有 M x N 个元素的矩阵（M 行，N 列），
// 请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]

// 输出:  [1,2,4,7,5,3,6,8,9]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (matrix.length < 1) return [];
  let res = [],
      flag = true,  // true 右上 false 左下
      i = j = 0,
      n = matrix.length,
      m = matrix[0].length;
  while(i < n && j < m) {
    res.push(matrix[i][j])
    if (flag) {
      i -= 1;
      j += 1;
    } else {
      i += 1;
      j -= 1;
    }
    // 处理临界值
    if (i < 0 || j < 0 || i == n || j == m) {
      if (flag) {
        if (i < 0 && j < m) i = 0
        else {
          i += 2;
          j -= 1;
        }
      } else {
        if (j < 0 && i < n) j = 0
        else {
          i -= 1;
          j += 2
        } 
      }
      flag = !flag;
    }
  }
  return res;
};

console.log(findDiagonalOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]))


 // 解题思路：
//  由观察可以得知，一共有两种走法，向右上方走和向左下方走。

// 再由二维数组的特性可以得知，向右上方走实际上等于 x -= 1, y += 1, 
// 向左下方走实际上等于 x+= 1, y -= 1

// 当向右上方走的时候，有两种情况会造成碰壁，因而需要转弯，
//    CASE 1: 碰到上方的壁 (x无法再 - 1),但还没碰到右方的壁（y可以 +1）
//               在这种情况下，下一步的坐标为 y += 1, 比如图里的 1 --> 2
//    CASE 2: 碰到右方的壁 (y无法再 +1)
//               在这种情况下, 下一步的坐标为 x += 1, 比如图里的 3 --> 6
// 向左下方走同理：
//    CASE 1: 碰到左方的壁 (y无法再 -1), 但还没有碰到下方的壁(x可以 +1)
// 在这种情况下,下一步的坐标为 x += 1, 比如图里的 4 --> 7
//    CSSE 2: 碰到下方的壁 (x无法再 +1)
// 在这种情况下,下一步的坐标为 y += 1, 比如图里的 8 --> 9
