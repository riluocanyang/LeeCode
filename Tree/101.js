// 101-对称二叉树(easy)

// 给定一个二叉树，检查它是否是镜像对称的。
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
// 1
// / \
// 2   2
// \   \
// 3    3

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function isSame(p, q) {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    if (p.val !== q.val) return false;
    return isSame(p.right, q.left) && isSame(p.left, q.right)
  }
  return isSame(root.left, root.right)
};