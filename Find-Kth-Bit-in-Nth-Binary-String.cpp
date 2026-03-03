1class Solution {
2public:
3    char findKthBit(int n, int k) {
4        string cur = "0";
5        if(n == 1){
6            return '0';
7        }
8        for(int i = 2; i <= n; i++){
9            string tmp = cur;
10            for(int j = 0; j < tmp.size(); j++){
11                tmp[j] = tmp[j] == '1' ? '0' : '1';
12            }
13            reverse(tmp.begin(), tmp.end());
14            cur += "1" + tmp;
15        }
16        return cur[k - 1];
17    }
18};