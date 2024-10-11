class Solution {
public:
    int smallestChair(vector<vector<int>>& times, int targetFriend) {
        const int ARRIVE = 0;
        const int LEAVE = 1;
        vector<vector<int>> seq;
        for(auto i = times.begin(); i != times.end(); i++){
            i->push_back(i - times.begin());
        }
        sort(times.begin(), times.end(), [](vector<int>& a, vector<int>& b){
            return a[0] < b[0];
        });
        priority_queue<int, vector<int>, greater<int>> empty;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> occupied;
        for(int i = 0; i < times.size(); i++){
            empty.push(i);
        }
        for(auto i = times.begin(); i != times.end(); i++){
            while(!occupied.empty() && occupied.top().first <= (*i)[0]){
                empty.push(occupied.top().second);
                occupied.pop();
            }
            int seat = empty.top();
            empty.pop();
            if((*i)[2] == targetFriend){
                return seat;
            }
            occupied.push({(*i)[1], seat});
        }
        return 0;
    }
};