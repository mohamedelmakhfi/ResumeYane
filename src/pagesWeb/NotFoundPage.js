import React from 'react';
import './NotFoundPage.css'; // Assurez-vous d'importer le fichier CSS
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="head">
        <div className="eye"></div>
        <div className="meta"></div>
        <div className="meta"></div>
        <div className="meta"></div>
      </div>
      <div className="body"></div>
      <Link to="/" className="btn btn-primary mt-3" >Back Home</Link>
    </div>
  );
};

export default NotFoundPage;
