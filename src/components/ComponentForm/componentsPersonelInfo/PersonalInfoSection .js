import React from 'react';
import './stylePersoInfo.css';


const PersonalInfoSection = ({ name, setName, surname, setSurname, profession, setProfession, phone, setPhone, address, setAddress, authEmail, profsummary, setProfsummary
}) => {
  return (
    <>
      <div className="row mt-2">
  <div className="col-md-6">
    <label className="labels">Name</label>
    <input
      type="text"
      className="form-control"
      placeholder="first name"
      required
      onChange={(e) => setName(e.target.value)}
      value={name}
    />
  </div>
  <div className="col-md-6">
    <label className="labels">Surname</label>
    <input
      type="text"
      className="form-control"
      placeholder="surname"
      required
      onChange={(e) => setSurname(e.target.value)}
      value={surname}
    />
  </div>
  <div className="col-md-6">
    <label className="labels">Profession</label>
    <input
      type="text"
      className="form-control"
      placeholder="profession"
      required
      onChange={(e) => setProfession(e.target.value)}
      value={profession}
    />
  </div>
</div>

<div className="row mt-3">
  <div className="col-md-12">
    <label className="labels">Mobile Number</label>
    <input
      type="text"
      className="form-control"
      placeholder="phone number"
      required
      onChange={(e) => setPhone(e.target.value)}
      value={phone}
    />
  </div>
  <div className="col-md-12">
    <label className="labels">Address</label>
    <input
      type="text"
      className="form-control"
      placeholder="enter address"
      required
      onChange={(e) => setAddress(e.target.value)}
      value={address}
    />
  </div>
  <div className="col-md-12">
    <label className="labels">Email ID</label>
    <input
      type="text"
      className="form-control"
      placeholder="email id"
      readOnly 
      required
      value={authEmail}
    />
  </div>
  <div className="col-md-12">
    <label className="labels">Professional Summary</label>
    <input
      className="form-control"
      required
      onChange={(e) => setProfsummary(e.target.value)}
      value={profsummary}
    />
  </div>
</div>

    </>
  );
};

export default PersonalInfoSection;
