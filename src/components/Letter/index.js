import './Letter.css'
import { useState, useEffect } from 'react'


const Letter = (props) => {
  const { letter, className, guessReducer, guessIndex, sentence, letterIndex } = props
  const [guess, setGuess] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    setGuess("")
    setIsCorrect(false)
  }, [letter, guessIndex, sentence])

  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    checkGuess(value, letter)    
    setGuess(value)
  }

  const checkGuess = (guess, letter) => {
    if (guess.toLowerCase() === letter.toLowerCase()) {
      setIsCorrect(true)
      guessReducer("setGuessCorrect", guessIndex, true)
    } else {
      setIsCorrect(false)
      guessReducer("setGuessCorrect", guessIndex, false)
    }
  }

  const nextGuess = (e) => {
    e.preventDefault()
    if (e.keyCode !== 13 && e.target.nextElementSibling) {
      e.target.nextElementSibling.focus()
    }
  }

  return <input 
    autoFocus={ letterIndex === 0 }
    className={ className } 
    maxLength="1" 
    value={guess}
    type="text"
    onChange={handleChange}
    onKeyUp={nextGuess}
    style={isCorrect ? {backgroundColor: '#4caf50'} : {backgroundColor: '#e1e1e1'}}
  />
}

export default Letter