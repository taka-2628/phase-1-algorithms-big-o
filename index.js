// TIME COMPLEXITY EXAMPLE
function average(array) {
    // 1 step
    let total = 0;
  
    for (const num of array) {
      // n steps (dependent on the size of the array)
      total += num;
    }
  
    // 1 step
    return total / array.length;
}

// SPACE COMPLEXITY EXAMPLE
function reverseString(word) {
    const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join("");
    return reversedWord;
}