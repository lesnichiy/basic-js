const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return matrix.reduce( (catsNumber, currentArr) => catsNumber + currentArr.filter( item => item === '^^').length, 0);
  //variant 2: matrix.flat().filter(item => item === '^^').length;
};
