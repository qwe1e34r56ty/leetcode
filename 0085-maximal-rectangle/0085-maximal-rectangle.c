#include<stdlib.h>

int maximalRectangle(char** matrix, int matrixSize, int* matrixColSize){
    if(matrixSize == 0){
        return 0;
    }
    int* left = (int *)malloc(*matrixColSize * 4);
    int* right = (int *)malloc(*matrixColSize * 4);
    int* height = (int *)malloc(*matrixColSize * 4);
    int curLeft = 0;
    int curRight = *matrixColSize;
    int answer = 0;
    for(int i = 0; i < *matrixColSize; i++){
        left[i] = 0;
        right[i] = *matrixColSize;
        height[i] = 0;
    }
    for(int i = 0; i < matrixSize; i++){
        curLeft = 0;
		curRight = *matrixColSize;
        for(int j = 0; j < *matrixColSize; j++){
            if(matrix[i][j] == '0'){
                left[j] = 0;
                curLeft = j + 1;
            }
            else{
                left[j] = (left[j] > curLeft) ? left[j] : curLeft;
            }
        }
        for(int j = *matrixColSize - 1; j >= 0; j--){
            if(matrix[i][j] == '0'){
                right[j] = *matrixColSize;
                curRight = j;
            }
            else{
                right[j] = (right[j] < curRight) ? right[j] : curRight;
            }            
        }
        for(int j = 0; j < *matrixColSize; j++){
            if(matrix[i][j] == '0'){
                height[j] = 0;
            }
            else{
                height[j]++;
            }
        }
        for(int j = 0; j < *matrixColSize; j++){
            answer = (answer > (right[j] - left[j]) * height[j]) ? answer : ((right[j] - left[j]) * height[j]);
        }
    }
    free(left);
    free(right);
    free(height);
    return answer;
}