import { Link } from 'react-router-dom';
import Cardtemplate from '../../components/Cardtemplate/Cardtemplate';
import { templates } from '../../data/Datatemp';
import { Header } from '../../sections';
import './Templates.css'

const Templates = () => {

  const templ = templates;
    
  

  const cards = templ.map((tmp) => {
      return <Cardtemplate  imageUrl={tmp.imageUrl} /> 
  })

  return (
    <>
    <Header />
    <div className='Resumetmp'>
    <div className="container mt-4 ">
       <h1 className="text-center mb-4 text-white"><span style={{"color":"blue" ,"fontWeight":"bold"}}>Resume</span> Templates :</h1>
        <hr style={{"backgroundColor":"white" , "height" : "10px" , "marginBottom" : "50px"}} />
        <div className="row justify-content-center align-items-center">
          {cards}
        </div>
        <div className="text-center text-white">
          <p>If you don't have an account, sign up:</p>
          <Link to="/signup" className="btn btn-primary" >
            Sign Up
          </Link>
        </div>
    </div>
    </div>
    </>
  );
};


export default Templates