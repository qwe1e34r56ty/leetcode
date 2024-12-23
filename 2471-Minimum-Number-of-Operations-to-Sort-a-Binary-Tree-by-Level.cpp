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
    void clear(queue<TreeNode*>& q){
        queue<TreeNode*> empty;
        swap(q, empty);
    }
    int minimumOperations(TreeNode* root) {
        queue<TreeNode*> q;
        queue<TreeNode*> tq;
        q.push(root);
        int ans = 0;
        while(!q.empty()){
            vector<int> v;
            while(!q.empty()){
                TreeNode* node = q.front();
                q.pop();
                v.push_back(node->val);
                if(node->left){
                    tq.push(node->left);
                }
                if(node->right){
                    tq.push(node->right);
                }
            }
            vector<int> s_v = v;
            sort(s_v.begin(), s_v.end());
            unordered_map<int, int> m;
            for(int i =0; i < v.size(); i++){
                m[v[i]] = i;
            }
            for(int i = 0; i < v.size(); i++){
                while(v[i] != s_v[i]){
                    ans++;
                    int cur = m[s_v[i]];
                    m[v[i]] = cur;
                    swap(v[i], v[cur]);
                }
            }
            q = tq;
            clear(tq);
        }
        return ans;
    }
};