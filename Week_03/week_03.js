// 二叉树的公共祖先
var lowestCommonAncestor = function(root, p, q) {
    // 五毒
    if( root ==null || root == p || root == q){
        return root;
    }
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if(left != null && right != null){
        return root;
    }
    return left != null ? left : right;
};


// 77.组合 递归实现
const combine = (n, k) => {
    let res = [];
  
    const dfs = (start, temp) => { 
      if (temp.length == k) {
        // 跳出时copy
        res.push(temp.slice());       
        return;                       
      }
      for (let i = start; i <= n; i++) { 
        temp.push(i);                  
        dfs(i + 1, temp);             
        temp.pop();                   
      }
    };
  
    dfs(1, []); 
    return res;
  }

//   全排列
const permute = (nums) => {
    // 五毒
    const res = [];
    const used = {};
  
    function dfs(path) {
      if (path.length == nums.length) {
        res.push(path.slice());
        return;
      }
      for (const num of nums) {
        // if (path.includes(num)) continue; // 查找的时间是O(n)，别这么写，时间复杂度增加
        if (used[num]) continue;
        path.push(num);
        used[num] = true;
        dfs(path);
        path.pop();
        used[num] = false;
      }
    }
  
    dfs([]);
    return res;
  };

//   105
var buildTree = function(preorder, inorder) {
    // 五毒
    pre = i = 0
    build = function(stop) {
        if (inorder[i] != stop) {
            var root = new TreeNode(preorder[pre++])
            root.left = build(root.val)
            i++
            root.right = build(stop)
            return root
        }
        return null
    }
    return build()
};