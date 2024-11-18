class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        auto prev_ = [](const vector<int>& code, int size, int i, int k){
            if(i - k >= 0){
                return code[i - k];
            }else{
                return code[size + (i - k)];
            }
        };
        auto next_ = [](const vector<int>& code, int size, int i, int k){
            if(i + k < size){
                return code[i + k];
            }else{
                return code[i + k - size];
            }
        };
        vector<int> ans(code.size(), 0);
        int tmp = 0;
        if(k > 0){
            for(int i = 0; i < code.size(); i++){
                tmp = 0;
                for(int j = 0; j < k; j++){ 
                    tmp += next_(code, code.size(), i, j + 1);
                }
                ans[i] = tmp;
            }
        }else if(k < 0){
            for(int i = 0; i < code.size(); i++){
                tmp = 0;
                for(int j = 0; j < -k; j++){ 
                    tmp += prev_(code, code.size(), i, j + 1);
                }
                ans[i] = tmp;
            }
        }
        return ans;
    }
};