class Solution {
public:
    long long dividePlayers(vector<int>& skill) {
        vector<int64_t> table(100001, 0);
        int64_t total = 0;
        for(auto i = skill.begin(); i != skill.end(); i++){
            table[*i] += 2;
            total += *i;
        }
        int64_t team_total = total * 2 / skill.size();
        if(team_total != floor((double)total * 2 / skill.size())) return -1;
        int64_t ret = 0;
        for(auto i = skill.begin(); i != skill.end(); i ++){
            table[*i]--;
            if(team_total - *i > 0 && table[team_total - *i] > 0) table[team_total - *i]--;
            else return -1;
            ret += *i * (team_total - *i);
        }
        return ret / 2;
    }
};