class Solution {
public:
    int minKBitFlips(vector<int>& nums, int k) {
        int size = nums.size();
        vector<int> flipped(size + 1, 0);
        for(int i = 0; i < size; i++){
            flipped[i + 1] = flipped[i];
            if((nums[i] == 1) == (flipped[i] - flipped[max(0, i - k + 1)]) % 2){
                if(i > size - k){
                    return -1;
                }
                flipped[i + 1]++;
            }
            //cout << flipped[i + 1];
        }
        return flipped[size];
    }
};