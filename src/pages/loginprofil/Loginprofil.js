import './Loginprofil.css' ;

import {
    MDBCol,
    MDBRow,
    MDBBreadcrumb,
    MDBBreadcrumbItem
  } from 'mdb-react-ui-kit';
  import { Link, useNavigate } from 'react-router-dom';
  import { signOut } from "firebase/auth";
  import { auth, db, storage } from '../../firebase';
  import React, { useContext, useEffect, useState } from 'react';
  import { AuthContext } from '../../context/AuthContext';
  import { FaRegCircleDown } from "react-icons/fa6";
  import { arrayUnion, doc, setDoc } from "firebase/firestore"; 
  import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"


const Loginprofil = () => {

  const {dispatch} = useContext(AuthContext);
  const {currentUser} = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(currentUser.uid);

  const userId = currentUser.uid;
  const userEmail = currentUser.email;


  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      dispatch({type:"LOGOUT"})
      alert('Sign-out successful.');
      navigate('/');

    }).catch((error) => {
      alert(error);
    });

  }



  return (
    <>

    </>
  )
}

export default Loginprofil