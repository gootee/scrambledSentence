import './Space.css'
import { useState, useEffect } from 'react'

const Space = (props) => {
  const { letter, className, guessReducer, guessIndex, sentence } = props
  const [guess, setGuess] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    setGuess("")
    setIsCorrect(false)
  }, [letter, guessIndex, sentence])
  
  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    setGuess(value)
    checkGuess(value, letter)
  }

  const checkGuess = (guess, letter) => {
    const guessValue = guess.toLowerCase()
    const letterValue = letter.toLowerCase()
    guessReducer("setGuessCorrect", guessIndex, guessValue === letterValue)
    setIsCorrect(guessValue === letterValue) 
  }

  const nextGuess = (e) => {
    e.preventDefault()
    if (e.target.parentNode.nextElementSibling) {
      e.target.parentNode.nextElementSibling.firstChild.focus()
    }
  }

  return <input 
    autoFocus={ false }
    className={ className } 
    maxLength="1" 
    value={guess}
    type="text"
    onChange={handleChange}
    onKeyUp={nextGuess}
    style={isCorrect ? {backgroundColor: '#4caf50'} : {backgroundColor: "#ffb74d"}}
  />
}

export default Space