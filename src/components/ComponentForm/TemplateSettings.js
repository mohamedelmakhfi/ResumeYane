// TemplateSettings.js
import React, { useState } from 'react';
import ResumeComponent from './ResumeComponent';
import { fontOptions } from '../../data/Datatemp';
import  { ColorSection, FontSection, TemplateSection } from './componenetsTemplatesSetting/index'


const fontOption = fontOptions ;



const TemplateSettings = ({numResume, setNumresume, resumeTemplates, prevResume, nextResume ,
    name , surname , email , phone , address , state ,country ,education ,hobbies ,experience ,profession,
    certificates , profesummary ,languages ,skills ,file , imgUrl ,links ,projects ,userId
}) => {
    
    const [titleColor, setTitleColor] = useState('#A80000');
    const [Colortext1, setColortext1] = useState('#ffffff');
    const [background1color, setBackground1Color] = useState('#A80000');
    const [Colortext2,setColortext2]=useState('#000000');
    const [background2color,setBackground2Color] = useState('#ffffff');
    const [selectedFonttitre, setSelectedFont] = useState('Arial');

    const colorSections = [ {   id: 'titleColor',   label: 'Couleur du titre',   color: titleColor,   setColor: setTitleColor }, {   id: 'Colortext1',   label: 'Couleur du Texte 1',   color: Colortext1,   setColor: setColortext1 }, {   id: 'background1color',   label: 'Couleur de background 1',   color: background1color,   setColor: setBackground1Color }, {   id: 'Colortext2',   label: 'Couleur du Texte 2',   color: Colortext2,   setColor: setColortext2 }, {   id: 'background2color',   label: 'Couleur de background 2',   color: background2color,   setColor: setBackground2Color }];
      
    return (
        <div className='container rounded bg-light' >
        
        <div className='bg-white rounded-3 mt-4 p-3 mb-4 border border-primary'>
            <h3 className='text-center'><span className='difcolor'>Template Section</span></h3>
        <hr />
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Change Color Template</button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row row-cols-1 row-cols-md-5 text-center">
                  {colorSections.map((section, index) => (
                    <ColorSection key={index} id={section.id} label={section.label} color={section.color} setColor={section.setColor}/>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item ">
            <h2 className="accordion-header "><button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >Change font</button></h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <FontSection fonts={fontOption} selectedFont={selectedFonttitre} setSelectedFont={setSelectedFont} name={name} surname={surname} />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" > Change Template</button></h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <TemplateSection userId={userId} numResume={numResume} setNumresume={setNumresume} resumeTemplates={resumeTemplates} prevResume={prevResume} nextResume={nextResume} />
              </div>
            </div>
          </div>
       </div>
        </div> 

        <ResumeComponent name={name} surname={surname} email={email} phone={phone} address={address} state={state} country={country} education={education} experience={experience} profesummary={profesummary} hobbies={hobbies} languages={languages} skills={skills} file={file} imgUrl={imgUrl} certificates={certificates} links={links} projects={projects} profession={profession} titleColor={titleColor} Colortext1={Colortext1} background1color={background1color} Colortext2={Colortext2} background2color={background2color} selectedFonttitre={selectedFonttitre} numResume={numResume} />
        
        
        </div>
  );
};

export default TemplateSettings;
