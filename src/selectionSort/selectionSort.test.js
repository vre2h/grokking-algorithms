const selectionSort = require('./selectionSort');

test('should return empty array', () => {
  const items = [];

  const expected = [];

  expect(selectionSort(items)).toEqual(expected);
});

test('should sort', () => {
  const items = [10, 3, 4, -2, 323];

  const expected = [-2, 3, 4, 10, 323];

  expect(selectionSort(items)).toEqual(expected);
});
