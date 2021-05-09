/* eslint-disable class-methods-use-this */

// BEGIN (write your solution here)
class GoogleStorage {
  constructor(elements = {}) {
    this.elements = elements;
  }

  get(key) {
    return this.elements[key];
  }

  set(key, value) {
    this.elements[key] = value;
  }

  count() {
    throw new Error('Error');
  }
}
// END
export default GoogleStorage;
