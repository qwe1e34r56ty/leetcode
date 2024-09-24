/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var ret = "";
    var queue = [];
    queue.push(root);
    for(;queue.length != 0;){
        bfs(queue.shift());
    }
    return ret;
    function bfs(root){
        if(root == null){
            ret += ",10000";
        }
        else{
            ret += "," + root.val;
            queue.push(root.left);
            queue.push(root.right);
        }
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',');
    data.shift();
    var Node = data.map(
        function(str){
            if(str == "10000"){
                return null;
            }
            return parseInt(str);
        })
    if(Node[0] == null){
        return null;
    }
    var root = new TreeNode(Node.shift());
    var queue = [];
    queue.push(root);
    var cur;
    for(;queue.length != 0;){
        cur = queue.shift();
        if(cur == null){
            continue;
        }
        var tmp = Node.shift();
        if(tmp != null){
            cur.left = new TreeNode(tmp);
            queue.push(cur.left);
        }
        tmp = Node.shift();
        if(tmp != null){   
            cur.right = new TreeNode(tmp);
            queue.push(cur.right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */