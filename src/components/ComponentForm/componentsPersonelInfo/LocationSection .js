import React from 'react';

const LocationSection = ({ country, setCountry, state, setState }) => {
  return (
    <div className="row mt-4">
        <div className="col-md-6">
          <label className="labels">Country</label>
          <input
            type="text"
            className="form-control"
            placeholder="country"
            required
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </div>
        <div className="col-md-6">
          <label className="labels">State/Region</label>
          <input
            type="text"
            className="form-control"
            placeholder="state"
            required
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </div>
      </div>
  );
};

export default LocationSection;
