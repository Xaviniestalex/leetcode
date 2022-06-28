/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (root === null) return [];

    let arr = [];
    traversal(root, arr);
    return arr;
};

const traversal = function (root, arr) {
    arr.push(root.val);

    if (!root.children) return arr;

    for (let i = 0; i < root.children.length; i++) {
        traversal(root.children[i], arr)
    }
    return arr;
}

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = preorder([1, null, 3, 2, 4, null, 5, 6]); // [1,3,5,6,2,4]
const test2 = preorder([1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]); // [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
const test3 = preorder([1, null, 10, 3, null, 5, 0, null, 6]); // [1,10,5,0,3,6]

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
