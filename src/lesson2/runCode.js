const defaultCatcher = (err) => { throw err; };

export default (action, catcher = defaultCatcher) => {
  try {
    return action();
  } catch (err) {
    return catcher(err);
  }
};
