
const isValidBST = root => {
    let isValidBSTFlag = true;
    let max = -Number.MAX_VALUE;
    const orderSearch = root => {
        if (root) {
            orderSearch(root.left);
            if (root.val > max) {
                max = root.val;
            } else {
                isValidBSTFlag = false;
            }
            orderSearch(root.right);
        }
    }
    orderSearch(root);
    return isValidBSTFlag;
};

const isValidBST = root => {
    if(!root) return true;
    let stack = [];
    let isValidBSTFlag = true;
    let max = -Number.MAX_VALUE;
    while (1) {
        while(root != null){
            stack.push(root);
            root = root.left;
        }
        if (stack.length === 0) break;
        let node = stack.pop();
        if (node.val > max) {
            max = node.val;
        } else {
            isValidBSTFlag = false;
            break;
        }
        root = node.right;
    }
    return isValidBSTFlag;
}

var root = {
    val: 1,
    left: {
    
        val: 2,
        left: {
            val: 4,
        },
        right:{
            val:5
        }
    },
    right: {
    
        val: 3,
        left: {
            val: 6
        },
        right: {
            val: 7
        }
    }
}

isValidBST(root)