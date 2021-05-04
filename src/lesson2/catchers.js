// BEGIN (write your solution here)
import AppError from './errors/AppError.js';
// END

export const appErrorCatcher = (errorHandler, errorInstance) => (error) => {
  // BEGIN (write your solution here)
  if (error instanceof AppError && error instanceof errorInstance) {
    return errorHandler(error);
  }
  throw error;
  // END
};

export const anyErrorCatcher = (errorHandler, errorInstance) => (error) => {
  // BEGIN (write your solution here)
  if (error instanceof errorInstance) {
    return errorHandler(error);
  }
  throw error;
  // END
};

export const customErrorCatcher = (errorHandler, errorInstance) => (error) => {
  // BEGIN (write your solution here)
  if (!errorInstance && error.isCustomError) {
    return errorHandler(error);
  }
  throw error;
  // END
};
