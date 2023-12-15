/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = function(root) {
    if (root.left === null && root.right === null) return root;

    queue = [root];
    while (queue.length !== 0) {
        const currentRoot = queue.shift();
        if (currentRoot.left !== null) {
            queue.push(currentRoot.left);
        }
        if (currentRoot.right !== null) {
            queue.push(currentRoot.right)
        }
        const temp = currentRoot.left;
        currentRoot.left = currentRoot.right;
        currentRoot.right = temp;

    }


    return root;
};