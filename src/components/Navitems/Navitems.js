import './Navitems.css'

const Navitems = (props) => {
  return (
    <li className='nav-item'>
        {props.children}
    </li>
  )
}

export default Navitems