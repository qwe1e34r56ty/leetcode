/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function recursion(root, arr){
    if(root == null){
        return;
    }
    arr.push(root);
    if(root.left != null){
        recursion(root.left, arr);
    }
    else{
        arr.push(null);
    }
    if(root.right != null){
        recursion(root.right, arr);
    }
    else{
        arr.push(null);
    }
}

var isSameTree = function(p, q) {
    var first = [];
    var second = [];
    recursion(p, first);
    recursion(q, second);
    if(first.length != second.length){
        return false;
    }
    for(var i = 0; i < first.length; i++){
        if(first[i] != null){
            if(second[i] == null){
                return false;
            }
            else{
                if(first[i].val != second[i].val){
                    return false;
                }
            }
        }
        else{
            if(second[i] != null){
                return false;
            }
        }
    }
    return true;
};