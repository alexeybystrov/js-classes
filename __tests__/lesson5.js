import GoogleStorage from '../src/lesson5/GoogleStorage.js';

test('SetGet', () => {
  const storage = new GoogleStorage();
  storage.set('one', 'two');
  expect(storage.get('one')).toEqual('two');
});

test('Count', () => {
  const storage = new GoogleStorage();
  expect(() => storage.count()).toThrow();
});
