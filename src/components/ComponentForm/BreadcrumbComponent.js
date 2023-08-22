import React from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

const BreadcrumbComponent = ({ name }) => {
  return (
    <MDBRow>
      <MDBCol>
        <MDBBreadcrumb className="bg-white rounded-3 mt-4 p-3 mb-4 border border-primary">
          <MDBBreadcrumbItem>
            <Link to="/">Home</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>User profile</MDBBreadcrumbItem>
          <MDBBreadcrumbItem>{name}</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </MDBCol>
    </MDBRow>
  );
};

export default BreadcrumbComponent;
