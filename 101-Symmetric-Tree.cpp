/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        queue<TreeNode*> q;
        queue<TreeNode*> tmp_q;
        q.push(root);
        while(!q.empty()){
            vector<int> tmp_v;
            while(!q.empty()){
                if(q.front()->left != nullptr){
                    tmp_q.push(q.front()->left);
                    tmp_v.push_back(q.front()->left->val);
                }
                else{
                    tmp_v.push_back(-101);
                }
                if(q.front()->right != nullptr){
                    tmp_q.push(q.front()->right);
                    tmp_v.push_back(q.front()->right->val);
                }
                else{
                    tmp_v.push_back(-101);
                }
                q.pop();
            }
            for(int i = 0; i < tmp_v.size() / 2; i++){
                //cout << tmp_v[i] << \ : \ << tmp_v[tmp_v.size() - 1 - i] << endl;
                if(tmp_v[i] != tmp_v[tmp_v.size() - 1 - i]) return false;
            }
            q = tmp_q;
            while(!tmp_q.empty())
                tmp_q.pop();
        }
        return true;
    }
};