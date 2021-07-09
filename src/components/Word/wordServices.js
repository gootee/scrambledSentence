export const scrambleWord = (word) => {
  let scrambledWord = []
  let middleLetters = []
  const letterArr = word.split("")

  if (letterArr.length > 2) {
    middleLetters = word
      .slice(1, word.length - 1)
      .split("")
  }

  for (let i=0; i<letterArr.length; i++) {
    if (i === 0 | i === letterArr.length - 1) {
      scrambledWord.push(letterArr[i])
    } else {
      const randIndex = Math.floor(Math.random() * middleLetters.length)
      scrambledWord.push(middleLetters.splice(randIndex, 1))
    }
  }

  return scrambledWord.join("")
}
