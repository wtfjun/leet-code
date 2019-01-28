const recoverTree = root => {
    let res = [];
    let s1 = s2 = null;
    const orderSearch = root => {
        if (root) {
            orderSearch(root.left);
            if (res.length !== 0) {
                if (res[res.length - 1].val > root.val) {
                    !s1 && (s1 = res[res.length - 1]);
                    s2 = root;
                }
            }
            
            res.push(root)
            orderSearch(root.right);
        }
    }
    orderSearch(root);
    [s1.val, s2.val] = [s2.val, s1.val];
    // console.log(s1, s2)
    return root;
};

recoverTree(root);