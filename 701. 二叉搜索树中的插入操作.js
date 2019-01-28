/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = (root, val) => {
    let stack = [];
    let r = root;
    let node = null;
    while (1) {
        while(root != null) {
            stack.push(root);
            root = root.left;
        }
        if (stack.length === 0) break;
        node = stack.pop();
        if (node.val > val) {
            let newNode = new TreeNode(val);
            newNode.left = node.left;
            node.left = newNode;
            break;
        }
        root = node.right;
    }
    console.log(node.val);
    if (val > node.val) {
        node.right = new TreeNode(val);
    }
    return r;
};