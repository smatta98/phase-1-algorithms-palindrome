function isPalindrome(word) {

let wordLength = word.length

for(let i = 0; i < (wordLength/2); i++) {
    let character = word[i];
    let mirrorCharacter = word[wordLength - i -1]
    console.log(character,mirrorCharacter)

    if (character !== mirrorCharacter) {
      return false;
    }
  
}
    return true;
}

console.log(isPalindrome("robot"))
// function palindromeTwo(string) {
//   let arrayOriginal = [...string]
// }

/* l
  Add your pseudocode here
  
  Must take a string then turn it into an array and then iterate through the array and compare the original array to new array mirror image 
  if every index is equal then it must return true


  for each character in "first half of word":
    if character != mirror_character:
      return False
  return True

*/ 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
