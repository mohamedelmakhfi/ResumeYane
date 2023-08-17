import React, { useContext } from 'react'
import { FaRegCircleDown } from 'react-icons/fa6';
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../firebase';

const ProfileImageForm = ({ file, imgUrl, setFile }) => {
  
  const {currentUser } = useContext(AuthContext);
  const userEmail = currentUser.email ;

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
            <span className="text-primary">{userEmail}</span>
            </div>
  )
}

export default ProfileImageForm