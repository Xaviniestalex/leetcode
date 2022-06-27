# I count how many letters appear an odd number of times. Because we can use all letters, except for each odd-count letter we must leave one, except one of them we can use.

import collections


def longestPalindrome(self, s):
    odds = sum(v & 1 for v in collections.Counter(s).values())
    return len(s) - odds + bool(odds)
