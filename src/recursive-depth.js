const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let depthArr = 1;
    arr.forEach( item => {
      if ( Array.isArray(item) ) {
        let depthCurrentArr = 1;
        depthCurrentArr += this.calculateDepth(item);
        if (depthCurrentArr > depthArr) {
          depthArr = depthCurrentArr;
        }
      }
    });
    return depthArr;
  }
};