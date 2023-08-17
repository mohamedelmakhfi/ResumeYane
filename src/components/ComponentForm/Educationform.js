import React from 'react'

const Educationform = ({ education, handleEducationChange, addEducation, removeEducation }) => {
  return (
    <div className="row mt-5">
    <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
      <span>Education</span>
      <span className="border px-2 btnhov add-experience" onClick={addEducation}>
        <i className="fa fa-plus"></i>
      </span>
      <span className="border px-2 btnhov add-experience" onClick={removeEducation}>
        <i className="fa fa-minus"></i>
      </span>
    </div>
    <br />
    
    {education.map((edu, index) => (
      <React.Fragment key={index}>
        <div className="col-md-6">
          <label className="labels">School {index + 1}</label>
          <input
            type="text"
            className="form-control"
            placeholder="School"
            value={edu.school}
            onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="labels">Degree</label>
          <input
            type="text"
            className="form-control"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
          />
        </div>
        
        <div className="col-md-6">
          <label className="labels">Start Date</label>
          <input
            type="date"
            className="form-control"
            value={edu.startDate}
            onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="labels">End Date</label>
          <input
            type="date"
            className="form-control"
            value={edu.endDate}
            onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
          />
        </div>
      </React.Fragment>
    ))}
</div>
  )
}

export default Educationform