
// I: root node, node1, node2

/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

// parts of question 

/*
var Tree = function() {
  this.children = [];
};


//  * add an immediate child
  
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};


//  * return the lowest common ancestor of the two child nodes.
//  * (assume for these examples that only a women can be the parent of a child)
//  * more examples:
//  *  1.) between me and my brother -> my mom
//  *  2.) between me and my cousin -> my grandma
//  *  3.) between my grandma and my grandma -> my grandma
//  *  4.) between me and a potato -> null
  
Tree.prototype.getClosestCommonAncestor = function(
) {
  // implement me!
};


 // * should return the ancestral path of a child to this node.
//  * more examples:
//  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
//  * 2.) mom.getAncestorPath(me) -> [mom, me]
//  * 3.) me.getAncestorPath(me) -> [me]
//  * 4.) grandma.getAncestorPath(H R Giger) -> null
  
Tree.prototype.getAncestorPath = function(
) {
  // implement me!
};


 // * check to see if the provided tree is already a child of this
  //* tree __or any of its sub trees__
  
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};


  //* remove an immediate child
  
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

*/

// ---------------------------
// solution: 

/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function(name) {
  this.children = [];
  this.name = name;
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(node1, node2
) {
  if (this !== node1 && !this.isDescendant(node2)) {
    // console.log('1');
    return null;
  }else if (this !== node2 && !this.isDescendant(node2)) {
    // console.log('2');
    return null;
  } else if (node1 === node2) {
    // console.log('3');
    return node1;
  } else if (node1.isDescendant(node2)) {
    // console.log('4');
    return node1;
  } else if (node2.isDescendant(node1)) {
    // console.log('5');
    return node2;
  } else {
    const rawResult = this.howManyNodesDoesTheSubTreeHave(node1,node2);
    // console.log('6');
    // console.log('number of nodes found:', rawResult[0]);
    return rawResult[1];
  }

};

Tree.prototype.howManyNodesDoesTheSubTreeHave = function(node1, node2) {
  // returns [number of nodes which are in the subtree, parent if found so far]
  let nodesFound = 0;
  let foundNodesInChild = 0
  for (let child of this.children) {
    if (child === node1 || child === node2) {
      nodesFound++;
    } else if (child.children.length !== 0) {
      // console.log('in here for mom');
      foundNodesInChild = child.howManyNodesDoesTheSubTreeHave(node1, node2);
      // console.log('for mom, foud children\'s nodes num :', foundNodesInChild );
      if (foundNodesInChild[0] === 2) {
        // console.log('foundNodesInChild: ', foundNodesInChild);
        return foundNodesInChild;
      } else {
        nodesFound += foundNodesInChild[0];
      }
    }
  }
  // console.log('nodesFound : ', nodesFound);

  if (nodesFound === 2) {
    return [2, this];
  } else {
    return [nodesFound, null];
  }
}

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(childNode
) {
  let solution = null;
  if (this === childNode) {
    // console.log('1');
    return [childNode.name];
  } else if (!this.isDescendant(childNode)) {
    // console.log('2');
    return null;
  } else {
    // console.log('3');
    for (let child of this.children) {
      let rawResult = child.getAncestorPath(childNode);
      if (rawResult) {
        // console.log('4');
        solution = [this.name];
        solution.push(...rawResult);
        return solution;
      }
    }
    // console.log('5');
    return solution;
  }

};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

//tests

// for closest Ancestor
var greatGrandma = new Tree('greatGrandma');
var grandma = new Tree('grandma');
greatGrandma.addChild(grandma);
var mom = new Tree('mom');
var aunt = new Tree('aunt');
var cuz = new Tree('cuz');
grandma.addChild(mom);
grandma.addChild(aunt);
aunt.addChild(cuz);
var me = new Tree('me');
var bro = new Tree('bro');
mom.addChild(me);
mom.addChild(bro);
/*
console.log(grandma.getClosestCommonAncestor(me,me) === me);
console.log(grandma.getClosestCommonAncestor(me,'onion') === null);
console.log(grandma.getClosestCommonAncestor(mom,me) === mom);
console.log(grandma.getClosestCommonAncestor(bro,me) === mom);
console.log(grandma.getClosestCommonAncestor(aunt,me) === grandma); 
console.log(grandma.getClosestCommonAncestor(cuz,me) === grandma);  
*/

// for ancestor path

console.log(greatGrandma.getAncestorPath(me)); // -> [great grandma, grandma, mom, me]
console.log(mom.getAncestorPath(me)); //-> [mom, me]
console.log(me.getAncestorPath(me)); //-> [me]
console.log(grandma.getAncestorPath('H R Giger')); //-> null
