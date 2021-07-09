// import { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main'
// import { getSentences } from '../sentence/sentenceServices'

function App() {
  // const [sentence, setSentence] = useState([])
  // const [scrambledSentence, setScrambledSentence] = useState([])

  // useEffect(() => {
  //   getSentences(setSentence, setScrambledSentence)
  // }, [])

  return (
    <div className="App">
      <Main />
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <p>{scrambledSentence}</p>
    //   </header>
    // </div>
  );
}

export default App;
