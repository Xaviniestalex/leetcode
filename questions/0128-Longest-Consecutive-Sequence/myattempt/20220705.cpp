#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;
using std::vector;

class Solution
{
public:
    int longestConsecutive(vector<int> &nums)
    {
        unordered_set<int> hashSet;
        for (auto n : nums)
        {
            hashSet.insert(n);
        }
        int maxLength = 0;
        for (auto n : hashSet)
        {
            if (hashSet.find(n - 1) == hashSet.end())
            {
                int x = n + 1;
                while (hashSet.find(x) != hashSet.end())
                {
                    x++;
                }
                maxLength = max(maxLength, x - n);
            }
        }
        return maxLength;
    };
};

/**
 * Complexity Analysis
 * - Time Complexity: O(N)
 * - Space Complexity: O(N)
 */
