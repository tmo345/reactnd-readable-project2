export const stateObjectToArray = state => {
  return Object.values(state).map(item => item);
};

export const stateArraytoObject = stateArray => {
  return stateArray.reduce((stateObject, item) => {
    stateObject[item.id] = item;
    return stateObject;
  }, {});
};
