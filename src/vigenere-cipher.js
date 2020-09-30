const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(machineMod = true) {
    this.machineType = machineMod;
  }

  encrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if ( message === undefined || key === undefined) {
      throw new Error('Not all required parameters were passed');
    } else {
      message = message.toUpperCase();
      key = key.toUpperCase();

      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const ALPHABET_LENGTH = 26;
      const alphabetArr = alphabet.split('');
      const keyArr = key.split('');
      let vigenereMatrix = [];

      for (let i = 0; i < keyArr.length; i++) {
        let newAlphabetStr = [];
        for (let j = 0; j < ALPHABET_LENGTH; j++) {
          let currentIndex;
          if ( (j + alphabetArr.indexOf(keyArr[i])) >= ALPHABET_LENGTH) {
            currentIndex = j + alphabetArr.indexOf(keyArr[i]) - ALPHABET_LENGTH;
          } else {
            currentIndex = j + alphabetArr.indexOf(keyArr[i]);
          }
          newAlphabetStr.push(alphabetArr[currentIndex]);
        }
        vigenereMatrix.push(newAlphabetStr);
      }

      let encryptMessage = '';
      for (let i = 0, letterIndex = 0; i < message.length; i++) {
        if (/[A-Z]$/.test(message[i])) {
          let currentEncryptLetter = vigenereMatrix[letterIndex % key.length][alphabetArr.indexOf(message[i])];
          encryptMessage = `${encryptMessage}${currentEncryptLetter}`;
          letterIndex++;
        } else {
          encryptMessage = `${encryptMessage}${message[i]}`;
        }
      }

      return this.machineType ? encryptMessage : encryptMessage.split('').reverse().join('');
    }
  }
  decrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if ( message === undefined || key === undefined) {
      throw new Error('Not all required parameters were passed');
    } else {
      message = message.toUpperCase();
      key = key.toUpperCase();

      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const ALPHABET_LENGTH = 26;
      const alphabetArr = alphabet.split('');
      const keyArr = key.split('');
      let vigenereMatrix = [];

      for (let i = 0; i < keyArr.length; i++) {
        let newAlphabetStr = [];
        for (let j = 0; j < ALPHABET_LENGTH; j++) {
          let currentIndex;
          if ( (j + alphabetArr.indexOf(keyArr[i])) >= ALPHABET_LENGTH) {
            currentIndex = j + alphabetArr.indexOf(keyArr[i]) - ALPHABET_LENGTH;
          } else {
            currentIndex = j + alphabetArr.indexOf(keyArr[i]);
          }
          newAlphabetStr.push(alphabetArr[currentIndex]);
        }
        vigenereMatrix.push(newAlphabetStr);
      }

      let decryptMessage = '';

      for (let i = 0, letterIndex = 0; i < message.length; i++) {
        if (/[A-Z]$/.test(message[i])) {
          let currentDecryptLetter = alphabetArr[ vigenereMatrix[letterIndex % key.length].indexOf(message[i]) ];
          decryptMessage = `${decryptMessage}${currentDecryptLetter}`;
          letterIndex++;
        } else {
          decryptMessage = `${decryptMessage}${message[i]}`;
        }
      }

      return this.machineType ? decryptMessage : decryptMessage.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
