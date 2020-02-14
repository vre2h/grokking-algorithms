const { cloneDeep } = require('lodash');

const dfs = require('./dfs');

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

describe('dfs should', () => {
  test('find person', () => {
    const actual = dfs(data, 'andrew');

    expect(actual).toBeTruthy();
  });

  test("return false if there's no user", () => {
    const actual = dfs(data, 'vrezh');

    expect(actual).toBeFalsy();
  });

  test('dfs should not be in infinite cycle', () => {
    data = { ...data, jake: ['bob', 'vrezh'] };

    const actual = dfs(data, 'vrezh');

    expect(actual).toBeTruthy();
  });

  test('immutable', () => {
    dfs(data, 'andrew');

    expect(data).toEqual(deepClone);
  });
});
