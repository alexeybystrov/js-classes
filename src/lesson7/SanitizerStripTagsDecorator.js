import cheerio from 'cheerio';

const stripTags = (tagString) => {
  const $ = cheerio.load(tagString);
  return $.text();
};

class SanitizerStripTagsDecorator {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }

  sanitize(tag) {
    const strippedText = stripTags(tag);
    return this.sanitizer.sanitize(strippedText);
  }
}

export default SanitizerStripTagsDecorator;
