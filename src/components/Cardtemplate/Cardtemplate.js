import { Link } from 'react-router-dom'
import './Cardtemplate.css'
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';



const Cardtemplate = (props) => {
  const {currentUser} = useContext(AuthContext);
  const user = currentUser;
  
  return (
    <>
    {user === null ? (
      <>
      <div  className="col-md-4 mb-4">
            <div
              className={`card text-black bg-blue`}
              style={{ height: '450px', position: 'relative', overflow: 'hidden' }}>

              <img
                id={props.id}
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
    ) : (
      <div  className="col-md-4 mb-4">
            <div
              className={`card text-black bg-blue`}
              style={{ height: '450px', position: 'relative', overflow: 'hidden' }}>

              <img
                id={props.id}
                src={props.imageUrl}
                alt={`Template `}
                className="card-img"
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <div className="overlay d-flex align-items-center justify-content-center">
              <button className="btn template btn-primary" >Create this resume</button>              
              </div>
            </div>
      </div>
      
    )}
    </>
   
          

    
  )
}

export default Cardtemplate