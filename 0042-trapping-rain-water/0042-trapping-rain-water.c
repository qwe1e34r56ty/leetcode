

int trap(int* height, int heightSize){
    int* left = (int *)malloc(sizeof(int) * heightSize);
    int* right = (int *)malloc(sizeof(int) * heightSize);
    int max = 0;
    int answer = 0;
    for(int i = 0; i < heightSize; i++){
        max = (max > height[i]) ? max : height[i];
        left[i] = max;
    }
    max = 0;
    for(int i = heightSize - 1; i >= 0; i--){
        max = (max > height[i]) ? max : height[i];
        right[i] = max;
    }
    for(int i = 0; i < heightSize; i++){
        answer += ((left[i] < right[i]) ? left[i] : right[i]) - height[i];
    }
    free(left);
    free(right);
    return answer;
}