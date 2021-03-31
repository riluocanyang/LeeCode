// 面试题 01.08. 零矩阵
// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

// 输入：
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// 输出：
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

// 输入：
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// 输出：
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  let len1 = matrix.length, len2 = matrix[0].length, iArr = [], jArr = [];
  for(let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (matrix[i][j] == 0) {
        iArr.push(i);
        jArr.push(j);
      }
    }
  }

  for(let i = 0; i < len1; i++) {
    for(let j = 0; j < len2; j++) {
      if (iArr.includes(i) || jArr.includes(j)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};

// 写法改进Set
var setZeroes = function(matrix) {
  let len1 = matrix.length, 
      len2 = matrix[0].length, 
      rows = new Set(), 
      cols = new Set();
  for(let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (matrix[i][j] == 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  //行清0
  for(let i of rows){
    for(let j = 0 ; j< matrix[i].length; j++){
      matrix[i][j] = 0
    }
  }
  //列清0
  for(let j of cols){
    for(let i = 0 ;i < matrix.length; i++){
      matrix[i][j] = 0
    }
  }

    
}


// console.log(setZeroes([
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]))

console.log(setZeroes([
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]))