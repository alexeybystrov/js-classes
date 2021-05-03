import HTMLElement from './HTMLElement.js';

export default class HTMLHrElement extends HTMLElement {
  toString() {
    const attr = this.stringifyAttributes();
    return `<hr${attr}>`;
  }
}
