class Solution {
public:
    bool canSwap(int a, int b){
        int aCount = 0;
        int bCount = 0;
        for(int i = 0; i < 9; i++){
            aCount += !!(a & (1 << i));
            bCount += !!(b & (1 << i));
        }
        return aCount == bCount;
    }
    bool canSortArray(vector<int>& nums) {
        int lastMax = 0;
        int curMin = nums[0];
        int curMax = nums[0];
        for(auto i = nums.begin() + 1; i != nums.end(); i++){
            if(canSwap(*prev(i), *i)){
                curMax = max(curMax, *i);
                curMin = min(curMin, *i);
                if(curMin < lastMax){
                    return false;
                }
            }
            else{
                lastMax = curMax;
                curMax = *i;
                curMin = *i;
                if(curMin < lastMax){
                    return false;
                }
            }
        }
        return true;
    }
};