/*
 * Basic tree that stores a value.
 */

const Tree = function (value) {
  this.value = value;
  this.children = [];
};

// return an array of values for which the function filter(value, depth) returns true
Tree.prototype.BFSelect = function (filter) {
  const result = [];
  // create a queue
  const queue = [];
  // push the root to the queue
  queue.unshift(this);
  let depth = 0;
  // while queue is not empty
  while (queue.length) {
    // set the current size of the queue to be level size
    let levelSize = queue.length;
    // while level size is not zero
    while (levelSize) {
      // dequeue
      const node = queue.pop();
      levelSize -= 1;
      // if filter is true, push to the result
      if (filter(node.value, depth)) {
        result.push(node.value);
      }
      // push the children into the queue
      node.children.forEach((child) => {
        queue.unshift(child);
      });
    }
    depth += 1;
  }
  return result;
};

/**
   * You shouldn't need to change anything below here, but feel free to look.
    */

/**
    * check to see if the provided tree is already a child of this
    * tree __or any of its sub trees__
    */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  }
  for (let i = 0; i < this.children.length; i += 1) {
    if (this.children[i].isDescendant(child)) {
      // `child` is descendant of this tree
      return true;
    }
  }
  return false;
};

/**
        * add an immediate child
        * (wrap values in Tree nodes if they're not already)
        */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
     * remove an immediate child
    */
Tree.prototype.removeChild = function (child) {
  const index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

module.exports = Tree;
