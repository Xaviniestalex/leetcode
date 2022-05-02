/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};

/**
 * Complexity Analysis
 * - Time Complexity: O(N)
 * - Space Complexity: O(N)
 */

// tests
const test1 = twoSum(); // 
const test2 = twoSum(); // 
const test3 = twoSum(); // 

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);

/**
 * Take test1 as trial:
 * When i = 0, complement = 9 - 2 = 7, map.set(2, 0) => map = [[0, 2]]
 * When i = 1, complement = 9 - 7 = 2, map.has(2) === true, [map.get(2), 1] => [0, 1]
 */