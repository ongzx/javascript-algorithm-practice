/**
 * palingdrome checker
 * check if a string is palingdrome eg radar, goog
 * remove first char and pop the last char and compare
 */
function palingdromeChecker(aString) {
    
    var stringArr = aString.split("");
    var isPalingdrome = false;
    
    while(stringArr.length > 1) {
           
      if (stringArr.pop() === stringArr.shift()) {
        isPalingdrome = true;
      }
      else {
        isPalingdrome = false;
      }
    }
    
    return isPalingdrome;
    
  }