import React, { useContext } from 'react'
import { FaRegCircleDown } from 'react-icons/fa6';
import { AuthContext } from '../../context/AuthContext';

const ProfileImageForm = ({ file, imgUrl, setFile , handleLogout , setCurrentStep }) => {
  
  const {currentUser } = useContext(AuthContext);
  const userEmail = currentUser.email ;

  const handletemplate = (e) =>{
      e.preventDefault();
      setCurrentStep(10);
  }

  return (

          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img className="rounded-circle mt-5" width="150px" 
              src={ file ? URL.createObjectURL(file) : imgUrl }
              alt='profil'
            />

            <div className="formInput m-4">
              <label htmlFor="file">
                Image: <FaRegCircleDown /> 
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            <span className="text">{userEmail}</span>
            <span className='mt-2'><button className='btn btn-secondary' onClick={handleLogout}>Log out</button></span>
            <span className='mt-2'><button className='btn btn-secondary' onClick={handletemplate}>Template Setting</button></span>
            </div>
  )
}

export default ProfileImageForm