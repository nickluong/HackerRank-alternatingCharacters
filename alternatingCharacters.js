function alternatingCharacters(s) {
    //check if all A's, then return s.length-1
    //check if all B's, then return s.length-1
  
    let deletionCount = 0;
    let previousChar = s[0];
    let currentChar;
    
    for (let i = 1; i < s.length; i++) {
      currentChar = s[i]
  
      if (currentChar === previousChar) {
        deletionCount++
      } else {
        previousChar = currentChar
      }
    }
  
    return deletionCount;
  }
  
  
  console.log(alternatingCharacters("AAAA")) // 3
  console.log(alternatingCharacters("BBBBB")) // 4
  console.log(alternatingCharacters("ABABABAB")) // 0
  console.log(alternatingCharacters("BABABA")) // 0
  console.log(alternatingCharacters("AAABBB")) // 4