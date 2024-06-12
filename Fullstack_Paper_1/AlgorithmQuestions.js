// To run this file
// type "node AlgorithmQuestions.js" on terminal in current file directory 


// TASK 1 
// function to check if the word is a palindrome
// takes any string value

const isPalindrome  = (word) => {
 word = word.toLowerCase().replace(/[^a-z0-9]/g, ''); // removes non-alphanumeric characters just in case
 var len = word.length;
 for (var i = 0; i < len/2; i++) {
   if (word[i] !== word[len - 1 - i]) {
       return false; // if the characters do not match, record false (not a palindrome) to log and exit the for loop
   }
 }
 return true; // if loop is successful record true to log
}

// test cases
console.log(isPalindrome("abcdcba")) // TRUE 
console.log(isPalindrome("aba")) // TRUE 
console.log(isPalindrome("c")) // TRUE
console.log(isPalindrome("radar")) // TRUE
console.log(isPalindrome("level")) // TRUE 
console.log(isPalindrome("pencil")) // FALSE
console.log(isPalindrome("ark")) // FALSE
console.log(isPalindrome("aa")) // TRUE

// Big O Time & Space complexity
// Current - Linear time complexity: O(n)
// chose this approach for scalability (using a for loop rather than built in functions)
// can iterate through quicker and more efficiently
// I would say this is the most efficient way I could achieve the same result



// TASK 2

function isMissing(arrayInput) {
  let n = arrayInput.length;
  let temp = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
      if (typeof arrayInput[i] !== 'number') {
          throw new Error('Invalid input, non-numeric value detected');
      }
      if (arrayInput[i] <= 0) {
        throw new Error('Invalid input, negative number detected');
    }
      temp[arrayInput[i] - 1] = 1;
  }
  
  for (let i = 0; i <= n; i++) {
      if (temp[i] === 0) {
        let missing = i + 1;
        return `${missing} is missing`;;
      }
  }

  throw new Error('Nothing is missing');
}

// test.cases
console.log(isMissing([1, 2, 3, 4, 5])) // nothing is missing 
console.log(isMissing([4,5,1,3, 5, 6])) // 2 is missing 
console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // 4 is missing
console.log(isMissing([4,5,-1,3, 5])) // THROW ERROR Invalid input, negative number detected
console.log(isMissing([ 1, 3, 7, 5, 6, 2,'cfg' ])) // THROW ERROR Invalid input, non-numeric value detected

// Big O Time & Space complexity
// Current - Linear time complexity: O(n)
// could use a sorting algorithm instead to reduce space complexity