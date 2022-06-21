/**
 * Singly-linked list =/= Array
 * Wrong understanding on question
 */

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
    // edge cases
    if (list1.length === 0) return list2;
    if (list2.length === 0) return list1;

    // create pointers
    let pointer1 = 0;
    let pointer2 = 0;

    // create sorted list
    let sortedList = [];

    // move pointer when a node is selected
    while (pointer1 < list1.length && pointer2 < list2.length) {
        if (list1[pointer1] <= list2[pointer2]) {
            sortedList.push(list1[pointer1]);
            pointer1++;
        }
        else {
            sortedList.push(list2[pointer2]);
            pointer2++;
        }
    }

    // insert remaining nodes into sorted list
    while (pointer1 < list1.length) {
        sortedList.push(list1[pointer1]);
        pointer1++;
    }
    while (pointer2 < list2.length) {
        sortedList.push(list2[pointer2]);
        pointer2++;
    }

    return sortedList;
};

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
