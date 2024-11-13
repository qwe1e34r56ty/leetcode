class Solution {
public:
    string intToRoman(int num) {
        vector<pair<char, int>> t(7);
        t[0] = {'I', 1};
        t[1] = {'V', 5};
        t[2] = {'X', 10};
        t[3] = {'L', 50};
        t[4] = {'C', 100};
        t[5] = {'D', 500};
        t[6] = {'M', 1000};
        string ans = \\;
        for(auto it = t.rbegin(); it != t.rend(); it++){
            switch(num / it->second){
            case 4:
                if(num < 5){
                    ans += \IV\;
                }
                else if(num < 50){
                    ans += \XL\;
                }else{
                    ans += \CD\;
                }break;
            case 1:
                if(num < 10 && num >= 9){
                    ans += \IX\;
                    it++;
                    break;
                }
                else if(num < 100 && num >= 90){
                    ans += \XC\;
                    it++;
                    break;
                }else if(num < 1000 && num >= 900){
                    ans += \CM\;
                    it++;
                    break;
                }
            default :
                for(int i = 0; i < num / it->second; i++)
                    ans.push_back(it->first);
            }
            num %= it->second;
        }
        return ans;
    }
};