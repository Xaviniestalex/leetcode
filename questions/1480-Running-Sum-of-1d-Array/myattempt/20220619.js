/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    if (nums.length === 1) return [nums[0]];
    let runningSum = [nums[0]];
    for (i = 1; i < nums.length; i++) {
        runningSum.push(nums[i] + runningSum[i - 1]);
    }
    return runningSum;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = runningSum([1, 2, 3, 4]); // [1,3,6,10]
const test2 = runningSum([1, 1, 1, 1, 1]); // [1,2,3,4,5]
const test3 = runningSum([3, 1, 2, 10, 1]); // [3,4,6,16,17]

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
