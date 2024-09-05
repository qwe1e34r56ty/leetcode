#define min(a, b) ((a < b) ? a : b)

int minPathSum(int** grid, int gridSize, int* gridColSize){
    int answer[201][201] = {};
    for(int i = 0; i < gridSize + 1; i++){
        for(int j = 0; j < *gridColSize + 1; j++){
            answer[i][j] = 200 * 200 * 101;
        }
    }
    for(int i = 1; i < gridSize + 1; i++){
        for(int j = 1; j < *gridColSize + 1; j++){
            answer[i][j] = grid[i - 1][j - 1];
        }
    }
    answer[0][1] = 0;
    answer[1][0] = 0;
    for(int i = 1; i < gridSize + 1; i++){
        for(int j = 1; j < *gridColSize + 1; j++){
            answer[i][j] += min(answer[i - 1][j], answer[i][j - 1]);
        }
    }
    return answer[gridSize][*gridColSize];
}