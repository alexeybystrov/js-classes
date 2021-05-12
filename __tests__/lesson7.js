import Application from '../src/lesson7/Application.js';
import Sanitizer from '../src/lesson7/Sanitizer.js';
import SanitizerStripTagsDecorator from '../src/lesson7/SanitizerStripTagsDecorator.js';

test('Sanitizer', () => {
  const sanitizer = new Sanitizer();
  const decorated = new SanitizerStripTagsDecorator(sanitizer);
  const app = new Application(decorated);
  expect(app.run('<p>text<p>')).toEqual('text');
  expect(app.run('  <hr>   another text ')).toEqual('another text');
});
