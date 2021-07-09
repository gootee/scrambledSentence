import fetchSentences from '../../api/fetchSentence';
import { scrambleWord } from '../Word/wordServices'

export async function getSentence(setSentence, setScrambledSentence, sentenceNumber) {
  const sentence = await fetchSentences(sentenceNumber)
  setSentence(sentence)

  const scrambledSentence = sentence
    .split(" ")
    .map((word) => {
      return scrambleWord(word)
    })
    .join(" ")
  setScrambledSentence(scrambledSentence)
}