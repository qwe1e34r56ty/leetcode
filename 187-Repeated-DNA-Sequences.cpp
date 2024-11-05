const int A = 0;
const int C = 1;
const int G = 2;
const int T = 3;

class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        vector<int> table(1<<20, 0);
        vector<int> bit(128, 0);
        vector<string> answer{};
        bit['A'] = 0b00;
        bit['C'] = 0b01;
        bit['G'] = 0b10;
        bit['T'] = 0b11;
        int cur = 0;
        for(int i = 0; i < 10; i++)
            cur = (cur << 2) | bit[s[i]];
        table[cur] = 1;
        int mask = (1 << 20) - 1;
        for(int i = 10; i < s.length(); i++){
            cur = ((cur << 2) | bit[s[i]]) & mask;
            if(table[cur] == 1){
                answer.push_back(s.substr(i - 9, 10));
                table[cur] = 2;
            }
            else if(table[cur] == 2){

            }
            else
                table[cur] = 1;
        } 
        return answer;
    }
};