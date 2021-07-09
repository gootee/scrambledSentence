import './Score.css'

const Score = (props) => {
  const { className, score } = props
  return <div className={className}>{`Score: ${score}`}</div>
}

export default Score