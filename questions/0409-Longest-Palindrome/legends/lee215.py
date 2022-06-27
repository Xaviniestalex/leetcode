# https://leetcode.com/problems/longest-palindrome/discuss/89587/What-are-the-odds-(Python-and-C%2B%2B)

# I made it 1-linear:

# Count odds:

import collections


def longestPalindrome(self, s):
    return len(s) - max(sum(v & 1 for v in collections.Counter(s).values()) - 1, 0)

# Count evens:


def longestPalindrome(self, s):
    return min(sum(v & ~1 for v in collections.Counter(s).values()) + 1, len(s))
