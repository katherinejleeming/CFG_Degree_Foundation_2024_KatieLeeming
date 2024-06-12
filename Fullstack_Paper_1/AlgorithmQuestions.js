
// To run this file
// type "node AlgorithmQuestions.js" on terminal in current file directory 


// TASK 1 

const isPalindrome  = (word) => {
  return true 
}

console.log(isPalindrome("abcdcba")) // TRUE 
console.log(isPalindrome("aba")) // TRUE 
console.log(isPalindrome("c")) // TRUE
console.log(isPalindrome("radar")) // TRUE
console.log(isPalindrome("level")) // TRUE 
console.log(isPalindrome("pencil")) // FALSE
console.log(isPalindrome("ark")) // FALSE
console.log(isPalindrome("aa")) // TRUE



// TASK 2

 const isMissing = (arrayInput) => {
    const missing = 0
    return `${missing} is missing`
}


console.log(isMissing([1, 2, 3, 4, 5])) // nothing is missing 
console.log(isMissing([4,5,1,3, 5, 6])) // 2 is missing 
console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // 4 is missing
console.log(isMissing([4,5,-1,3, 5])) // THROW ERROR Invalid input, non-numeric value detected 
console.log(isMissing([ 1, 3, 7, 5, 6, 2,'cfg' ])) // THROW ERROR Invalid input, non-numeric value detected
