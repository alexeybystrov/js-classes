import fs from 'fs';

export default class FileInfo {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileStat = fs.statSync(filePath);
  }

  getSize() {
    return this.fileStat.size;
  }
}
