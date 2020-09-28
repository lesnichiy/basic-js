const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const sampleActivityNumber = +sampleActivity;
  if( (typeof sampleActivity !== 'string')
      || isNaN(sampleActivityNumber)
      || (sampleActivityNumber <= 0 || sampleActivityNumber > 15)
  ) {
    return false;
  } else {
    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivityNumber)) / (0.693 / HALF_LIFE_PERIOD));
  }

};
