/**
 * Binary search is an algorithm for finding data in a sorted array in O(log n) time.
 * @param {Array} arr - array of numbers
 * @param {number} val - value that need to be found
 * @param {number} start - start position
 * @param {number} end - end position
 * @returns {Array} - sorted array
 */
const binarySearch = (arr, val, start = 0, end = arr.length - 1) => {
  const mid = Math.floor((start + end) / 2);

  if (start > end) {
    return null;
  }

  if (arr[mid] === val) {
    return mid;
  }

  if (arr[mid] > val) {
    return binarySearch(arr, val, 0, mid - 1);
  }

  return binarySearch(arr, val, mid + 1);
};

module.exports = binarySearch;
