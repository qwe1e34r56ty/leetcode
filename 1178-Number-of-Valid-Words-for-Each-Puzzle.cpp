class Solution {
public:
    vector<int> findNumOfValidWords(vector<string>& words, vector<string>& puzzles) {
        unordered_map<int, int> maskfreq;
        vector<int> ans;
        int (*wordtomask)(string& word) = [](string& word){
            int ret = 0;
            for(auto i : word){
                ret |= 1 << (i - 'a');
            }
            return ret;
        };
        for(auto& w : words){
            maskfreq[wordtomask(w)]++;
        }
        for(auto& p : puzzles){
            int mask = wordtomask(p);
            int first = 1 << (p[0] - 'a');
            int cur = mask;
            int tmp = 0;
            while(cur > 0){
                if(cur & first){
                    tmp += maskfreq[cur];
                }
                cur = (cur - 1) & mask;
            }
            ans.push_back(tmp);
        }
        return ans;
    }
};