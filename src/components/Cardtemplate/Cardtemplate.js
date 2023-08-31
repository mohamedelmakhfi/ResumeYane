import { Link, useNavigate } from 'react-router-dom'
import './Cardtemplate.css'
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';



const Cardtemplate = (props) => {

  const {currentUser} = useContext(AuthContext);
  const user = currentUser;
  
  //const [resumeNbr,setResumenbr] = useState(0);
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    try{
      //setResumenbr(props.id);
      await setDoc(doc(db , "resume" , currentUser.uid), {
        resumeNbr : props.id,
      })
      navigate('/Profilepage');
    }catch(error){
      alert("Submit échoué !");
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  }; 

  return (
    <>
    {user === null ? (
      <>
      <div className="col-md-4 mx-4 d-flex align-items-center justify-content-center ">
            <div className={`card carddd text-black bg-blue m-2`}>
              <img
                id={props.id}
                src={props.imageUrl}
                alt={`Template `}
                className="card-img"
                style={{  objectFit: 'cover' }}
              />
              <div className="overlay d-flex align-items-center justify-content-center">
                <Link to="/Login" className="btn template btn-primary">Create this resume</Link>
              </div>
            </div>
      </div>
      </>
    ) : (
      <div  className="col-md-4 mx-4 d-flex align-items-center justify-content-center ">
            <div className={`card  carddd text-black bg-blue`}>
              <img
                id={props.id}
                src={props.imageUrl}
                alt={`Template `}
                className="card-img"
                style={{  objectFit: 'cover' }}
              />
              <div className="overlay d-flex align-items-center justify-content-center">
              <button className="btn template btn-primary" onClick={handleAdd}>Create this resume</button>              
              </div>
            </div>
      </div>
      
    )}
    </>
   
          

    
  )
}

export default Cardtemplate