// check if two strings are anagram of each other
function isAnagram(firstWord, secondWord) {
    let firstWordArr = firstWord.toLowerCase().split('').sort().join('');
    let secondWordArr = secondWord.toLowerCase().split('').sort().join('');
    return firstWordArr === secondWordArr;
}

console.log(isAnagram('Army', 'Mary'));