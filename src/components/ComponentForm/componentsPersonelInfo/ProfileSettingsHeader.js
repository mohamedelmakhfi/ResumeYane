import React from 'react';
import './stylePersoInfo.css';

const ProfileSettingsHeader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4 className="text-right custom-title">
        <span className="difcolor btnhov strong">Profile </span>Settings
      </h4>
    </div>
  );
};

export default ProfileSettingsHeader;
