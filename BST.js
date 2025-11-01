class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert (value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
            else if (value > current.value) {
                if(!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
            else {
                return;
            }
        }
    }
    search (value) {
        let current = this.root;
        while (current) {
            if (current.value === value) return true;
            if (value < current.value) current = current.left;
            if (value > current.value) current = current.right;
        }
        return false;
    }
    findMin(node = this.root) {
        if (!node) {
            return null;
        }
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }
    findMax(node = this.root) {
        if (!node) {
            return null;
        }
        while (node.right) {
            node = node.rigth;
        }
        return node.value;
    }
    inorder(node = this.root) {
        if (!node) return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.rigth);
    }
    preorder(node = this.root) {
        if (!node) return;
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }
    postorder(node = this.root) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }
    levelOrder() {
        const queue = [];
        if (this.root) queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    remove(value, node = this.root) {
        if (!node) return null;

        // Traverse left or right depending on value
        if (value < node.value) {
            node.left = this.remove(value, node.left);
        } else if (value > node.value) {
            node.right = this.remove(value, node.right);
        } else {
            // Found the node to delete

            // Case 1: Node with no children 
            if (!node.left && !node.right) {
                return null;
            }

            // Case 2: Node with only one child
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // Case 3: Node with two children
            // Find the smallest value in the right subtree (in-order successor)
            let minRight = this.findMin(node.right);
            node.value = minRight.value; // Replace node's value
            node.right = this.remove(minRight.value, node.right); // Remove duplicate
        }
        return node;
    }
    remove(value, node = this.root) {
        if(!node) return null;
        if (value < node.value) {
            node.left = this.remove(value, node.left);
        }
        else if (value > node.value) {
            node.right = this.remove(value, node.left);
        }
        else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            let minElem = this.findMin(node.right);
            node.value = minElem.value;
            node.right = this.remove(minRight.value,node.right)
        }
    }
    maxInEachSubtree(root) {
        if (!root) return;
        let result = [];
        function dfs(currentMax, node) {
            if(!node) return;
            currentMax = Math.max(currentMax,node.val);
            if (!node.left && !node.right) {
                result.push(currentMax);
            }
            dfs(node.left,currentMax);
            dfs(node.right,currentMax);
        }
        dfs(root,Infinity);
        return result;

    }
    rescursiveInsert(value) {
        this.root = _insert(this.root, value);
    }
        _insert(node,value) {
            if (node === null) return new Node(value);
            else if (value < node.value) {
                node.left = this._insert(node.left,value);
            }
            else {
                node.right = this._insert(node.right,value);
            }
            return node;
        }
        getHeight(node) {
            if (!root) return null;
            const left = this.getHeight(root.left);
            const right = this.getHeight(root.right);
            return Math.max(this.left,this.right) + 1;
        }
    }

binaryTree = new BST();
binaryTree.insert(11);
binaryTree.insert(6);
binaryTree.insert(5);
binaryTree.insert(45);
binaryTree.levelOrder()
