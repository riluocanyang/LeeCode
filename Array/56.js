// 56 - 合并区间 （mid）

// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。


// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].


// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 此方法不行
var merge = function(intervals) {
  for (let i = 0; i < intervals.length - 1; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if ((intervals[j][0] <= intervals[i][1] && intervals[j][0] >= intervals[i][0]) || intervals[j][0] < intervals[i][0]) {
        intervals[i][0] = Math.min(intervals[j][0], intervals[i][0])
        intervals[i][1] = Math.max(intervals[j][1], intervals[i][1])
        intervals[j] = 0
      }
    }
  }

  intervals = intervals.filter(item => Array.isArray(item))
  return intervals
};

var merge = function(intervals) {
  if (intervals.length == 0) return []
  let res = [];
  intervals = intervals.sort((a, b) => a[0] - b[0])
  res.push(intervals[0])
  for (let i = 1, len = intervals.length; i < len; i++) {
    if (intervals[i][0] > res[res.length-1][1]) {
      res.push(intervals[i])
    } else {
      if (intervals[i][1] > res[res.length -1][1]) {
        res[res.length-1][1] = intervals[i][1]
      }
    }
  }
  return res

}

console.log(merge([[1,3],[2,6],[8,10],[15,18], [4, 8]]))
