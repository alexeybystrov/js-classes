import fs from 'fs';
import NotExistsError from './errors/NotExistsError.js';
import NotReadableError from './errors/NotReadableError.js';

class File {
  constructor(filepath) {
    this.filepath = filepath;
  }

  read() {
    const { filepath } = this;

    if (!fs.existsSync(filepath)) {
      throw new NotExistsError(`'${filepath}' does not exist`);
    }

    try {
      fs.accessSync(filepath, fs.constants.R_OK);
    } catch (e) {
      throw new NotReadableError(`'${filepath}' does not read`);
    }

    return fs.readFileSync(filepath);
  }
}
export default File;
