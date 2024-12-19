class Solution {
public:
    int maxChunksToSorted(vector<int>& arr) {
        int ans = 0;
        int size = arr.size();
        int mini = size;
        int maxi = 0;
        for(int i = 0; i < size; i++){
            mini = min(mini, arr[i]);
            maxi = max(maxi, arr[i]);
            if(mini == 0 && maxi == i){
                ans++;
            }
        }
        return ans;
    }
};