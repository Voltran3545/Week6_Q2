const removeFromArray = function (array, element) {
  //method-1: not optimal, works
  while (array.indexOf(element) !== -1) {
    array.splice(array.indexOf(element), 1);
  }
  return array;
  //method-2
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      array.splice(i, 1);
    }
  }
}

module.exports = removeFromArray
