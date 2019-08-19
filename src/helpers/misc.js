export const operatorsLooper = matches => {
  const operatorsArray = [];
  const data = Object.keys(matches).map(key => {
    operatorsArray.push({
      ...matches[key],
      id: key
    });
  });
  //const LastSixMactches = matchesArray.slice(6, 12);
  //const mactchesToReturn = reverseArray(LastSixMactches);

  return operatorsArray;
};

export const filterOperators = (operators, query) => {
  let operatorsArray = operatorsLooper(operators);
  let operatorsToReturn = [];
  if (query) {
    operatorsToReturn = operatorsArray.filter(operator => {
      if (operator.name === query ||
        operator.id === query ||
        operator.contactName === query) {
        return true;
      } else {
        return false
      }

    });
  }
  else{
    operatorsToReturn = operatorsArray;
  }

  return operatorsToReturn;
}
