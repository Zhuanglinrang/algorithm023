/** 242. 有效的字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    // 将字符串排序后比对是否相等
    return s.split('').sort().join('') === t.split('').sort().join('')
};


// 丑数  我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    // 五毒
    if(n == 1) {
        return 1
    }
    let a = 0, b = 0, c = 0
    let temp = [1]
    for(let i = 1; i < n; i++){
        temp[i] = Math.min(temp[a] * 2, temp[b] * 3, temp[c] * 5)
        temp[i] >= temp[a] * 2 ? a++ : 0
        temp[i] >= temp[b] * 3 ? b++ : 0
        temp[i] >= temp[c] * 5 ? c++ : 0
    }
    return temp[temp.length - 1]
}

// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    let obj = {};
    // 统计元素出现的次数
    for (let i = 0; i < nums.length; i++) {
      if (!obj[nums[i]]) {
        obj[nums[i]] = 0;
      }
      obj[nums[i]]++;
    }
    // 将原数组去重后排序,将出现次数高的元素前置。
    let newArr=[...new Set(nums)].sort((a, b) => obj[b] - obj[a]);
    // 返回前k个元素
    return newArr.slice(0, k);
  }


//   二叉树的前序遍历
var preorderTraversal = function(root) {
    // 五毒
    let arr = [], res = []
    root && arr.push(root)

    while(arr.length > 0) {
        let cur = arr.pop()
        res.push(cur.val)

        cur.right && arr.push(cur.right)
        cur.left && arr.push(cur.left)
    }
    return res
};