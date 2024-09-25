class Solution {
public:
    int maxTotalFruits(vector<vector<int>>& fruits, int startPos, int k) {
        int len = fruits.size();
        int start = max(0, startPos - k);
        int end = startPos + k + 1;
        vector<int> table(end, 0);
        for(int i = 0; i < len; i++){
            if(fruits[i][0] < end){
                table[fruits[i][0]] = fruits[i][1];
            }
        }
        int cur = 0;
        int ans = 0;
        for(int i = start; i < startPos; i++){
            cur += table[i];
        }
        for(int i = start, j = startPos; j < end; j++){
            cur += table[j];
            int front = startPos - i;
            int back = j - startPos;
            while(2 * min(front, back) + max(front, back) > k){
                cur -= table[i];
                i++;
                front = startPos - i;
            }
            ans = max(ans, cur);
        }
        return ans;
    }
};