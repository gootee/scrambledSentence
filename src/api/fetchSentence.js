import axios from 'axios'

const fetchSentence = async (sentenceNumber) => {
  const sentenceURL = "https://api.hatchways.io/assessment/sentences/" + sentenceNumber.toString()

  const { data } = await axios.get(sentenceURL)
  const { sentence } = data.data

  return sentence
}

export default fetchSentence