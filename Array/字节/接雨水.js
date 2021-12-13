// 给定n个非负整数表示宽度为1的柱子的高度图，计算此排列的柱子，下雨之后能接多少雨水。
// 示例1:
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6


// 示例2:
// 输入：height = [4,2,0,3,2,5]
// 输出：9

// 思路：仅仅对于位置i，能装下多少水
// 与左边最高的柱子和右边最高的柱子有关
// left_max right_max 
// 那么i能装下的水是：value[i] = Math.min(left_max, right_max) - height[i]

// 暴力解法 时间：o(N^2) 空间：o(1)
function trap(height = []) {
  if(height.length === 0) return 0
  const n = height.length;
  let res = 0;
  // 左边最高的柱子，从1开始，右边最高的柱子，到n-1
  for (let i = 1; i < n-1; i++) {
    let l_max = 0;
    let r_max = 0;
    for (let j = i; j < n; j++) {
      // 右边最高的柱子
      r_max = Math.max(r_max, height[j])
    }
    for (let j = i ; j >=0; j--) {
      // 找左边最高的柱子
      l_max = Math.max(l_max, height[j])
    }
    res += Math.min(l_max, r_max) - height[i]

  }
  return res;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))


// 优化，计算柱子高度移出去, 时间 O(N), 空间O(N)
function trap2(height = []) {
  if(height.length === 0) return 0
  const n = height.length;
  let res = 0;

  let l_max = new Array(n);  //
  let r_max = new Array(n);

  l_max[0] = height[0];
  r_max[n-1] = height[n-1];

  for (let i = 1; i < n; i++) {
    l_max[i] = Math.max(height[i], l_max[i-1])
  }

  for (let i = n-2; i >= 0; i--) {
    r_max[i] = Math.max(height[i], r_max[i+1])
  }

  for (let i = 1; i < n-1; i++) {
    res += Math.min(l_max[i], r_max[i]) - height[i]
  }
  return res;
}

console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]))

// 优化-双指针
function trap3(height = []) {
  if(height.length === 0) return 0
  const n = height.length;
  let res = 0;

  let left = 0  //
  let right = n-1;

  l_max = height[0];
  r_max = height[n-1];

  while(left <= right) {
    l_max = Math.max(l_max, height[left]);
    r_max = Math.max(r_max, height[right]);

    if (l_max < r_max) {
      res += l_max - height[left];
      left++;
    } else {
      res += r_max - height[right];
      right--;
    }
  }

  return res;
}

console.log(trap3([0,1,0,2,1,0,1,3,2,1,2,1]))
