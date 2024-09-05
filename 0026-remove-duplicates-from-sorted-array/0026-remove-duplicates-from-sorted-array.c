

int removeDuplicates(int* nums, int numsSize){
    int number[20001] = {};
    int len = numsSize;
    for(int i = 0; i < numsSize; i++){
        if(number[nums[i] + 10000] == 0){
            number[nums[i] + 10000] = 1;
        }
        else{
            len--;
        }
    }
    int j = 0;
    for(int i = -10000; i < 10001; i++){
        if(number[i + 10000] == 1){
            nums[j] = i;
            j++;
        }
    }
    return len;
}