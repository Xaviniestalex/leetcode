/**
 * Really a genius solution! Here I focused on the iterative one, and I slightly change the naming of variables to make it easier to understand (for newbies like me!).

 * I use three pointers: prevHead, head, recordNext.

 * Basic idea here is that there are always three pointers, which are represented in sequence as prevHead, head, recordNext. Everytime in loop just make head.next points to prevHead, and then move all these three pointers to one next step.

 * Since when we exit the while loop, head is pointing to null, so prevHead points to the end node of original list, and thus we return prevHead.
 */

Since when we exit the while loop, head is pointing to null, so prevHead points to the end node of original list, and thus we return prevHead.

public ListNode reverseList(ListNode head) {
        ListNode prevHead = null;
        while(head != null){
            ListNode recordNext = head.next;
            head.next = prevHead;
            prevHead = head;
            head = recordNext;
        }
        return prevHead;
    }

/**
 * Example: 1 -> 2 -> 3 -> N
 * 
 * Setup: prevHead = null
 * 
 * 1st while loop: recordNext = head.next = 1.next = 2  ---------
 *                 head.next = prevHead = null                  |          
 *                 prevHead = head = 1  ------------------------|---------------
 *                 head = recordNext = 2  <----------------------              |
 * 2nd while loop: recordNext = head.next = 2.next = 3  ---------              |
 *                 head.next = prevHead = 1  <------------------|---------------
 *                 prevHead = head = 2  ------------------------|---------------
 *                 head = recordNext = 3  <----------------------              |
 * 3rd while loop: recordNext = head.next = 3.next = null -------              |
 *                 head.next = prevHead = 2  <------------------|---------------
 *                 prevHead = head = 3                          |
 *                 head = recordNext = null  <-------------------
 * Since head = null, exits while loop.
 * 
 * return prevHead = 3
 */

/**
 *          |  recordNext |  head.next  |     prevHead     |    head 
 * 1st loop | 2 -> 3 -> N |           N |           1 -> N | 2 -> 3 -> N
 * 2nd loop |      3 -> N |      1 -> N |      2 -> 1 -> N |      3 -> N
 * 3rd loop |           N | 2 -> 1 -> N | 3 -> 2 -> 1 -> N |           N
 */