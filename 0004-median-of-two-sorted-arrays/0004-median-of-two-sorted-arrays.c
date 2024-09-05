#define max(a, b) ((a > b) ? a : b)
#define min(a, b) ((a < b) ? a : b)

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size){
    int MIN = -10000000;
    int MAX = 10000000;
    int answer = 0;
    int partitionX = 0;
    int partitionY = 0;
    int partitionSize = (nums1Size + nums2Size + 1) / 2;
    int maxLeftX = 0;
    int minRightX = 0;
    int maxLeftY = 0;
    int minRightY = 0;
    if(nums1Size > nums2Size){
        return findMedianSortedArrays(nums2, nums2Size, nums1, nums1Size);
    }
    partitionX = (nums1Size + 1) / 2;
    partitionY = partitionSize - partitionX;
    while(partitionX <= nums1Size && partitionX >= 0){
        maxLeftX = (partitionX == 0) ? MIN : nums1[partitionX - 1];
        minRightX = (partitionX == nums1Size) ? MAX : nums1[partitionX];     
        maxLeftY = (partitionY == 0) ? MIN : nums2[partitionY - 1];
        minRightY = (partitionY == nums2Size) ? MAX : nums2[partitionY];
        
        if(maxLeftX <= minRightY && maxLeftY <= minRightX){
            if((nums1Size + nums2Size) % 2 == 0) return (double)(max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2;
            else return (double)max(maxLeftX, maxLeftY);
        }
        else if(maxLeftX > minRightY){
            partitionX--;
        }
        else{
            partitionX++;
        }
        partitionY = partitionSize - partitionX;
    }
    return 0;
}