import React from 'react';
import Cardtemplate from '../../Cardtemplate/Cardtemplate';
import { templates } from '../../../data/Datatemp';

const templ = templates ;
const cards = templ.map((tmp) => {
  return <Cardtemplate key={tmp.id} id={tmp.id} imageUrl={tmp.imageUrl} /> 
})

const TemplateSection = ({ numResume, setNumresume, resumeTemplates, prevResume, nextResume }) => {
  return (
    <div className="pagination-buttons">
      <div className='Resumetmp'>
        <div className="container">
       <h1 className="text-center mb-4 text-white"><span style={{"color":"blue" ,"fontWeight":"bold"}}>Resume</span><span style={{"color":"black" ,"fontWeight":"bold"}} > Templates </span>:</h1>
        <hr style={{"backgroundColor":"white" , "height" : "10px" , "marginBottom" : "50px"}} />
        <div className="row justify-content-center align-items-center">
          {cards}
        </div>
    </div>
      </div>
    </div>
  );
};

export default TemplateSection;