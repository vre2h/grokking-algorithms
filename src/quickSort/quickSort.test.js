const quickSort = require('./quickSort');

test('should return empty array', () => {
  const actual = quickSort([]);
  const expected = [];

  expect(actual).toEqual(expected);
});

test('should sort array', () => {
  const actual = quickSort([1, -10, 200]);
  const expected = [-10, 1, 200];

  expect(actual).toEqual(expected);
});

test('should sort array with similar items', () => {
  const actual = quickSort([1, -10, 1, 0, 1, 200]);
  const expected = [-10, 0, 1, 1, 1, 200];

  expect(actual).toEqual(expected);
});
