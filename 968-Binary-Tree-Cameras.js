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
 * @return {number}
 */
var minCameraCover = function(root) {
    dfs(root);
    return Math.min(root.camera, root.non_camera_non_cloak);
    function dfs(root){
        if(root == undefined){
            return;
        }
        dfs(root.left);
        dfs(root.right);
        root.camera = Infinity;
        root.non_camera_cloak = Infinity;
        root.non_camera_non_cloak = Infinity;
        if(root.right == undefined && root.left == undefined){
            root.camera = 1;
            root.non_camera_cloak = 0;
            root.non_camera_non_cloack = Infinity;
        }
        else if(root.right != undefined && root.left != undefined){
            root.camera = Math.min(root.camera, root.left.non_camera_cloak + root.right.non_camera_cloak + 1);
            root.camera = Math.min(root.camera, root.left.non_camera_cloak + root.right.non_camera_non_cloak + 1);
            root.camera = Math.min(root.camera, root.left.non_camera_cloak + root.right.camera + 1);
            root.camera = Math.min(root.camera, root.left.non_camera_non_cloak + root.right.non_camera_cloak + 1);
            root.camera = Math.min(root.camera, root.left.non_camera_non_cloak + root.right.non_camera_non_cloak + 1);
            root.camera = Math.min(root.camera, root.left.non_camera_non_cloak + root.right.camera + 1);
            root.camera = Math.min(root.camera, root.left.camera + root.right.non_camera_cloak + 1);
            root.camera = Math.min(root.camera, root.left.camera + root.right.non_camera_non_cloak + 1);
            root.camera = Math.min(root.camera, root.left.camera + root.right.camera + 1);        
            root.non_camera_cloak = Math.min(root.non_camera_cloak, root.left.non_camera_non_cloak + root.right.non_camera_non_cloak);           
            root.non_camera_non_cloak = Math.min(root.non_camera_non_cloak, root.left.non_camera_non_cloak + root.right.camera);
            root.non_camera_non_cloak = Math.min(root.non_camera_non_cloak, root.left.camera + root.right.non_camera_non_cloak);
            root.non_camera_non_cloak = Math.min(root.non_camera_non_cloak, root.left.camera + root.right.camera);
        }
        else if(root.right != undefined && root.left == undefined){
            root.camera = Math.min(root.camera, root.right.non_camera_cloak + 1);
            root.camera = Math.min(root.camera, root.right.non_camera_non_cloak + 1);
            root.non_camera_cloak = Math.min(root.non_camera_cloak, root.right.non_camera_non_cloak);
            root.non_camera_non_cloak = Math.min(root.non_camera_non_cloak, root.right.camera);
        }
        else if(root.right == undefined && root.left != undefined){
            root.camera = Math.min(root.camera, root.left.non_camera_cloak + 1);
            root.camera = Math.min(root.camera, root.left.non_camera_non_cloak + 1);
            root.non_camera_cloak = Math.min(root.non_camera_cloak, root.left.non_camera_non_cloak);
            root.non_camera_non_cloak = Math.min(root.non_camera_non_cloak, root.left.camera);
        }
    }
};