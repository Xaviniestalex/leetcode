# Each time, slow go 1 steps while fast go 2 steps.
# When fast arrives at the end, slow will arrive right in the middle.

# Python:

def middleNode(self, head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
