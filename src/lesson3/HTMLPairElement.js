import HTMLElement from './HTMLElement.js';

class HTMLPairElement extends HTMLElement {
  toString() {
    const attr = this.stringifyAttributes();
    const tagName = this.getTagName();
    const body = this.getTextContent();
    return `<${tagName}${attr}>${body}</${tagName}>`;
  }

  getTextContent() {
    return this.body || '';
  }

  setTextContent(body) {
    this.body = body;
  }
}

export default HTMLPairElement;
