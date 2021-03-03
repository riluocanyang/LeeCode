// 69-x 的平方根（easy）

// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。


// 输入: 4
// 输出: 2

// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 
//      由于返回类型是整数，小数部分将被舍去。

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 超时了！！！
  let a = Math.ceil(x / 2);
  for(let i = a; a >=0; i--) {
    if (i * i <= x){
      return i
    }
  }
};

var mySqrt = function(x) {
  // 这方法有点鸡贼啦！！！
  return Math.floor(Math.sqrt(x))
}

var mySqrt = function(x) {
  // 0,1 的平方根为它自己
  if (x < 2) return x
  let l = 1, r = x >>> 1, mid = 1;
  while(l <= r) {
    // 一定要加括号，+运算符优先级高于>>>
    mid = l + ((r -l) >>> 1);
    if (mid ** 2 < x) {
      l = mid + 1
    } else if (mid ** 2 > x) {
      r = mid - 1
    } else {
      return mid
    }
  }
  return r
}


// 牛顿迭代，数学方法
var mySqrt = function(x) {
  // 公式 r = ( r + x / r ) / 2
  let r = x;
  while (r ** 2 > x) r = ((r + x / r) / 2) | 0
  return r
}
// console.log(mySqrt(8))
console.log(mySqrt(4))