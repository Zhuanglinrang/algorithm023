/** 实现Trie(前缀树)
 * Initialize your data structure here.
 */
class Trie {
    // 五毒
    constructor() {
      this.root = Object.create(null)
    }
    insert(word) {
      let node = this.root
      for (const c of word) {
        if (!node[c]) node[c] = Object.create(null)
        node = node[c]
      }
      node.isWord = true
    }
    traverse(word) {
      let node = this.root
      for (const c of word) {
        node = node[c]
        if (!node) return null
      }
      return node
    }
    search(word) {
      const node = this.traverse(word)
      return !!node && !!node.isWord
    }
    startsWith(prefix) {
      return !!this.traverse(prefix)
    }
  }

    // 五毒
//   省份数量 
  var findCircleNum = function(isConnected) {
    const provinces = isConnected.length;
    const parent = new Array(provinces).fill(0).map((element, index) => index);

    for (let i = 0; i < provinces; i++) {
        for (let j = i + 1; j < provinces; j++) {
            if (isConnected[i][j] == 1) {
                union(parent, i, j);
            }
        }
    }
    let circles = 0;
    parent.forEach((element, index) => {
        if (element === index) {
            circles++;
        }
    });

    return circles;
};

const union = (parent, index1, index2) => {
    parent[find(parent, index1)] = find(parent, index2);
}

const find = (parent, index) => {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}

/**  岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */
    // 五毒

var numIslands = function(grid) {
    let m = grid.length;
    if(m == 0){
        return 0;
    }
    let n = grid[0].length;
    let count = 0;
    let parent = [];
    let rank = [];


    let find = (p) => {
        while(p != parent[p]){
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    let union = (p,q) => {
        let rootP = find(p);
        let rootQ = find(q);
        if(rootP == rootQ){
            return;
        }
        if(rank[rootP] > rank[rootQ]){
            parent[rootQ] = rootP;
        }else if(rank[rootP] < rank[rootQ]){
            parent[rootP] = rootQ;
        }else{
            parent[rootP] = rootQ;
            rank[rootQ]++;
        }
        count--;
    }

    for(let i = 0;i < m;i++){
        for(let j = 0;j < n;j++){
            if(grid[i][j] == 1){
                parent[i * n + j] = i * n + j;
                count++;
            }
            rank[i * n + j] = 0;
        }
    }

    for(var i = 0;i<m;i++){
        for(var j = 0;j<n;j++){
            if(grid[i][j] == 1){
                grid[i][j] = 0;
                i-1>=0 && grid[i-1][j] == 1 && union(i*n + j,(i-1)*n + j);
                j-1>=0 && grid[i][j-1] == 1 && union(i*n + j,i*n + j-1);
                i+1<m && grid[i+1][j] == 1 && union(i*n + j,(i+1)*n + j);
                j+1<n && grid[i][j+1] == 1 && union(i*n + j,i*n + j+1);
            }
        }
    }
    return count;
}