// 286.墙与门

// 你被给定一个 m × n 的二维网格，网格中有以下三种可能的初始化值：

// -1 表示墙或是障碍物
// 0 表示一扇门
// INF 无限表示一个空的房间。然后，我们用 231 - 1 = 2147483647 代表 INF。
// 你可以认为通往门的距离总是小于 2147483647 的。
// 你要给每个空房间位上填上该房间到 最近 门的距离，如果无法到达门，则填 INF 即可。

// 示例：

// 给定二维网格：

// INF  -1  0  INF
// INF INF INF  -1
// INF  -1 INF  -1
//   0  -1 INF INF

// 运行完你的函数后，该网格应该变成：

// 3  -1   0   1
// 2   2   1  -1
// 1  -1   2  -1
// 0  -1   3   4

// 思路
// 从门开始宽度优先搜索，环一层一层扩散，能被门的光环覆盖到的时候，就是距离门的最短距离。

// 这非常直接。

// 前面写题快有一种思维定式是，只有DFS才有上下左右四个探索，其实BFS也一样可以有递归的写法。

// 要灵活掌握算法背后的思想。本题用BFS的解法是最简单易懂的。

// 那么下面我们再来看BFS的解法，却要借助queue，
// 我们首先把门的位置都排入queue中，然后开始循环，
// 对于门位置的四个相邻点，我们判断其是否在矩阵范围内，并且位置值是否大于上一位置的值加1，
// 如果满足这些条件，我们将当前位置赋为上一位置加1，并将次位置排入queue中，
// 这样等queue中的元素遍历完了，所有位置的值就被正确地更新了，参见代码如下：

// java版本
// BFS
// class Solution {
//   public:
//       void wallsAndGates(vector<vector<int>>& rooms) {
//           queue<pair<int, int>> q;
//           vector<vector<int>> dirs{{0, -1}, {-1, 0}, {0, 1}, {1, 0}};
//           for (int i = 0; i < rooms.size(); ++i) {
//               for (int j = 0; j < rooms[i].size(); ++j) {
//                   if (rooms[i][j] == 0) q.push({i, j});   
//               }
//           }
//           while (!q.empty()) {
//               int i = q.front().first, j = q.front().second; q.pop();
//               for (int k = 0; k < dirs.size(); ++k) {
//                   int x = i + dirs[k][0], y = j + dirs[k][1];
//                   if (x < 0 || x >= rooms.size() || y < 0 || y >= rooms[0].size() || rooms[x][y] < rooms[i][j] + 1) continue;
//                   rooms[x][y] = rooms[i][j] + 1;
//                   q.push({x, y});
//               }
//           }
//       }
//   };