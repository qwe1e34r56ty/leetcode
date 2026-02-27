1class Solution {
2public:
3    int numSteps(string s) {
4        int lastOneIndex = 0;
5        int lastIndex = s.size() - 1;
6        int result = 0;
7        for(auto it = s.begin(); it != s.end(); it++){
8            if(*it == '1'){
9                lastOneIndex = it - s.begin();
10            }
11        }
12        while(lastIndex != 0){
13            if(s[lastIndex] == '1'){
14                while(lastOneIndex != -1 && s[lastOneIndex] == '1'){
15                    s[lastOneIndex] = '0';
16                    lastOneIndex--;
17                }
18                if(lastOneIndex == -1){
19                    result++;   
20                    result += lastIndex + 1;
21                    break;
22                }else{
23                    s[lastOneIndex] = '1';
24                }
25            }else{
26                lastIndex--;
27            }
28            result++;            
29        }
30        return result;
31    }
32};