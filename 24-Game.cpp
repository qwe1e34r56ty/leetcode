class Solution {
public:
    unordered_map<int, unordered_set<double>> memo;
    bool judgePoint24(vector<int>& cards) {
        double EPS = 1e-6;
        for(int i = 0; i < cards.size(); i++){
            memo[1 << i].insert(cards[i]);
        }
        dp(15, cards);
        for(auto i = memo[15].begin(); i != memo[15].end(); i++){
            if(fabs(*i - 24) < EPS){
                return true;
            }
        }
        return false;
    }

    void dp(int bit, vector<int>& cards){
        if(bit == 0){
            return;
        }
        if(memo.find(bit) != memo.end() && memo[bit].size() != 0){
            return;
        }
        for (int i = (bit - 1) & bit; i; i = (i - 1) & bit){
            dp(i, cards);
            dp(bit & (~i), cards);
            for (double a : memo[i]) for (double b : memo[bit & (~i)]) {
                memo[bit].insert(a + b);
                memo[bit].insert(a - b);
                memo[bit].insert(b - a);
                memo[bit].insert(a * b);
                memo[bit].insert(a / b);
                memo[bit].insert(b / a);
            }
        }
    }

};