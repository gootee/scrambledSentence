import './Word.css'
import Letter from '../Letter'
import Space from '../Space'

const Word = (props) => {
  const { word, lastWord, firstWord, guessReducer, sentence, wordIndex } = props
  let space = ""
  if (!lastWord) {
    space = <Space letter=" " className={"space"} guessReducer={guessReducer} guessIndex={`${word}_`} sentence={ sentence }/>
    guessReducer("add", word + "_")
  }

  let letters = word
    .split("")
    .map((letter, index) => { 
      const className = (index === 0 & firstWord) 
        ? "letter firstFocus" 
        : "letter"

      const guessIndex = word + index.toString()
      guessReducer("add", guessIndex)
      const key = wordIndex.toString() + "-" + index.toString()

      return <Letter 
        letter={ letter } 
        key={ key }
        className={ className } 
        guessReducer={ guessReducer }
        guessIndex={ guessIndex }
        sentence={ sentence }
        letterIndex= { index }
        word={ word }
      />
    })

  return <div className="word">
    { letters }
    { space }
  </div> 
}

export default Word