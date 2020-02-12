const findSmallest = (items) => {
  let idx = 0;
  let smallest = items[0];

  for (let i = 1; i < items.length; i += 1) {
    const item = items[i];

    if (item < smallest) {
      smallest = item;
      idx = i;
    }
  }

  return idx;
};

const selectionSort = (items) => {
  const iterSelectionSort = (innerItems, acc) => {
    if (innerItems.length === 0) {
      return acc;
    }

    const smallestIdx = findSmallest(innerItems);
    const isEqualIdx = (_, idx) => idx !== smallestIdx;

    return iterSelectionSort(innerItems.filter(isEqualIdx), [
      ...acc,
      innerItems[smallestIdx]
    ]);
  };

  return iterSelectionSort(items, []);
};

module.exports = selectionSort;
