const binarySearchTree = require('./binarySearchTree');

test('generates empty tree', () => {
  const instance = binarySearchTree();
  const data = instance.get();

  expect(data).toEqual({ node: null, left: null, right: null });
});

test('generates tree with node', () => {
  const instance = binarySearchTree({ node: 10 });
  const data = instance.get();

  expect(data).toEqual({ node: 10, left: null, right: null });
});

test('inserts data', () => {
  const instance = binarySearchTree({ node: 10 });

  instance.insert(2);
  instance.insert(-1);
  instance.insert(200);
  instance.insert(100);

  const result = instance.get();

  const expected = {
    node: 10,
    left: { node: 2, left: { node: -1, left: null, right: null }, right: null },
    right: {
      node: 200,
      left: { node: 100, left: null, right: null },
      right: null
    }
  };

  expect(result).toEqual(expected);
});

test('search for existing number', () => {
  const instance = binarySearchTree({ node: 10 });

  instance.insert(2);
  instance.insert(-1);
  instance.insert(200);
  instance.insert(100);

  const hasNumber = instance.search(200);

  expect(hasNumber).toBe(true);
});

test('search for non-existing number', () => {
  const instance = binarySearchTree({ node: 10 });

  instance.insert(2);
  instance.insert(-1);
  instance.insert(200);
  instance.insert(100);

  const hasNumber = instance.search(-1222);

  expect(hasNumber).toBe(false);
});

// test.skip("remove leaf item", () => {
//   const instance = binarySearchTree({ node: 10 });

//   instance.insert(2);
//   instance.insert(-1);
//   instance.insert(200);
//   instance.insert(100);
//   instance.remove(100);

//   const result = instance.get();

//   const expected = {
//     node: 10,
//     left: { node: 2, left: { node: -1, left: null, right: null }, right: null },
//     right: {
//       node: 200,
//       left: null,
//       right: null
//     }
//   };
//   console.log(result);
//   expect(result).toEqual(expected);
// });

test('is item leaf', () => {
  const instance = binarySearchTree({ node: 10 });

  instance.insert(2);
  instance.insert(-1);
  instance.insert(200);
  instance.insert(100);

  const result = instance.isLeaf(100);

  expect(result).toEqual(true);
});

test('is item non-leaf', () => {
  const instance = binarySearchTree({ node: 10 });

  instance.insert(2);
  instance.insert(-1);
  instance.insert(200);
  instance.insert(100);

  const result = instance.isLeaf(10);

  expect(result).toEqual(false);
});
