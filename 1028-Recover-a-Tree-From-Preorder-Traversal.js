/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    var key = [];
    traversal.split('-').map(function(a){if(a != '') key.push(a);});
    var node_count = key.length;
    var depth = [0];
    var traversal_len = traversal.length;
    for(var i = 1, tmp_depth = 0; i < traversal_len; i++){
        if(traversal[i] == '-'){
            tmp_depth++;
        }
        else{
            if(tmp_depth != 0){
                depth.push(tmp_depth);
                tmp_depth = 0;
            }
        }
    }
    //console.log(key);
    //console.log(depth);
    return dfs(0, node_count - 1);
    function dfs(start, end){
        if(start > end){
            return null;
        }
        if(start == end){
            return new TreeNode(key[start]);
        }
        var mid = start + 1;
        while(1){
            mid++;
            if(mid == end + 1 || depth[mid] == depth[start + 1]){
                mid--;
                break;
            }
        }
        var root = new TreeNode(key[start]);
        //console.log(mid);
        root.left = dfs(start + 1, mid);
        root.right = dfs(mid + 1, end);
        return root;
    }
};