// SkillForm.js
import React from 'react';

const SkillForm = ({ skills, setSkills }) => {

  const addSkill = () => {
    setSkills([...skills, { skill: '', level: 0 }]);
  };
  
  const removeSkill = () => {
    if (skills.length > 0) {
      const updatedSkills = skills.slice(0, skills.length - 1);
      setSkills(updatedSkills);
    }
  };
  
  const handleSkillChange = (index, field, value) => {
    setSkills(prevSkills => {
      const newSkills = [...prevSkills];
      newSkills[index][field] = value;
      return newSkills;
    });
  };

  return (
    <div className="row p-3">
      <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
        <span>Skills and level</span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={addSkill}>
          <i className="fa fa-plus"></i>
        </span>
        {skills.length > 0 && (
        <span className="border px-2 difcolor btnhov add-experience" onClick={removeSkill}>
          <i className="fa fa-minus"></i>
        </span>)}
      </div>
      <br />
      {skills.map((skill, index) => (
        <React.Fragment key={index} >
          <div className="col-md-6 col-6">
            <label className="labels">Skill {index + 1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Skill"
              value={skill.skill}
              onChange={(e) => handleSkillChange(index, 'skill', e.target.value)}
            />
          </div>
          <div className="col-md-6 col-6">
            <label className="labels">Level</label>
            <select
              className="form-control"
              value={skill.level}
              onChange={(e) => handleSkillChange(index, 'level', e.target.value)}>
              <option value={0}>select ur level</option>
              <option value={40}>Beginner</option>
              <option value={55}>Intermediate</option>
              <option value={70}>Advanced</option>
              <option value={85}>Expert</option>
              <option value={100}>Master</option>
            </select>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SkillForm;
