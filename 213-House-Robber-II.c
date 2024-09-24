int * answer;
#define max(a, b) ((a > b) ? a : b)

int rob(int* nums, int numsSize){
    int ans = 0;
    if(numsSize == 1){
        return nums[0];
    }
    answer = (int *)malloc(sizeof(int) * (numsSize + 6));
    for(int i = 0; i < numsSize + 6; i++){
        answer[i] = 0;
    }
    for(int i = 3; i < numsSize + 2; i++){
        answer[i] = nums[i - 3];
    }
    for(int i = 3; i < numsSize + 6; i++){
        answer[i] = max(answer[i - 2], answer[i - 3]) + answer[i];
    }
    ans = answer[numsSize + 5];
    for(int i = 0; i < numsSize + 6; i++){
        answer[i] = 0;
    }
    for(int i = 4; i < numsSize + 3; i++){
        answer[i] = nums[i - 3];
    }
    for(int i = 4; i < numsSize + 6; i++){
        answer[i] = max(answer[i - 2], answer[i - 3]) + answer[i];
    }
    ans = max(ans, answer[numsSize + 5]);
    free(answer);
    return ans;
}