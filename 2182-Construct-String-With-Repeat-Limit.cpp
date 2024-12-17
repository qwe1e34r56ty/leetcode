class Solution {
public:
    string repeatLimitedString(string s, int repeatLimit) {
        auto cmp = [](const pair<char, int>& a, const pair<char, int>& b){
            return a.first < b.first;
        };
        unordered_map<char, int> m;
        int len = s.length();
        for(int i = 0; i < len; i++){
            m[s[i]]++;
        }
        priority_queue<pair<char, int>, vector<pair<char, int>>, decltype(cmp)> pq(cmp);
        for(const auto p : m){
            pq.push(p);
        }
        string ans{};
        while(!pq.empty()){
            m.clear();
            while(!pq.empty()){
                auto [letter, remain] = pq.top();
                int add = {};
                if(m.size() > 0){
                    add = 1;
                }else{
                    add = min(remain, repeatLimit);
                }
                remain = max(0, remain - add);
                ans += string(add, letter);
                pq.pop();
                //cout << ans << endl;
                //cout << m.size() << endl;
                if(remain > 0){
                    m[letter] = remain;
                    if(pq.empty() && m.size() == 1){
                        return ans;
                    }
                    if(m.size() > 1){
                        break;
                    }
                }else{
                    if(m.size() == 1){
                        break;
                    }
                }
            }
            for(auto p : m){
                pq.push(p);
            }
        }
        return ans;
    }
};