export default class Redis {
  constructor() {
    this.elements = new Map();
  }

  get(key) {
    if (!this.elements.has(key)) {
      throw new Error(`Not found key "${key}"`);
    }
    return this.elements.get(key);
  }

  set(key, value) {
    this.elements.set(key, value);
  }

  count() {
    return this.elements.size;
  }
}
