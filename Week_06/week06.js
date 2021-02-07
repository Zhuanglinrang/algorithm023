/** 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let current = grid[i][j];
            let top = grid[i - 1] ? grid[i - 1][j] : 0;
            let left = grid[i][j - 1] ? grid[i][j - 1] : 0;
            if (i==0) {
                top = left;
            }
            if (j==0) {
                left = top;
            }
            grid[i][j] = current + left >= current + top ? current + top : current + left;
        }
    }
    return grid[grid.length - 1][grid[0].length - 1];
};

/** 解码方法
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    // 五毒
    if (s[0] === '0') return 0
    const len = s.length
    const dp = [1, 1, ...new Array(len - 1).fill(0)]
    for (let i = 2; i <= len; i++) {
        let lastOneDig = s.slice(i - 1, i),
            lastTwoDig = s.slice(i - 2, i)
        if (lastOneDig > 0 && lastOneDig < 10) dp[i] += dp[i - 1]
        if (lastTwoDig > 9 && lastTwoDig < 27) dp[i] += dp[i - 2]
    }
    return dp[len]
};


/** 最大正方形
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    // 五毒
    if (matrix.length === 0) return 0;
    const dp = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    let max = Number.MIN_VALUE;
  
    for (let i = 0; i < rows + 1; i++) {
      if (i === 0) {
        dp[i] = Array(cols + 1).fill(0);
      } else {
        dp[i] = [0];
      }
    }
  
    for (let i = 1; i < rows + 1; i++) {
      for (let j = 1; j < cols + 1; j++) {
        if (matrix[i - 1][j - 1] === "1") {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
          max = Math.max(max, dp[i][j]);
        } else {
          dp[i][j] = 0;
        }
      }
    }
  
    return max * max;
  };

  /** 任务调度器
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let map = new Map();
    for (let i = 0; i < tasks.length; i++) {
        if (map.has(tasks[i])) {
            map.set(tasks[i], map.get(tasks[i])+1);
        } else {
            map.set(tasks[i], 1);
        }
    }
    let arr = [...map.values()].sort((x,y) => y-x);
    let max = arr[0];
    let res = (max - 1) * (n + 1) + 1;
    let i = 1;
    while (i < arr.length && arr[i] === max) {
        res++;
        i++;
    }
    return Math.max(tasks.length, res)
};
  