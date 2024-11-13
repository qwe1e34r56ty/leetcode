class Solution {
public:
    int romanToInt(string s) {
        auto it = s.begin();
        map<char, int> m;
        m.insert({'I', 1});
        m.insert({'V', 5});
        m.insert({'X', 10});
        m.insert({'L', 50});
        m.insert({'C', 100});
        m.insert({'D' ,500});
        m.insert({'M', 1000});
        int ans = 0;
        ans += m[*(s.begin())];
        char last = *(s.begin());
        for(auto it = s.begin() + 1; it != s.end(); it++){
            switch(last){
                case 'I':
                    switch(*it){
                        case 'V': ans -= 1; ans += 4; break;
                        case 'X': ans -= 1; ans += 9; break;
                        default: ans += m[*it];
                    }break;
                case 'X':
                    switch(*it){
                        case 'L': ans -= 10; ans += 40; break;
                        case 'C': ans -= 10; ans += 90; break;
                        default: ans += m[*it];
                    }break;
                case 'C':
                    switch(*it){
                        case 'D': ans -= 100; ans += 400; break;
                        case 'M': ans -= 100; ans += 900; break;
                        default: ans += m[*it];
                    }break;
                default: ans += m[*it];
            }
            last = *it;
        }
        return ans;
    }
};