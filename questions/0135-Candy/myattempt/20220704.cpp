#include <iostream>
#include <vector>

using namespace std;
using std::vector;

class Solution
{
public:
    int candy(vector<int> &ratings)
    {
        int size = ratings.size();
        if (size <= 1)
            return size;

        vector<int> num(size, 1);
        // compare with their LEFT neighbors (also take care of last element)
        for (int i = 1; i < size; i++)
        {
            if (ratings[i] > ratings[i - 1])
                num[i] = num[i - 1] + 1;
        }
        // compare with their RIGHT neighbors (also take care of first element)
        for (int i = size - 1; i > 0; i--)
        {
            if (ratings[i - 1] > ratings[i])
                num[i - 1] = max(num[i] + 1, num[i - 1]);
        }

        int result = 0;
        for (int i = 0; i < size; i++)
        {
            result += num[i];
            // cout<<num[i]<<" ";
        }
        return result;
    }
};

/**
 * Complexity Analysis
 * - Time Complexity: O(N)
 * - Space Complexity: O(N)
 */
