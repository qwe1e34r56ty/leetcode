#include<stdlib.h>

int max(int a, int b){
    return (a > b) ? a : b;
}

int min(int a, int b){
    return (a < b) ? a : b;
}

int lengthOfLongestSubstring(char * s){
    int s_len = 0;
    int hash[128] = {};
    int cur = 0;
    int answer = 0;
    for(int i = 0; s[i] != 0; i++){
        s_len++;
    }
    for(int i = 0; i < 128; i++){
        hash[i] = -1;
    }
    for(int i = 0; i < s_len; i++){
        cur = (i == 0) ? 1 : min(cur + 1, i - hash[s[i]]);
        answer = max(answer, cur);
        hash[s[i]] = i;
    }
    return answer;
}