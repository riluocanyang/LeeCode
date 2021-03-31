// 面试题 01.07. 旋转矩阵
// 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。
// 请你设计一种算法，将图像旋转 90 度。

// 不占用额外内存空间能否做到？

// 给定 matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// 给定 matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// 原地旋转输入矩阵，使其变为:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
  let resMatrix = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      resMatrix[i][j] = matrix[n - 1 - j][i]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = resMatrix[i][j]
    }
  }
  // return matrix
};

// 优化
var rotate = function(matrix) {
  const n = matrix.length;
  // 水平旋转

  // for (let i = 0; i < n / 2; i++) {
  //   // for (let j = 0; j < n; j++) {
  //   //   [matrix[i][j], matrix[n - 1 -i][j]] = [matrix[n - 1 - i][j], matrix[i][j]]
  //   // }
  //   // 优化
  //   [matrix[i], matrix[n - 1 - i]] = [matrix[n - i - 1], matrix[i]]
  // }
  // 优化
  matrix.reverse();

  // 主对角线旋转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
}
console.log(rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
))

console.log(rotate([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
))