import { Link } from 'react-router-dom'
import './Cardtemplate.css'

const Cardtemplate = (props) => {
  return (
    <>
        
          <div  className="col-md-4 mb-4">
            <div
              className={`card text-black bg-blue`}
              style={{ height: '450px', position: 'relative', overflow: 'hidden' }}>

              <img
                src={props.imageUrl}
                alt={`Template `}
                className="card-img"
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <div className="overlay d-flex align-items-center justify-content-center">
                <Link to="/Login" className="btn template btn-primary">Create this resume</Link>
              </div>
            </div>
          </div>

    </>
  )
}

export default Cardtemplate