// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val < list2.val) {
    ListNode nextList1 = list1.next;
    ListNode nextElement = mergeTwoLists(nextList1, list2);
    list1.next = nextElement;
    return list1;
  } else {
    ListNode nextList2 = list2.next;
    ListNode nextElement = mergeTwoLists(list1, nextList2);
    list2.next = nextElement;
    return list2;
  }
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
