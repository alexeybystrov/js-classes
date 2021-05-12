export default class Application {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }

  run(text) {
    return this.sanitizer.sanitize(text);
  }
}
