/**
 * Depth-first search
 * @param {any} tree - tree that needed to search
 * @param {string} searchedText - text that need to find in tree
 * @param {string} startNode - starting node
 * @returns {boolean} - is tree contains {@link searchedText}
 */
const dfs = (tree, searchedText, startNode = 'start') => {
  const queue = [...tree[startNode]];
  const searched = [];

  do {
    const item = queue.shift();
    const isChecked = searched.includes(item);

    if (item === searchedText && !isChecked) {
      return item;
    }
    searched.push(item);

    const childNodes = tree[item];

    if (childNodes) {
      queue.push(...tree[item]);
    }
  } while (queue.length > 0);

  return false;
};

module.exports = dfs;
