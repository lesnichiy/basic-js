const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if ( date === undefined) {
    return 'Unable to determine the time of year!';
  }  else if ( !(Object.prototype.toString.call(date) === '[object Date]') ) {
    throw  new Error('Wrong');
  }else {
    const month = date.getMonth();
    if ( month >= 2 && month <= 4 ) {
      return 'spring';
    } else if ( month >= 5 && month <= 7 ) {
      return 'summer';
    } else if (month >= 8 && month <= 10) {
      return 'autumn';
    } else {
      return 'winter';
    }
  }
};
