// 200. 岛屿数量
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。
// 示例 1：

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1


// 示例 2：

// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3



/**
 * @param {character[][]} grid
 * @return {number}
 */
// DFS
var numIslands = function(grid) {
  let res = 0;
  let rows = grid.length;
  if (rows === 0) return 0;
  let cols = grid[0].length;
  const helper = (grid, i, j, rows, cols) => {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols  -1 || grid[i][j] == '0') {
      return
    }
    grid[i][j] = '0';
    helper(grid, i+1, j, rows, cols)
    helper(grid, i, j+1, rows, cols)
    helper(grid, i-1, j, rows, cols)
    helper(grid, i, j-1, rows, cols)
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        helper(grid, i, j, rows, cols);
        res++;
      }
      
    }
  }
  return res

};

// BFS
var numIslands = function(grid) {
  let res = 0;
  let queue = [];
  let rows = grid.length;
  if (rows === 0) return 0
  let cols = grid[0].length;
  const helper = (grid, queue, rows, cols) => {
    const dirs = [[0,1], [1,0], [0, -1], [-1,0]]
    while(queue.length) {
      const cur = queue.shift()
      for (let dir of dirs) {
        const x = cur[0] + dir[0]
        const y = cur[1] + dir[1]
        if (x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] === '0' ) {
          continue
        }
        grid[x][y] = '0'
        queue.push([x,y])
      }
    }
  }
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if(grid[i][j] === '1') {
        res++;
        grid[i][j] = '0'
        queue.push([i, j])
        helper(grid, queue, rows, cols)
      }
    }
  }
  return res
}
