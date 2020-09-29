const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if ( !Array.isArray(arr) ) {
    throw new Error('Parameter is not an Array!');
  } else {
    return arr.reduce( (resultArr, item, i, sourceArr) => {
      if ((sourceArr[i - 1] === '--discard-next')
            || (sourceArr[i + 1] === '--discard-prev')
            || item === '--discard-next'
            || item === '--discard-prev'
      ) {
        return resultArr;
      } else if (item === '--double-next'
                  && sourceArr[i + 1] !== undefined
      ) {
        return [ ...resultArr, sourceArr[i + 1] ];
      } else if (item === '--double-prev'
                  && sourceArr[i - 1] !== undefined
                  && sourceArr[i - 2] !== '--discard-next'
      ) {
        return [ ...resultArr, sourceArr[i - 1] ];
      } else if (item === '--double-next'
                  || item === '--double-prev'
      ) {
        return resultArr;
      } else {
        return [ ...resultArr, item];
      }
    }, []);
  }
};