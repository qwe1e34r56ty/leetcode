#define max(a, b) ((a > b) ? a : b)
#define min(a, b) ((a < b) ? a : b)

int maxArea(int* height, int heightSize){
    int l = 0;
    int r = heightSize - 1;
    int answer = 0;
    while(l < r){
        answer = max(min(height[l], height[r]) * (r - l), answer);
        if(height[l] <= height[r]){
            l++;
        }
        else{
            r--;
        }
    }
    return answer;
}