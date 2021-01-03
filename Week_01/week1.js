// 两数之和
var twoSum = function(nums, target) {
    for(let i in nums){
        i -=0;
        for(j=i-0+1;j<nums.length;j++){
            if(nums[i] + nums[j] ===target){
                return [i,j]
            }
        }
    }
};

// 旋转数组
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
    return nums
};

// 删除排序数组中的重复项
var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 1; j < nums.length; j++ ){
        if(nums[i] !== nums[j]){
            nums[++i] = nums[j]
        }
    }
    return i+1;
};

var removeDuplicates = function(nums) {
    for (let i = nums.length -1; i > 0; i--) {
        if(nums[i] === nums[i-1]){
            nums.splice(i,1);
        }
    }
    return nums.length
}

// 移动0
var moveZeroes = function(nums) {
    for(let i=nums.length;i>=0;i--){
        if(nums[i] === 0){
            nums.splice(i,1);
            nums.push(0);
        }
    }
    return nums;
};


// 合并两个有序数组
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n,...nums2)
    return nums1.sort((a,b) => a-b)
}
