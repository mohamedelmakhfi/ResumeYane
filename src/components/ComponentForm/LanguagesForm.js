// LanguagesForm.js
import React from 'react';

const LanguagesForm = ({ languages, handleLanguageChange, addField, removeField }) => {
  return (
    <div className="row p-3">
      <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
        <span>Languages</span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={addField}>
          <i className="fa fa-plus"></i>
        </span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={removeField}>
          <i className="fa fa-minus"></i>
        </span>
      </div>
      <br />
      {languages.map((lang, index) => (
        <React.Fragment key={index}>
          <div className="col-md-6">
            <label className="labels">language {index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="language"
              value={lang.language}
              onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">proficiency</label>
            <input
              type="text"
              className="form-control"
              placeholder="proficiency"
              value={lang.proficiency}
              onChange={(e) => handleLanguageChange(index, 'proficiency', e.target.value)}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguagesForm;
