class Solution {
public:
    int maxChunksToSorted(vector<int>& arr) {
        vector<int> ans(arr.size(), 0);
        ans[0] = 1;
        for(int i = 1; i < arr.size(); i++){
            int tmp = i;
            int tmp_1 = i;
            for(int j = i - 1; j >= 0; j--){
                if(arr[j] > arr[i]){
                    tmp = j;
                }
                if(arr[j] < arr[i] && tmp_1 == i){
                    tmp_1 = j;
                }
            }
            //cout << tmp << " " << tmp_1 << endl;
            if(tmp == i){
                ans[i] = ans[i - 1] + 1;
            }
            else if(tmp_1 == i || tmp_1 != i && tmp > tmp_1){
                ans[i] = ans[tmp];
            }
            else{
                ans[i] = ans[tmp_1];
            }
            //cout << ans[i] << endl;
        }
        return ans[arr.size() - 1];
    }
};