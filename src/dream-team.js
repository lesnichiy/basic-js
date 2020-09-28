const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if ( Array.isArray(members) ) {
    return members.filter( item => typeof item === 'string' ).map( item => item.trim().toUpperCase()[0] ).sort().join('');
  } else {
    return false;
  }
};
