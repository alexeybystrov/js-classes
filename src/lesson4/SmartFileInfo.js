import FileInfo from './FileInfo.js';

class SmartFileInfo extends FileInfo {
  getSize(units = 'b') {
    switch (units) {
      case 'b':
        return super.getSize();
      case 'kb':
        return super.getSize() / 1024;
      default:
        throw new Error('Error');
    }
  }
}

export default SmartFileInfo;
