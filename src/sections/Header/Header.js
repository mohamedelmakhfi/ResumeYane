import React from 'react';
import Navitems from '../../components/Navitems/Navitems';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark rounded">
        <div className="container">
          <Link to="/" className="navbar-brand text-dark">ResumeYane</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
            <Navitems><Link to="/" className="nav-link text-dark">Home</Link></Navitems>
              <Navitems><Link to="/Templates" className="nav-link text-dark">ResumeTemplate</Link></Navitems>
              <Navitems><Link to="/Contactus " className="nav-link text-dark">Contactus</Link></Navitems>
              <Navitems><Link to="/Login" className="nav-link text-dark">login</Link></Navitems>
              <Navitems><Link to="/Signup" className="nav-link bg-primary text-white btn1">Singup</Link></Navitems>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
