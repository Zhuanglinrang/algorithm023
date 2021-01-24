/**  柠檬水找零
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let n5 = 0;
    let n10 = 0;
    for(var i = 0;i<bills.length;i++){
        if(bills[i] == 5){
            n5++;
        }else if(bills[i] == 10){
            if(n5 == 0){
                return false
            };
            n5--;
            n10++;
        }else if(bills[i] == 20){
            if(n10 > 0 && n5 > 0){
                n10--;
                n5--;
            }else if(n5 >= 3){
                n5 -= 3;
            }else{
                return false;
            }
        }
    }
    return true;
};



/**  122. 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profits = 0;
    for(let i=1;i<prices.length;i++){
        if (arr[i] > arr[i-1]) {  
            profits += (arr[i] - arr[i-1]);
        } 
    }
    return profits
};


// 分饼干
const findContentChildren =(g,s) =>{
    g.sort((a,b) => (a-b));
    s.sort((a,b) => (a-b));
    let child = 0;
    let cookie = 0;
    while(child < g.length && cookie < s.length){
        if(g[child] <= s[cookie]){
            child++;
        }

        cookie++;  // 无论是否满足都要进行 匹配下一饼干  

    }
    return child;
}

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let total = 0;
    for(let i = 0; i < s.length; i ++){
        if(s[i] >= g[total]){
            total ++;
        }
        if(total === g.length){
            return total;
        }
    }
    return total;

};


/**  单词接龙
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // 五毒
    const wordSet = new Set(wordList);
    const queue = [];
    queue.push([beginWord, 1]);
  
    while (queue.length) {
      const [word, level] = queue.shift();  // 当前出列的单词
      if (word == endWord) {
        return level;
      }
      for (let i = 0; i < word.length; i++) { // 遍历当前单词的所有字符
        for (let c = 97; c <= 122; c++) { // 对应26个字母
          const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1); // 形成新词
          if (wordSet.has(newWord)) { // 单词表里有这个新词
            queue.push([newWord, level + 1]); // 作为下一层的词入列
            wordSet.delete(newWord);  // 避免该词重复入列
          }
        }
      }
    }
    return 0; // bfs结束，始终没有遇到终点
  };



