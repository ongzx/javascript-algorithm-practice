/**
 * Eliminate one member after every "num" rounds of shuffling
 * every round, remove the first entry and append to the last (pop and unshift)
 * after num round, remove by pop
 * when only left with 2 ppl, pop the first one out
 * @param {*} nameList - array
 * @param {*} num 
 */
function hotPotato(nameList, num) {
    var simQueue = [];
    for (var i = 0; i< nameList.length; i++) {
      simQueue.unshift(nameList[i]);
    }
        
    while(simQueue.length > 1) {
      for (var a = 0; a < num; a++) {
        simQueue.unshift(simQueue.pop());      
      }
      simQueue.pop();    
    }
    
    return simQueue.pop(); 
  
  }
    