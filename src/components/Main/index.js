import { useState, useEffect } from 'react';
import './Main.css';
import { getSentence } from '../Sentence/sentenceServices'
import Sentence from '../Sentence'
import Score from '../Score'
import Word from '../Word'
const guessText = "Guess the sentence! Start typing."
const yellowText = "The yellow blocks are meant for spaces"

export default function Main() {
  const [sentence, setSentence] = useState("")
  const [sentenceNumber, setSentenceNumber] = useState(1)
  const [score, setScore] = useState(0)
  const [sentenceCountForWin, setSentenceCountForWin] = useState(10)
  const [guesses, setGuesses] = useState({})
  const [isGameOver, setIsGameOver] = useState(false)
  const [scrambledSentence, setScrambledSentence] = useState("")

  const guessReducer = (action, guessIndex, payload) => {
    switch (action) {
      case "addIndex":
        if (!guesses[guessIndex]) {
          let newGuesses = {...guesses}
          newGuesses[guessIndex] = false
          setGuesses(newGuesses)
        }
        break
      case "setGuessCorrect":
        let newGuesses = {...guesses}
        newGuesses[guessIndex] = payload
        setGuesses(newGuesses)
        break
      default:
        break
    }
  }

  const userClicked = (e) => {
    e.preventDefault()
    setScore(score + 1)
    if (sentenceNumber < sentenceCountForWin) {
      const nextSentenceNumber = sentenceNumber + 1
      setSentenceNumber(nextSentenceNumber)
      setButtonVisibility(false)
      setGuesses({})
    } else {
      setIsGameOver(true)
    }
  }

  useEffect(() => {
    getSentence(setSentence, setScrambledSentence, sentenceNumber)
    const firstFocusNode = document.getElementsByClassName("firstFocus")
   
    if (firstFocusNode && firstFocusNode.length > 0) {
      firstFocusNode[0].focus()
    }
  }, [sentence, isGameOver, sentenceNumber])

  useEffect(() => {
    const guessValues = Object.values(guesses)
    if (sentence.length > 0 && guessValues.length === sentence.length && guessValues.indexOf(false) === -1) {
      setButtonVisibility(true)
    }
  },[guesses, sentence])

  const setButtonVisibility = (visible) => {
    let nextSentenceButton = document.getElementById("nextSentence")
    if (nextSentenceButton) {
      if (visible) {      
        nextSentenceButton.style.visibility = 'visible'
        nextSentenceButton.focus()  
      } else {
        nextSentenceButton.style.visibility = 'hidden'
      }      
    }
  }

  return (
    <div className="Main">
      <div className="top">
        {isGameOver & score === sentenceCountForWin ? <h1>You Win!!!</h1> : ""} 
        {isGameOver & score < sentenceCountForWin ? <h1>Try Again</h1> : ""}
        {isGameOver ? "" : <Sentence key="scrambledSentence" className="scrambledSentence" text={ scrambledSentence }/>}
        {isGameOver ? "" : <Sentence key="instructions1" className="instructions" text={ guessText }/>}
        {isGameOver ? "" : <Sentence key="instructions2" className="instructions" text={ yellowText }/>}
      </div>
      <div className="bottom">
        {isGameOver ? "" : <Score key="score" className="score" score={ score }/>}
        {isGameOver ? "" : 
          <div className="guess-inputs">
            { sentence
              .split(" ")
              .map((word, index, array) => 
                <Word 
                  word={ word } 
                  key={ word }
                  lastWord={ index === array.length - 1 }
                  firstWord={ index === 0}
                  wordIndex={ index }
                  guessReducer= { guessReducer }
                  sentence={ sentence }
                />
              ) 
            }          
          </div>  
        }
        {isGameOver ? 
          <div></div>
        : 
          <button
            id="nextSentence"
            style={{visibility: 'hidden'}}
            onClick={userClicked}
          >Next</button>
        }      
      </div>
    </div>
  );
}
