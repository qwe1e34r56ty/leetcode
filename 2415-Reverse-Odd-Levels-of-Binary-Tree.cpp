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
    TreeNode* reverseOddLevels(TreeNode* root) {
        auto clear = [](queue<pair<TreeNode*, int>>& q){
            queue<pair<TreeNode*, int>> empty;
            swap(q, empty);
        };
        queue<pair<TreeNode*, int>> q;
        queue<pair<TreeNode*, int>> tq;
        q.push({root, 0});
        vector<vector<TreeNode*>> tvv(14);
        vector<vector<int>> ivv(14);
        while(!q.empty()){
            while(!q.empty()){
                auto [node, depth] = q.front();
                q.pop();
                if(node->left != nullptr){
                    tq.push({node->left, depth + 1});
                    tvv[depth + 1].push_back(node->left);
                    ivv[depth + 1].push_back(node->left->val);
                }
                if(node->right != nullptr){
                    tq.push({node->right, depth + 1});
                    tvv[depth + 1].push_back(node->right);
                    ivv[depth + 1].push_back(node->right->val);
                }
            }
            q = tq;
            clear(tq);
        }
        for(int i = 1; i < 14; i += 2){
            reverse(ivv[i].begin(), ivv[i].end());
            for(int j = 0; j < tvv[i].size(); j++){
                tvv[i][j]->val = ivv[i][j];
            }
        }
        return root;
    }
};