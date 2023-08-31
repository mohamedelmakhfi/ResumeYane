// HobbiesForm.js
import React from 'react';

const HobbiesForm = ({ hobbies, setHobbies}) => {

  const addHobby = () => {
    setHobbies(prevHobbies => [...prevHobbies, '']);
  };

  const removeHobby = () => {
    if (hobbies.length > 0) {
      setHobbies(prevHobbies => prevHobbies.slice(0, hobbies.length - 1));
    }
  };

  const handleHobbyChange = (index, value) => {
    setHobbies(prevHobbies => {
      const newHobbies = [...prevHobbies];
      newHobbies[index] = value;
      return newHobbies;
    });
  };
  return (
    <div className="row p-3">
      <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
        <span>Hobbies</span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={addHobby}>
          <i className="fa fa-plus"></i>
        </span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={removeHobby}>
          <i className="fa fa-minus"></i>
        </span>
      </div>
      <br />
      {hobbies.map((hobby, index) => (
        <div className="col-md-6" key={index}>
          <label className="labels">Hobby {index + 1}</label>
          <input
            type="text"
            className="form-control"
            placeholder="Hobby"
            value={hobby}
            onChange={(e) => handleHobbyChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default HobbiesForm;
