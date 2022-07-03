/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    if (nums.length < 2) return nums.length;

    let maxLength = 1;
    let prevDiff = nums[1] - nums[0];
    if (prevDiff !== 0) maxLength++;
    for (let i = 2; i < nums.length; i++) {
        if ((prevDiff >= 0 && (nums[i] - nums[i - 1] < 0)) || (prevDiff <= 0 && (nums[i] - nums[i - 1] > 0))) {
            maxLength++;
            prevDiff = nums[i] - nums[i - 1];
        }
    }

    return maxLength;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = wiggleMaxLength([1, 7, 4, 9, 2, 5]); // 6
const test2 = wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]); // 7
const test3 = wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 2
const test4 = wiggleMaxLength([0, 0]); // 1
const test5 = wiggleMaxLength([3, 3, 3, 2, 5]); // 3

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
printOutput(test4);
printOutput(test5);
