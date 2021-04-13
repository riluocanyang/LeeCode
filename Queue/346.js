// 346. 数据流中的移动平均值
// 题目描述:
// 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算其所有整数的移动平均值。

// 示例:
// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3


// java版本
// class MovingAverage {  
//   int size//窗口大小  
//   int windowSum = 0//窗口和  
//   int count = 0;//添加数字的次数  
//   Deque queue = new ArrayDeque<Integer>();  
    
//   public MovingAverage(int size) {  
//     this.size = size;  
//   }  
    
//   public double next(int val) {  
//     ++count;  
//     // calculate the new sum by shifting the window  
//     queue.add(val);  
//     //看有没有过期的数字（最左边）  
//     int tail = count > size ? (int)queue.poll() : 0;  
//     //更新窗口和  
//     windowSum = windowSum - tail + val;  
      
//       return windowSum * 1.0 / Math.min(size, count);  
//     }  
//   }  
  /** 
  * Your MovingAverage object will be instantiated and called as such: 
  * MovingAverage obj = new MovingAverage(size); 
  * double param_1 = obj.next(val); 
  */  


  // js版本
let MovingAverage = function(length){
    let arr = [];

    this.next = function(num){
        if(length === 0) return;
        if(arr.length >= length){
            arr.shift();
        }
        arr.push(num);
        let sum = arr.reduce(function(prev, cur){
            return prev + cur;
        }, 0)
        return parseInt(sum / arr.length)
    }
}