/**
 *
 * @constructor
 * @param {object} default - default node
 * @param {any} default.node - value of intitialized BST leaf
 */
const binarySearchTree = ({ node = null } = {}) => {
  /**
   * creates default BST leaf
   * @param {object} default - default BST data
   * @param {any} default.left - left part of BST leaf
   * @param {any} default.right - right part of BST leaf
   * @param {any} default.node - value of BST leaf
   */
  const createBasicStructure = ({
    left = null,
    right = null,
    node: innerNode
  }) => ({
    left,
    right,
    node: innerNode
  });

  const data = createBasicStructure({ node });

  /**
   * @returns BST structure
   */
  const get = () => data;

  /**
   * This callback type is called `lookUpCallback`
   * @callback lookUpCallback
   * @param {any} leaf - of the value that has been found
   */
  /**
   * maps over data and returns founded value's leaf to cb function
   * @param {any} value - the value that needed to be found
   * @param {lookUpCallback} fn
   */
  const lookUp = (value, fn) => {
    const iterLookUp = (innerValue, acc = {}) => {
      if (innerValue === acc.node) {
        return fn(acc);
      }

      const isLeft = acc.node > innerValue;
      const hasLeft = acc.left !== null;
      const hasRight = acc.right !== null;

      if (isLeft && !hasLeft) {
        return false;
      }
      if (!isLeft && !hasRight) {
        return false;
      }
      if (isLeft) {
        return iterLookUp(innerValue, acc.left);
      }
      if (!isLeft) {
        return iterLookUp(innerValue, acc.right);
      }

      return createBasicStructure();
    };

    return iterLookUp(value, data);
  };

  /**
   *
   * @param {any} value
   * @returns wheter BST has value or not
   */
  const search = (value) => {
    const isNodeEqual = (acc) => acc.node === value;
    return lookUp(value, isNodeEqual);
  };

  /**
   *
   * @param {any} value
   * @returns if value is a leaf
   */
  const isLeaf = (value) => {
    const hasLeftOrRight = (acc) =>
      acc.node !== null && acc.left === null && acc.right === null;
    return lookUp(value, hasLeftOrRight);
  };

  /**
   * inserts value to a BST
   * @param {any} value
   * @returns inserted value
   */
  const insert = (value = null) => {
    const iterInsert = (innerValue, acc = {}) => {
      const isLeft = acc.node >= innerValue;
      const hasLeft = acc.left !== null;
      const hasRight = acc.right !== null;

      if (hasLeft && isLeft) {
        return iterInsert(innerValue, acc.left);
      }
      if (hasRight && !isLeft) {
        return iterInsert(innerValue, acc.right);
      }
      if (!hasLeft && isLeft) {
        acc.left = createBasicStructure({ node: innerValue });
      }
      if (!hasRight && !isLeft) {
        acc.right = createBasicStructure({ node: innerValue });
      }

      return innerValue;
    };

    return iterInsert(value, data);
  };

  return {
    get,
    insert,
    search,
    isLeaf
  };
};

module.exports = binarySearchTree;
