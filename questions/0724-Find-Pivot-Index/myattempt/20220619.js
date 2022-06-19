/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((partialSum, a) => partialSum + a, 0) - nums[0];
    if (leftSum === rightSum) return 0;
    for (i = 1; i < nums.length; i++) {
        leftSum += nums[i - 1];
        rightSum -= nums[i];
        if (leftSum === rightSum) return i;
    }
    return -1;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = pivotIndex([1, 7, 3, 6, 5, 6]); // 3
const test2 = pivotIndex([1, 2, 3]); // -1
const test3 = pivotIndex([2, 1, -1]); // 0
const test4 = pivotIndex([-1, -1, 0, 1, 1, 0]); // 5

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
printOutput(test4);
