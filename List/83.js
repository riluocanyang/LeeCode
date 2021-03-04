// 83 - 删除排序链表中的重复元素（easy）

// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 输入: 1->1->2
// 输出: 1->2

// 输入: 1->1->2->3->3
// 输出: 1->2->3

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // newList = head, 更改其中一个指针，整个链表都会更改
 // 所以只需要更改其中一个即可，另一个保持在头部
var deleteDuplicates = function(head) {
  let arr = [], newList = head, p = null;
    while(newList) {
      if (!arr.includes(newList.val)) { //  不相等
        arr.push(newList.val);
        p = newList;
        newList = newList.next;
      } else {
        newList = newList.next;
        p.next = newList
      }
      
    }
    return head
};

// 改进
//  排序列表说明是有序的
var deleteDuplicates = function(head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head
}

// 不一个一个删，
var deleteDuplicates = function(head) {
  if (head == null) return head;
  let slow = head, fast = head;
  while(fast !== null) {
    if (slow.val == fast.val) {
      fast = fast.next
    } else {
      slow.next = fast;
      slow = fast;
      fast = fast.next;
    }
  }
  slow.next = null;
  return head;
}

console.log(deleteDuplicates([1,1,2]))