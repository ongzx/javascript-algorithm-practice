/**
 * Simplified version of binary tree
 * @param {*} r 
 */
var BinaryTree = (function(r) {
    return [r, [], []];
})

function insertLeft(root, newBranch) {
    let t = root[1];
    if (t.length > 1) {
        root[1] = [newBranch, t, []]
    } else {
        root[1] = [newBranch, [],[]]
    }
    return root[1]
}

function insertRight(root, newBranch) {
    let t = root[2]
    if (t.length > 1) {
        root[2] = [newBranch, [], t]
    } else {
        root[2] = [newBranch, [], []]
    }
    return root[2]
}

function getLeftChild(root) {
    return root[1]
}

function getRightChild(root) {
    return root[2]
}

function getRootVal(root) {
    return root[0]
}

