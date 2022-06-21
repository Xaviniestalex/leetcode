def isSubsequence(self, s, t):
    t = iter(t)
    return all(c in t for c in s)

# Just testing whether all characters in s are also in t (in order).

# Takes O(|s| + |t|) time and O(1) space.

# Based on falsetru's code on StackOverflow which I improved a while ago, see here.

# It works the same as this, in case you prefer that style:


def isSubsequence(self, s, t):
    remainder_of_t = iter(t)
    for letter in s:
        if letter not in remainder_of_t:
            return False
    return True
