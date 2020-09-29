const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let resultStr = String(str);
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? String(options.separator) : '+';
  const addition = (options.addition !== undefined) ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? String(options.additionSeparator) : '|';
  let additionRepeatStr = ``;

  if ( additionRepeatTimes || addition ) {
    const additionRepeatArr = [];
    for (let i = 1; i <= additionRepeatTimes; i++) {
      additionRepeatArr.push(addition);
    }
    additionRepeatStr = additionRepeatArr.join(additionSeparator);
  }

  resultStr = `${resultStr}${additionRepeatStr}`;

  if ( resultStr || repeatTimes ) {
    const repeatArr = [];
    for (let i = 1; i <= repeatTimes; i++) {
      repeatArr.push(resultStr);
    }
    resultStr = repeatArr.join(separator);
  }

  return resultStr;
};
  