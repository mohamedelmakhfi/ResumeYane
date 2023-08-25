import React from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import './BreadcrumbComponent.css';

const BreadcrumbComponent = ({ name , handleLogout}) => {
  return (
    <MDBRow >
      <MDBCol>
        <MDBBreadcrumb className="bg-white rounded-3 text mt-4 p-3 mb-4 border border-primary">
          <MDBBreadcrumbItem><Link to="/" >Home</Link></MDBBreadcrumbItem>
          <MDBBreadcrumbItem >User profile</MDBBreadcrumbItem>
          <MDBBreadcrumbItem  >{name}</MDBBreadcrumbItem>
          <MDBBreadcrumbItem onClick={handleLogout}><span className='text difcolor' style={{cursor : 'pointer'}}>Log out</span></MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </MDBCol>
    </MDBRow>
  );
};

export default BreadcrumbComponent;
