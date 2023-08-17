// ResumeComponent.js
import React from 'react';
import Resume1Component from '../Resume/Resume1Component';
import Resume2Component from '../Resume/Resume2Component';
import Resume3Component from '../Resume/Resume3Component';
import Resume4Component from '../Resume/Resume4Component';

const ResumeComponent = ({ name, surname, email, phone, address, state, country, education, experience, profesummary, hobbies, languages, skills, file, imgUrl, certificates, links, projects, profession, titleColor, Colortext1, background1color, Colortext2, background2color, selectedFonttitre, numResume
}) => {

  return (
    <div>
        { numResume === 1 && <Resume1Component name ={name}  surname={surname} email= {email} phone={phone} address={address} state={state} country={country} education={education} experience={experience} profesummary={profesummary} hobbies={hobbies} languages={languages} skills={skills} file={file} imgUrl={imgUrl} certificates={certificates} links={links} projects={projects} profession={profession} titleColor={titleColor} Colortext1={Colortext1} background1color={background1color} Colortext2={Colortext2} background2color={background2color} selectedFonttitre={selectedFonttitre}/> } 

        { numResume === 2 && <Resume2Component name ={name}  surname={surname} email= {email} phone={phone} address={address} state={state} country={country} education={education} experience={experience} profesummary={profesummary} hobbies={hobbies} languages={languages} skills={skills} file={file} imgUrl={imgUrl} certificates={certificates} links={links} projects={projects} profession={profession} titleColor={titleColor} Colortext1={Colortext1} background1color={background1color} Colortext2={Colortext2} background2color={background2color} selectedFonttitre={selectedFonttitre}/> }

        { numResume === 3 && <Resume3Component   name ={name}  surname={surname} email= {email} phone={phone}   address={address}  state={state}  country={country} education={education}   experience={experience}  profesummary={profesummary}  hobbies={hobbies} languages={languages}   skills={skills}  file={file}  imgUrl={imgUrl} certificates={certificates}   links={links}  projects={projects}  profession={profession} titleColor={titleColor}   Colortext1={Colortext1}  background1color={background1color}  Colortext2={Colortext2} background2color={background2color}   selectedFonttitre={selectedFonttitre}  /> }

        { numResume === 4 && <Resume4Component name ={name}  surname={surname} email= {email} phone={phone} address={address} state={state} country={country} education={education} experience={experience} profesummary={profesummary} hobbies={hobbies} languages={languages} skills={skills} file={file} imgUrl={imgUrl} certificates={certificates} links={links} projects={projects} profession={profession} titleColor={titleColor} Colortext1={Colortext1} background1color={background1color} Colortext2={Colortext2} background2color={background2color} selectedFonttitre={selectedFonttitre}/> }
    </div>
  );
};

export default ResumeComponent;
