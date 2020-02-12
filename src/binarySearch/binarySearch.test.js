const binarySearch = require('./binarySearch');

test('find existing item', () => {
  const items = [1, 2, 3, 4, 5];

  const expected = 2;

  expect(binarySearch(items, 3)).toBe(expected);
});

test('find existing item on the end', () => {
  const items = [1, 2, 3, 4, 5];

  const expected = 4;

  expect(binarySearch(items, 5)).toBe(expected);
});

test('find existing item on the start', () => {
  const items = [1, 2, 3, 4, 5];

  const expected = 0;

  expect(binarySearch(items, 1)).toBe(expected);
});

test('find non-existing item', () => {
  const items = [1, 2, 3, 4, 5];

  const expected = null;

  expect(binarySearch(items, 10)).toEqual(expected);
});
