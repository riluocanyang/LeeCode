// 111 - 二叉树的最小深度（easy）
// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：2

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) {
    return 1;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  if (root.left !== null) {
    ans = Math.min(minDepth(root.left), ans)
  }
  if (root.right !== null) {
    ans = Math.min(minDepth(root.right), ans)
  }
  return ans + 1;
};

// 
var minDepth = function(root) {
  if(!root) return 0; //空节点直接返回0
  let getMinHeight = r => {
      if(!r) return Number.MAX_VALUE; //这里为啥要用 Number.MAX_VALUE？因为这样才能与Math.min另一个参数作比较得出最小值
      if(!r.left && !r.right) return 1 //叶子节点深度为1
      let left = getMinHeight(r.left); //常规操作，见解题思路
      let right = getMinHeight(r.right); // 常规操作，见解题思路
      return Math.min(left,right) + 1; // 常规操作，见解题思路
  }
  return getMinHeight(root);
}
