import * as Utils from '../../src/lesson6/Utils.js';

test('ReadFiles', () => {
  const values = Utils.readFiles([]);
  expect(values).toEqual([]);
});

test('ReadCorrectFiles', () => {
  const values = Utils.readFiles(['/etc/fstab', '/etc/shadow']);
  expect(values).toHaveLength(2);
});

test('ReadWrongFiles', () => {
  const values = Utils.readFiles(['/etc/shadow', '/opt/asdf']);
  expect(values[1]).toBeNull();
});
