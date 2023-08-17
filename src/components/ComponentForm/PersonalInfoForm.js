// ProfileSettingsForm.js
import React from 'react';
import { LocationSection, PersonalInfoSection, ProfileSettingsHeader } from './componentsPersonelInfo/index';

const ProfileSettingsForm = ({ name, surname, profession, phone, address, authEmail, setEmail, profsummary, country, state, setName, setSurname, setProfession, setPhone, setAddress, setProfsummary, setCountry, setState,
}) => {
  return (
    <div>
      <ProfileSettingsHeader />

      {/* info personels */}
      <PersonalInfoSection name={name} setName={setName} surname={surname} setSurname={setSurname} profession={profession} setProfession={setProfession} phone={phone} setPhone={setPhone} address={address} setAddress={setAddress} authEmail={authEmail} setEmail={setEmail} profsummary={profsummary} setProfsummary={setProfsummary}/>

      {/* country */}
      <LocationSection country={country} setCountry={setCountry} state={state} setState={setState} />
    </div>
  );
};

export default ProfileSettingsForm;
