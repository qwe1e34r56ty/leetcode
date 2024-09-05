int uniquePathsWithObstacles(int** obstacleGrid, int obstacleGridSize, int* obstacleGridColSize){
    int array[101][101] = {};
    array[1][1] = 1;
    if(obstacleGrid[0][0] == 1){
        return 0;
    }
    for(int i = 1; i <= obstacleGridSize; i++){
        for(int j = 1; j <= *obstacleGridColSize; j++){
            if(obstacleGrid[i - 1][j - 1] != 1){
                array[i][j] = array[i][j] + array[i - 1][j] + array[i][j - 1];
            }
        }
    }
    return array[obstacleGridSize][*obstacleGridColSize];
}