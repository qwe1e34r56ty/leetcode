#define min(a, b) ((a < b) ? a : b)

int minimumTotal(int** triangle, int triangleSize, int* triangleColSize){
    int ans = 0;
    int size = 0;
    for(int i = 0; i < triangleSize; i++){
        size += i + 1;
    }
    int* array = (int *)malloc(sizeof(int) * size);
    size = 0;
    for(int i = 0; i < triangleSize; i++){
        size += i + 1;
        for(int j = size - i - 1; j < size; j++){
            array[j] = triangle[i][j - size + i + 1]; 
        }
    }
    size = 1;
    ans = array[0];
    for(int i = 1; i < triangleSize; i++){
        size += i + 1;
        ans = array[size - 1] + array[size - 2 - i];
        array[size - i - 1] += array[size - i - 1 - i];
        ans = min(ans, array[size - i - 1]);
        for(int j = size - i; j < size - 1; j++){
            array[j] += min(array[j - i], array[j - i - 1]);
            ans = min(ans, array[j]);
        }
        array[size - 1] += array[size - 2 - i];
        ans = min(ans, array[size - 1]);
    }
    return ans;
}