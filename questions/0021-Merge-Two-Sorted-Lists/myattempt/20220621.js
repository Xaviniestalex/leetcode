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
    let head = new ListNode();
    let current = head;
    let current1 = list1;
    let current2 = list2;

    while (current1 && current2) {
        if (current1.val < current2.val) {
            current.next = current1; // point new list to this node
            current1 = current1.next; // move ptr of list1
        } else {
            current.next = current2; // point new list to this node
            current2 = current2.next; // move ptr of list2
        }
        current = current.next; // move ptr of new list
    }

    // when one of the lists is reached earlier
    current.next = (current1) ? current1 : current2;

    return head.next;
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = mergeTwoLists([1, 2, 4], [1, 3, 4]); // [1,1,2,3,4,4]
const test2 = mergeTwoLists([], []); // []
const test3 = mergeTwoLists([], [0]); // [0]

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
