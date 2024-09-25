class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        sort(people.begin(), people.end());
        int i = 0;
        int j = people.size() - 1;
        int ans = 0;
        for(; i <= j; j--){
            if(i != j && people[i] + people[j] <= limit){
                ans++;
                i++;
            }
            else{
                ans++;
            }
        }
        return ans;
    }
};