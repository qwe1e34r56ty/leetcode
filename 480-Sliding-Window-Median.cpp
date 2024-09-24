class Solution {
public:
    vector<double> medianSlidingWindow(vector<int>& nums, int k) {
        multiset<int> cur(nums.begin(), nums.begin() + k);
        auto mid = next(cur.begin(), k / 2);
        vector<double> ans;
        for(int i = k;;i++){
            ans.push_back((double(*mid) + *prev(mid, 1 - k % 2)) / 2);
            if(ans.size() == nums.size() - k + 1){
                return ans;
            }
            cur.insert(nums[i]);
            if(nums[i] < *mid){
                mid--;
            }
            if(nums[i - k] <= *mid){
                mid++;
            }
            //std::cout << *mid << " ";
            cur.erase(cur.lower_bound(nums[i - k]));
            //std::cout << *mid << endl;
        }
    }
};