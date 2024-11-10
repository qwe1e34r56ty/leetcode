class Solution {
public:
    bool valid(vector<int>& table, int k){
        int tmp = 0;
        for(auto i = table.begin(); i != table.end(); i++)
            tmp |= (1 << (i - table.begin())) * !!(*i);
        if(tmp >= k){
            return true;
        }
        return false;
    }
    int minimumSubarrayLength(vector<int>& nums, int k) {
        int answer = nums.size() + 1;
        vector<int> table(30, 0);
        for(int i = 0, j = 0; j < nums.size(); j++){
            for(int l = 0; l < 30; l++){
                table[l] += (nums[j] >> l) & 1;
            }
            while((i <= j) && valid(table, k)){
                answer = min(answer, j - i + 1);
                for(int l = 0; l < 30; l++){
                    table[l] -= (nums[i] >> l) & 1;
                }
                i++;
            }
        }
        if(answer == nums.size() + 1){
            answer = -1;
        }
        return answer;
    }
};