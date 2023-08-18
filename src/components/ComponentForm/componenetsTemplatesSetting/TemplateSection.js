import React from 'react';
import { db } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const TemplateSection = ({ numResume, setNumresume, resumeTemplates, prevResume, nextResume , userId}) => {


  const handleAdd = async(e , templateId) => {
    e.preventDefault();
    try {
    await setDoc(doc(db , "resume" , userId), {
      resumeNbr : templateId
    })
    setNumresume(templateId);
  }catch (error){
    console.log(error);
  }
  }

  return (
    <div className="pagination-buttons">
      <button onClick={prevResume} disabled={numResume === 1}>
        Précédent
      </button>
      {resumeTemplates.map(template => (
        <button
          key={template.id}
          onClick={(e) => handleAdd(e, template.id)}
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