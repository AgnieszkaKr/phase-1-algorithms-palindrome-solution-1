function isPalindrome(word) {
  // Write your algorithm here
  const revers = (word) =>{
  let newWord = word.split('')
  newWord = newWord.reverse()
  newWord = newWord.join("")
  return newWord
  }

const reverseWord = revers(word)

  if (reverseWord === word){
    return true
  } else {
    return false
  }
  
}

isPalindrome("aga")

/* 
  Add your pseudocode here
  make a function 
    if word is palindrome
      return true 
    else 
      false

  mom => true
  dad => true
  book => false
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
