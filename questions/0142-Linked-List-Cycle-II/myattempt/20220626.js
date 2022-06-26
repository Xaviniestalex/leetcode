/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // Step 1: determine whether there is more than one node in the linked list
    if (head === null || head.next === null) return null;

    // Step 2: determine whether there is a cycle in the linked list
    let hasCycle = false;
    let slowptr = head;
    let fastptr = head;

    while (slowptr !== null && fastptr !== null) {
        if (fastptr.next === null) return null;
        slowptr = slowptr.next;
        fastptr = fastptr.next.next;
        if (slowptr === fastptr) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return null;

    // Step 3: calculate the index of the entry node
    slowptr = head; // reset one of the pointers
    while (slowptr !== fastptr) {
        slowptr = slowptr.next;
        fastptr = fastptr.next;
    }
    return slowptr;
};

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests can only be executed easily in LeetCode
const test1 = detectCycle(); // 
const test2 = detectCycle(); // 
const test3 = detectCycle(); // 

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);

/**
 * Remark 1: 
 * ```
 * while (slowptr !== null && fastptr !== null) {
 *     if (fastptr.next === null) return null;
 *     // ...
 * ```
 * `slowptr !== null` is duplicated condition checking;
 * `fastptr.next === null` could move to while loop condition checking;
 * The whole while loop could be extracted as another function
 */