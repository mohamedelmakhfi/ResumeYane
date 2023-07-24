import './Ansquestion.css'

const Ansquestion = (props) => {
  return (
    <div className='Thirdsec-text'>
        <p><strong>{props.question}</strong></p>
        <p>{props.answer}</p>
        <hr />
    </div>
  )
}

export default Ansquestion