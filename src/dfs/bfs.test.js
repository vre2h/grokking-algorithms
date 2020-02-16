const { cloneDeep } = require('lodash');

const bfs = require('./bfs');

let data;
let deepClone;

beforeEach(() => {
  data = {
    start: ['bob', 'jake'],
    bob: ['max', 'andrew'],
    jake: ['anna', 'mark'],
    mark: ['sedrick', 'andrew']
  };
  deepClone = cloneDeep(data);
});

describe('bfs should', () => {
  test('find person', () => {
    const actual = bfs(data, 'andrew');

    expect(actual).toBeTruthy();
  });

  test("return false if there's no user", () => {
    const actual = bfs(data, 'vrezh');

    expect(actual).toBeFalsy();
  });

  test('bfs should not be in infinite cycle', () => {
    data = { ...data, jake: ['bob', 'vrezh'] };

    const actual = bfs(data, 'vrezh');

    expect(actual).toBeTruthy();
  });

  test('immutable', () => {
    bfs(data, 'andrew');

    expect(data).toEqual(deepClone);
  });
});
