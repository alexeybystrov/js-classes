import path from 'path';
import SmartFileInfo from '../src/lesson4/SmartFileInfo.js';

const filePath = path.resolve('Makefile');

test('GetSize', () => {
  const file = new SmartFileInfo(filePath);
  expect(file.getSize()).toBe(45);
  expect(file.getSize('b')).toBe(45);
  expect(file.getSize('kb')).toBe(0.0439453125);
});

test('Exception', () => {
  const file = new SmartFileInfo(filePath);
  expect(() => file.getSize('udav')).toThrow();
});
