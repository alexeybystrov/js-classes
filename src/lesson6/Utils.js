/* eslint-disable import/prefer-default-export */

import File from './File.js';

export const readFiles = (filepaths) => {
  const values = filepaths
    .map((filepath) => new File(filepath))
    .map((file) => {
      try {
        return file.read();
      } catch (error) {
        return null;
      }
    });

  return values;
};
