/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    translation = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let integer = 0;

    for (let i = 0; i < s.length; i++) {
        (translation[s[i]] < translation[s[i + 1]] && s[i + 1]) ? integer -= translation[s[i]] : integer += translation[s[i]]
    }

    return integer;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = romanToInt("III"); // 3
const test2 = romanToInt("LVIII"); // 58 
const test3 = romanToInt("MCMXCIV"); // 1994

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);

/**
 * Take test3 as trial:
 * When i = 0, (translation[s[i]] = 1000, translation[s[i+1]] = 100) => integer += 1000
 * When i = 1, (translation[s[i]] = 100, translation[s[i+1]] = 1000) => integer -= 100
 * When i = 2, (translation[s[i]] = 1000, translation[s[i+1]] = 10) => integer += 1000
 * When i = 3, (translation[s[i]] = 10, translation[s[i+1]] = 100) => integer -= 10
 * When i = 4, (translation[s[i]] = 100, translation[s[i+1]] = 1) => integer += 100
 * When i = 5, (translation[s[i]] = 1, translation[s[i+1]] = 5) => integer -= 1
 * When i = 6, (translation[s[i]] = 5, translation[s[i+1]] = undefined) => integer += 5
 * Thus, integer = 0 + 1000 - 100 + 1000 - 10 + 100 - 1 + 5 = 1994
 */