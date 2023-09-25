/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // предыдущий ставим на нулл
    let prev = null;
    // чтобы не было destructive
    let current = head;
    // проходимся по current
    while (current !== null) {
        const nextNode = current.next;
        // с помощью этих строк инвертируем, делаем следующий узел для начала нулл (так как это будет конечный узел)
        current.next = prev;
        // потом каждый следующий узел есть текущий узел, но со значением
        // prev.next предыдущего, то есть по сути идём с head'а до tail'а
        // и постоянно обновляем.
        prev = current;
        current = nextNode;
    }
    return prev;
};