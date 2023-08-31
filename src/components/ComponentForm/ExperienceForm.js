// ExperienceForm.js
import React from 'react';

const ExperienceForm = ({ experience, setExperiences }) => {

  const addExperience = () => {
    setExperiences([...experience, { position: '', company: '', startDate: '', endDate: '', workSummary: '' }]);
  };

  const removeExperience = () => {
    if (experience.length > 0) {
      const updatedExperience = experience.slice(0, experience.length - 1);
      setExperiences(updatedExperience);
    }
  };

  const handleExperienceChange = (index, field, value) => {
    setExperiences(prevExperiences => {
      const newExperiences = [...prevExperiences];
      newExperiences[index][field] = value;
      return newExperiences;
    });
  };
  return (
    <div className="p-3 ">
      <div className="d-flex justify-content-between align-items-center experience difcolor btnhov ">
        <span>Experience</span>
        <span className="border px-2 add-experience" onClick={addExperience}>
          <i className="fa fa-plus"></i>
        </span>
        {experience.length > 0 && (
        <span className="border px-2 add-experience" onClick={removeExperience}>
          <i className="fa fa-minus"></i>
        </span>)}
      </div>

      <br />
      {experience.map((exp, index) => (
        <React.Fragment key={index}>
          <div className="col-md-12">
            <br />

            <label className="labels">Position Title {index + 1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Position Title"
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Company Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Start Date</label>
            <input
              type="date"
              className="form-control"
              value={exp.startDate}
              onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">End Date</label>
            <input
              type="date"
              className="form-control"
              value={exp.endDate}
              onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Work Summary</label>
            <input
              className="form-control"
              placeholder="Work Summary"
              value={exp.workSummary}
              onChange={(e) => handleExperienceChange(index, 'workSummary', e.target.value)}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ExperienceForm;
