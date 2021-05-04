export default (errorMessage) => {
  const error = new Error(errorMessage);
  error.isCustomError = true; // Подобные решения периодически встречаются в библиотеках
  return error;
};
