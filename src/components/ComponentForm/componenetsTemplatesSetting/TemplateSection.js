import React from 'react';

const TemplateSection = ({ numResume, setNumresume, resumeTemplates, prevResume, nextResume }) => {
  return (
    <div className="pagination-buttons">
      <button onClick={prevResume} disabled={numResume === 1}>
        Précédent
      </button>
      {resumeTemplates.map(template => (
        <button
          key={template.id}
          onClick={() => setNumresume(template.id)}
          disabled={numResume === template.id}
          className={numResume === template.id ? "active-template" : ""}
        >
          {template.name}
        </button>
      ))}
      <button onClick={nextResume} disabled={numResume === 4}>
        Suivant
      </button>
    </div>
  );
};

export default TemplateSection;
