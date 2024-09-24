int* answer;
#define max(a, b) ((a > b) ? a : b)

int rob(int* nums, int numsSize){
    answer = (int *)malloc(sizeof(int) * (numsSize + 6));
    for(int i = 0; i < numsSize + 6; i++){
        answer[i] = 0;
    }
    for(int i = 3; i < numsSize + 3; i++){
        answer[i] = nums[i - 3];
    }
    for(int i = 3; i < numsSize + 6; i++){
        answer[i] = max(answer[i - 3], answer[i - 2]) + answer[i];
    }
    return answer[numsSize + 5];
}