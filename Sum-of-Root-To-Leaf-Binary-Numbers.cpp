1/**
2 * Definition for a binary tree node.
3 * struct TreeNode {
4 *     int val;
5 *     TreeNode *left;
6 *     TreeNode *right;
7 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
8 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
9 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
10 * };
11 */
12class Solution {
13public:
14    int sumRootToLeaf(TreeNode* root) {
15        int answer = 0;
16        solve(&answer, 0, root);
17        return answer;
18    }
19
20    void solve(int* answer, int parent, TreeNode* root){
21        int cur = parent + root->val;
22        if(root->left){
23            solve(answer, cur * 2, root->left);
24        }
25        if(root->right){
26            solve(answer, cur * 2, root->right);
27        }
28        if(!root->left && !root->right){
29            *answer += cur;
30        }
31    }
32
33};