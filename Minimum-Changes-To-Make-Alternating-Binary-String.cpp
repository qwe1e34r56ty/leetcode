1class Solution {
2public:
3    int minOperations(string s) {
4        int result = 0;
5        int comp_result = 0;
6        if(s.size() == 1){
7            return 0;
8        }
9        string tmp = s;
10        if(s[0] == '0'){
11            s[0] = '1';
12            result++;
13        }
14        if(tmp[0] == '1'){
15            tmp[0] = '0';
16            comp_result++;
17        }
18        for(auto it = s.begin() + 1; it != s.end(); it++){
19            if(*prev(it) == *it){
20                reverse(*it);
21                result++;
22            }
23        }
24        for(auto it = tmp.begin() + 1; it != tmp.end(); it++){
25            if(*prev(it) == *it){
26                reverse(*it);
27                comp_result++;
28            }
29        }
30        result = min(result, comp_result);
31        return result;
32    }
33
34    void reverse(char& c){
35        if(c == '1'){
36            c = '0';
37        }else{
38            c = '1';
39        }
40    }
41};