/**
 * Quick sort algorithm
 * @param {Array} arr - array of numbers that going to be sorted
 */
const quickSort = (arr) => {
  const size = arr.length;

  if (size < 2) {
    return arr;
  }

  const middle = Math.floor(size / 2);
  const pivot = arr[middle];

  const left = arr.filter((i, idx) => idx !== middle && i <= pivot);
  const right = arr.filter((i, idx) => idx !== middle && i > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = quickSort;
