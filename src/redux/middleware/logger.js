const logger = store => next => action => {
  console.group(action.type);
  console.log('The action : ', action);
  const res = next(action);
  console.log('The new state : ', store.getState());
  console.groupEnd();
  return res;
};

export default logger;
