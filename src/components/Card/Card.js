import './Card.css'


const Card = (props) => {
  return (
    <div className='card'>
        <h3 className='card-title'>{props.icon}<br /><br />{props.title}</h3>
        <p className='card-para'>{props.para}</p>
    </div>
  )
}

export default Card