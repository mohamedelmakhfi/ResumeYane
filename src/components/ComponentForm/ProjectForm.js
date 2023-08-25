// ProjectForm.js
import React from 'react';
import { projectTypes } from '../../data/Datatemp';

const projectType = projectTypes ;


const ProjectForm = ({ projects, addProject, removeProject, handleProjectChange }) => {
  
  return (
    <div className="row p-3">
      <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
        <span>Projects</span>
        <span className="border px-2 difcolor btnhov add-experience" onClick={addProject}>
          <i className="fa fa-plus"></i>
        </span>
        {projects.length > 0 && (
        <span className="border px-2 difcolor btnhov add-experience" onClick={removeProject}>
          <i className="fa fa-minus"></i>
        </span>)}
      </div>
      <br />
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <div className="col-md-12">
            <label className="labels">Project Name {index + 1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Project Name"
              value={project.projectName}
              onChange={(e) => handleProjectChange(index, 'projectName', e.target.value)}
            />
          </div>
          <div className="col-md-9">
            <label className="labels">Project Type</label>
            <select
              className="form-control"
              value={project.projectType}
              onChange={(e) => handleProjectChange(index, 'projectType', e.target.value)}>
              <option value="">Select Project Type</option>
              {projectType.map((type, typeIndex) => (
                <option key={typeIndex} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-12">
            <label className="labels">Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
            />
          </div><br /><br /><br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectForm;
