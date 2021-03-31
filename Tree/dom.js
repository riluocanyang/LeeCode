//  假设dom树
{/* <html>
  <body>
    <div class="parent">
      <div class="child-1">
        <div class="child-1-1">
          <div class="child-1-1-1">a</div>
        </div>
        <div class="child-1-2">
          <div class="child-1-2-1">b</div>
        </div>
        <div class="child-1-3">
          c
        </div>
      </div>
      <div class="child-2">
        <div class="child-2-1">
          d
        </div>
        <div class="child-2-2">
          e
        </div>
      </div>
      <div class="child-3">
        <div class="child-3-1">
          f
        </div>
      </div>
    </div>
  </body>
</html> */}

// 我将用深度优先遍历和广度优先遍历对这个dom树进行查找
// 深度优先遍历
// 深度优先遍历DFS 与树的先序遍历比较类似。
// 假设初始状态是图中所有顶点均未被访问，则从某个顶点v出发，
// 首先访问该顶点然后依次从它的各个未被访问的邻接点出发深度优先搜索遍历图，
// 直至图中所有和v有路径相通的顶点都被访问到。
// 若此时尚有其他顶点未被访问到，
// 则另选一个未被访问的顶点作起始点，
// 重复上述过程，直至图中所有顶点都被访问到为止。
let domTree = {
  node: 'a',
  children: [
    {
      children: [
        {

        }
      ]
    }
  ]
}
// 深度优先遍历方法1
let deepTraversal1 = (node, nodeList = []) => {
  if (node !== null) {
    nodeList.push(node)
    let children = node.children;
    for(let i = 0; i < children.length; i++) {
      deepTraversal1(children[i], nodeList)
    }
  }
  return nodeList
}

// 深度优先遍历方法2
let deepTraversal2 = (node) => {
  let nodes = [];
  if (node !== null) {
    nodes.push(node)
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
      // concat 可以链式调用，返回一个新的数组, 不改变新的数组
      // [1].concat([2,3]).concat([4,5])  // [1,2,3,4,5]
      // nodes.concat(child[0]).concat(child[1]).concat(child[2])
      nodes = nodes.concat(deepTraversal2(children[i]))
    }

  }
  return nodes
}

// 深度优先遍历方法3 非递归
let deepTraversal3 = (node) => {
  let stack = [], nodes = [];
  if (node) {
    stack.push(node)
    while(stack.length) {
      let item = stack.pop();
      let children = item.children
      nodes.push(item)
      // 栈，先进后出 数组倒序入栈，保证栈顶为执行元素（先处理完左边的，在处理其他的）
      // nodes = [] stack = [parent]
      // nodes = [parent] stack = [child3, child2, child1]
      // nodes = [parent, child1] stack = [child3, child2, child1-2, child1-1]
      for (let i = children.length-1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return nodes
}

// 广度优先遍历 - BFS
let widthTraversal2 = (node) => {
  let nodes = [], queue = [];
  if (node) {
    queue.push(node);
    while(queue.length) {
      let item = queue.shift();
      let children = item.children;
      nodes.push(item);
      // 队列 先进先出
      // nodes = [] queue = [parent]
      // nodes = [parent] queue = [child1, child2, child3]
      // nodes = [parent, child1]  queue = [child2, child3, child1-2, child2-1]
      for(let i = 0; i < children.length; i++) {
        queue.push(children[i])
      }
    }
  }
  return nodes
}

