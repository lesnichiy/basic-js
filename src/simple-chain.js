const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],

  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chainArr.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chainArr = [ ...this.chainArr, `( ${value} )`];
    return this;
    }
  ,
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if ( !Number.isInteger(position)
        || this.chainArr[position - 1] === undefined
    ) {
      this.chainArr = [];
      throw new Error('Wrong position argument');
    } else {
      this.chainArr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let chainStr = this.chainArr.join('~~');
    this.chainArr = [];
    return chainStr;
  }
};

module.exports = chainMaker;
