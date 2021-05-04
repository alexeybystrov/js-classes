import AppError from './errors/AppError.js';

export const appErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error instanceof AppError && error instanceof errorInstance) {
    return errorHandler(error);
  }
  throw error;
};

export const anyErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error instanceof errorInstance) {
    return errorHandler(error);
  }
  throw error;
};

export const customErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (!errorInstance && error.isCustomError) {
    return errorHandler(error);
  }
  throw error;
};
