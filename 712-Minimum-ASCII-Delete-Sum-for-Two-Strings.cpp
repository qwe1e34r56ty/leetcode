#include<iostream>
#include<vector>
#include<algorithm>


class Solution {
public:
    int minimumDeleteSum(string s1, string s2) {
        using std::cout;
        using std::endl;
        int l1 = s1.size();
        int l2 = s2.size();
        vector<vector<int>> dp(l1 + 1, vector<int>(l2 + 1, (l1 + l2) * 128 + 1));
        dp[0][0] = 0;
        for(int i = 1; i <= l1; i++){
            dp[i][0] = dp[i - 1][0] + s1[i - 1];
        }
        for(int i = 1; i <= l2; i++){
            dp[0][i] = dp[0][i - 1] + s2[i - 1];
        }
        /*for(int i = 0; i <= l1; i++){
            for(int j = 0; j <= l2; j++){
                cout << dp[i][j] << " ";
            }
            cout << endl;
        }*/
        for(int i = 1; i <= l1; i++){
            for(int j = 1; j <= l2; j++){
                if(s1[i - 1] == s2[j - 1]){
                    dp[i][j] = min(dp[i][j], dp[i - 1][j - 1]);
                }
                else{
                    dp[i][j] = min(dp[i][j], dp[i - 1][j - 1] + s1[i - 1] + s2[j - 1]);
                    dp[i][j] = min(dp[i][j], dp[i - 1][j] + s1[i - 1]);
                    dp[i][j] = min(dp[i][j], dp[i][j - 1] + s2[j - 1]);
                }
            }
        }
        /*for(int i = 0; i <= l1; i++){
            for(int j = 0; j <= l2; j++){
                cout << dp[i][j] << " ";
            }
            cout << endl;
        }*/
        return dp[l1][l2];
    }
};