import FileError from '../../src/lesson6/errors/FileError.js';
import NotExistsError from '../../src/lesson6/errors/NotExistsError.js';
import NotReadableError from '../../src/lesson6/errors/NotReadableError.js';

test('Create NotExistsError', () => {
  const error = new NotExistsError('');
  expect(error).toBeInstanceOf(FileError);
});

test('Create NotReadableError', () => {
  const error = new NotReadableError('');
  expect(error).toBeInstanceOf(FileError);
});
