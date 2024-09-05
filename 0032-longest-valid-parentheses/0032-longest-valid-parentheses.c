#include<stdlib.h>
#define max(a, b) ((a > b) ? a : b)

int longestValidParentheses(char * s){
    int length = 0;
    int ans = 0;
    for(int i = 0; s[i] != 0; i++){
        length++;
    }
    int* array = (int *)malloc(sizeof(int) * (length + 1));
    for(int i = 0; i < length + 1; i++){
        array[i] = 0;
    }
    for(int i = length - 2; i >= 0; i--){
        if(s[i] == ')'){
            array[i] = 0;
        }
        else{
            if(array[i + 1] == ')'){
                array[i] = array[i + 2] + 2;
            }
            else if(s[i + array[i + 1] + 1] == ')'){
                array[i] = max(array[i + 1] + 2 + array[i + array[i + 1] + 2], array[i]);
            }
        }
        ans = max(ans, array[i]);
    }
    //free(array);
    return ans;
}