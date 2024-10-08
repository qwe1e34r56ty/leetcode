/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    vector<int> nextLargerNodes(ListNode* head) {
        stack<pair<int, int>> st;
        vector<int> ans;
        int cur = 0;
        while(head != nullptr){
            while(!st.empty() && st.top().first < head->val){
                ans[st.top().second] = head->val;
                st.pop();
            }
            st.push(pair<int, int>(head->val, cur));
            ans.push_back(0);
            head = head->next;
            cur++;
        }
        return ans;
    }
};