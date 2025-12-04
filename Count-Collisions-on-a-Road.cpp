1class Solution {
2public:
3    int solve(string& directions){
4        char last_state = directions[0];
5        int ans = 0;
6        for(int i = 1; i < directions.size(); i++){
7            if(last_state == 'R'){
8                if(directions[i] == 'L'){
9                    ans += 2;
10                    last_state = 'S';
11                    directions[i - 1] = 'S';
12                    directions[i] = 'S';
13                }else if(directions[i] == 'S'){
14                    ans++;
15                    last_state = 'S';
16                    directions[i - 1] = 'S';
17                }else{
18                    last_state = directions[i];
19                }
20            }else if(last_state == 'S'){
21                if(directions[i] == 'L'){
22                    ans++;
23                    last_state = 'S';
24                    directions[i] = 'S';
25                }else{
26                    last_state = directions[i];
27                }
28            }else{
29                last_state = directions[i];
30            }
31        }
32        return ans;
33    }
34    int countCollisions(string directions) {
35        int ans = 0;
36        ans += solve(directions);
37        reverse(directions.begin(), directions.end());
38        for(int i = 0; i < directions.size(); i++){
39            if(directions[i] == 'L'){
40                directions[i] = 'R';
41            }else if(directions[i] == 'R'){
42                directions[i] = 'L';
43            }
44        }
45        ans += solve(directions);
46        return ans;
47    }
48};