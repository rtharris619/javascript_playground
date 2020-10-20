class BSTNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    const node = this.root;
    if (node === null) {
      this.root = new BSTNode(data);
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.data) { // go left
          if (node.left === null) { // no nodes on the left then insert at that position
            node.left = new BSTNode(data);
            return;
          } else if (node.left !== null) { // node found on the left so keep going left
            return searchTree(node.left);
          }
        } else if (data > node.data) { // go right
          if (node.right === null) { // no nodes on the right then insert at that position
            node.right = new BSTNode(data);
            return;
          } else if (node.right !== null) { // node found on the right so keep going right
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMinNode() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMaxNode() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  findNode(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current.data;
  }

  // depth first search
  // <root> <left> <right>
  preOrderTraversal() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      const traverse = (node) => {
        result.push(node.data);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
      };
      traverse(this.root);
      return result;
    }
  }

  // depth first search
  // <left> <root> <right>
  inOrderTraversal() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      const traverse = (node) => {
        node.left && traverse(node.left);
        result.push(node.data);
        node.right && traverse(node.right);
      };
      traverse(this.root);
      return result;
    }
  }

  // depth first search
  // <left> <right> <root>
  postOrderTraversal() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      const traverse = (node) => {
        node.left && traverse(node.left);
        node.right && traverse(node.right);
        result.push(node.data);
      };
      traverse(this.root);
      return result;
    }
  }
}

const bstTestCase1 = () => {
  const bst = new BST();
  bst.addNode(9);
  bst.addNode(4);
  bst.addNode(17);
  bst.addNode(3);
  bst.addNode(6);
  bst.addNode(22);
  bst.addNode(5);
  bst.addNode(7);
  bst.addNode(20);
  bst.addNode(10);
  console.log('Postorder: ', bst.postOrderTraversal());
}

module.exports.bstTestCase1 = bstTestCase1;
