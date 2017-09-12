/**
 * Check the balance of parenthesis "({[]})"
 * @param {*} symbolString 
 */
function parenthesisChecker(symbolString) {
    let symbolStack = [];
    let balance = true;
    
    for (var i = 0; i< symbolString.length; i++) {
      let symbolChar = symbolString.charAt(i);
      if (symbolChar === "(" || symbolChar === "{" || symbolChar === "[") {
        symbolStack.push(symbolChar);
      } else {
        if (symbolStack.length == 0) {
          balance = false;
        } else {
          let lastSymbol = symbolStack.pop();
          if (matcher(symbolChar, lastSymbol)) {
            balance = true;
          } else {
            balance = false;
          }
        }
      }
    }
    
    if (balance && symbolStack.length === 0) {
      return true;
    } else {
      return false;
    }
    
}
  

/**
 * Convert decimal number to binary
 * divide decimal by 2 and take remainder put it in stack
 * pop the stack to get the binary
 * @param {*} decNum 
 */
function decToBinary(decNum) {
    
    let binStack = [];
    let binString = "";
    
    while (decNum > 0) {
      binStack.push(decNum % 2);
      decNum = Math.floor(decNum / 2);
    }
    
    while (binStack.length > 0) {
      binString += binStack.pop();
    } 
        
    return binString;
}
  
/**
 * Convert any decimal number by any base to get binary, octal, hexadecimal
 * @param {*} decNumber 
 * @param {*} base 
 */
function baseConverter(decNumber, base) {
    let digits = "0123456789ABCDEF";
    let numStack = [];
    let resultStr = "";
    
    while (decNumber > 0) {
      numStack.push(decNumber % base);
      decNumber = Math.floor(decNumber/base);
    }
    
    while (numStack.length > 0) {
      resultStr += digits[numStack.pop()];
    }
    
    return resultStr;
}
  
