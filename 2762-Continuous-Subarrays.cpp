class Solution {
public:
    long long continuousSubarrays(vector<int>& nums) {
        auto dcmp = [](const pair<int, int>& a, const pair<int, int>& b){
            return a.first < b.first;
        };
        auto acmp = [](const pair<int, int>& a, const pair<int, int>& b){
            return a.first > b.first;
        };
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(dcmp)> dpq(dcmp);
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(acmp)> apq(acmp);
        int size = nums.size();
        int start = 0;
        int dstart = 0;
        int astart = 0;
        long long ans = 0;
        int lastend = -1;
        for(int i = 0; i < size; i++){
            while(!dpq.empty() && (dpq.top().first > nums[i] + 2 || dpq.top().first < nums[i] - 2)){
                dstart = max(dstart, dpq.top().second + 1);
                dpq.pop();
            }
            while(!apq.empty() && (apq.top().first > nums[i] + 2 || apq.top().first < nums[i] - 2)){
                astart = max(astart, apq.top().second + 1);
                apq.pop();
            }
            dpq.push({nums[i], i});
            apq.push({nums[i], i});
            int nowstart = max(dstart, astart);
            if(lastend >= nowstart){
                long long sublen = lastend - nowstart + 1;
                ans -= (sublen + 1) * sublen / 2;
            }
            long long sublen = i - nowstart + 1;
            ans += (sublen + 1) * sublen / 2;
            lastend = i;
            //cout << ans << endl;
            //cout << dstart << ", " << astart << endl;
        }
        return ans;
    }
};