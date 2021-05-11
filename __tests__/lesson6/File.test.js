import File from '../../src/lesson6/File.js';
import NotExistsError from '../../src/lesson6/errors/NotExistsError.js';

test('Read', () => {
  const file = new File('/etc/fstab');
  expect(() => file.read()).not.toBeFalsy();
});

test('NotExistsError', () => {
  const file = new File('/etc/wopwop');
  expect(() => file.read()).toThrow(NotExistsError);
});

test('NotReadableError', () => {
  const file = new File('/etc/shadow');
  expect(() => file.read()).toThrow();
});
