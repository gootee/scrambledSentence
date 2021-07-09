import './Sentence.css'

const Sentence = (props) => {
  const { className, text } = props
  return <p className={ className } >{ text }</p>
}

export default Sentence