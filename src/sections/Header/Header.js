import React, { useContext } from 'react';
import Navitems from '../../components/Navitems/Navitems';
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../context/AuthContext';




const Header = () => {
  
const {currentUser} = useContext(AuthContext);
const user = currentUser;

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark rounded">
        <div className="container">
          <div>
            <div id="logo"></div>
            <Link to="/" className="navbar-brand text-dark">Resume<span className='difcolor'>Yane</span></Link></div>
          <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center m-4 " style={{backgroundColor : "azure"}} id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <Navitems><Link to="/" className="nav-link text-dark">Home</Link></Navitems>
              {user === null && 
                <Navitems><Link to="/Templates" className="nav-link text-dark">ResumeTemplate</Link></Navitems>
              }
              <Navitems><Link to="/Contactus " className="nav-link text-dark">Contactus</Link></Navitems>
              
              {user === null && (
              <>
                <Navitems><Link to="/Login" className="nav-link text-dark">Login</Link></Navitems>
                <Navitems><Link to="/Signup" className="nav-link bg-primary text-white btn1">Signup</Link></Navitems>
              </>  
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
