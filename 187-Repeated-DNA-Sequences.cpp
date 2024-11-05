const int A = 0;
const int C = 1;
const int G = 2;
const int T = 3;

class Solution {
public:
    string toString(int cur){
        string ret{};
        for(int i = 0; i < 10; i++){
            switch(cur & 0b11){
                case A: ret.push_back('A'); break;
                case C: ret.push_back('C'); break;
                case G: ret.push_back('G'); break;
                case T: ret.push_back('T'); break;
            }
            cur >>= 2;
        }
        reverse(ret.begin(), ret.end());
        return ret;
    }
    vector<string> findRepeatedDnaSequences(string s) {
        vector<int> table(1<<20, 0);
        vector<int> bit(128, 0);
        vector<string> answer{};
        bit['A'] = 0b00;
        bit['C'] = 0b01;
        bit['G'] = 0b10;
        bit['T'] = 0b11;
        int cur = 0;
        for(int i = 0; i < 10; i++){
            cur <<= 2;
            cur |= bit[s[i]];
        }
        table[cur] = 1;
        for(int i = 10; i < s.length(); i++){
            cur <<= 2;
            cur |= bit[s[i]];
            cur &= (1 << 20) - 1;
            if(table[cur] == 1){
                answer.push_back(toString(cur));
                table[cur] = 2;
            }
            else if(table[cur] == 2){
                
            }
            else{
                table[cur] = 1;
            }
        }
        
        return answer;
    }
};