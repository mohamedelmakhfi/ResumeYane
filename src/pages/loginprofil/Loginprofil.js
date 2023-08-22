import './Loginprofil.css' ;
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth, db, storage } from '../../firebase';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { doc, getDoc , runTransaction } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { BreadcrumbComponent, CertificatesForm, Educationform, ExperienceForm, HobbiesForm, LanguagesForm, LinksForm, PersonalInfoForm, ProfileImageForm, ProjectForm, ResumeComponent, SkillForm, TemplateSettings } from '../../components/ComponentForm/index';
import  { ColorSection, FontSection, TemplateSection } from '../../components/ComponentForm/componenetsTemplatesSetting/index'
import { fontOptions } from '../../data/Datatemp';

const Loginprofil = () => {
  
  const {dispatch} = useContext(AuthContext);
  const {currentUser} = useContext(AuthContext);
  
  const userId = currentUser.uid;
  const userEmail = currentUser.email;

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      dispatch({type:"LOGOUT"})
      alert('Sign-out successful.');
      navigate('/');

    }).catch((error) => {
      alert(error);
    });

  }

  /*********************** initialise data  ****************************/

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const email = userEmail;
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [profesummary, setProfsummary] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [file, setFile] = useState("");
  const [imgUrl, setImgurl] = useState('https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg');
  const [profession ,setProfession] = useState("");

  ///////////////////////////////////////
  const [per, setPer] = useState(null);
  //////////////////////////////////////

  //changement resume

  const [numResume, setNumresume] = useState(1);
  const nextResume = () => {
    if (numResume < 4) {
        setNumresume(prevNumResume => prevNumResume + 1);
    }
};

const prevResume = () => {
    if (numResume > 1) {
        setNumresume(prevNumResume => prevNumResume - 1);
    }
};

    const resumeTemplates = [
      { id: 1, name: "Resume 1" },
      { id: 2, name: "Resume 2" },
      { id: 3, name: "Resume 3" },
      { id: 4, name: "Resume 4" }
    ];

  /*********************** end initialise data  ****************************/

/**************************** get data ********************************** */


  const docUsers = doc(db,"users",userId);
  const docinfo = doc(db,"infoperson",userId);
  const dicResume = doc(db,"resume",userId);

  useEffect(()=> {  
    const fetchDonnees = async () => {
      try {
        
        const [donneesUtilisateurs, donneesPersonnelles, donneesCV] = await Promise.all([
          getDoc(docUsers),
          getDoc(docinfo),
          getDoc(dicResume)
        ]);
        
        const donneesUtilisateursFiltrees = donneesUtilisateurs.data();
        const donneesPersonnellesFiltrees = donneesPersonnelles.data();
        const donneesCVFiltrees = donneesCV.data();
  
        setHobbies(donneesUtilisateursFiltrees.hobbies);
        setSkills(donneesUtilisateursFiltrees.skills);
        setLanguages(donneesUtilisateursFiltrees.languages);
        setEducation(donneesUtilisateursFiltrees.education);
        setExperiences(donneesUtilisateursFiltrees.experience);
        setProjects(donneesUtilisateursFiltrees.projects);
        setCertificates(donneesUtilisateursFiltrees.certificates);

        setName(donneesPersonnellesFiltrees?.name || '');
        setSurname(donneesPersonnellesFiltrees?.surname || '');
        setPhone(donneesPersonnellesFiltrees?.phone || '');
        setAddress(donneesPersonnellesFiltrees?.address || '');
        setProfsummary(donneesPersonnellesFiltrees?.profesummary || '');
        setProfession(donneesPersonnellesFiltrees?.profession);
        setCountry(donneesPersonnellesFiltrees?.country || '');
        setState(donneesPersonnellesFiltrees?.state || '');
        setImgurl(donneesPersonnellesFiltrees?.img || 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg');
        setLinks(donneesPersonnellesFiltrees?.links );
  
        setNumresume(donneesCVFiltrees.resumeNbr);

      }catch (error) {
        console.error(error);
      }
    };
    fetchDonnees();
  },[])

  /**************************** End get data ********************************** */



  /******************************* copy ************************************************ */
  
  

  //********************** upload image *********************** */

    useEffect(()=> {
      const uploadFile = () => {
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setPer(progress);
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
              default  :
                break;
            }
          }, 
          (error) => {
            console.log(error);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImgurl(downloadURL) ;  
            });
          }
        );

      };
      file && uploadFile();
    },[file]);


  //********************** End upload image *********************** */


  const handleAdd = async (e) => {
    e.preventDefault();
    
    // Prepare the hobbies data in an array format
    const hobbiesData = hobbies.filter(hobby => hobby.trim() !== '');

    
    try {
      await runTransaction(db, async (transaction) => {
    
        transaction.update(docUsers,{
          certificates: certificates,
          projects: projects ,
          experience: experience,
          education: education,
          skills: skills,
          languages: languages,
          hobbies: hobbiesData,
        });
    
        transaction.update(docinfo, {
          name: name,
          surname: surname,
          email: userEmail,
          phone: phone,
          address: address,
          profesummary: profesummary,
          state: state,
          country: country,
          img: imgUrl,
          links: links,
          profession: profession,
        });
      });
    
      alert("Submit réussi !"); 
    }catch (error) {
      alert("Submit échoué !");
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };
  
  //**************************** skills parametrs *******************************

              const [skills, setSkills] = useState([{ skill: '', level: 0 },]);
              
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
  

  //**************************** End skills parametrs *******************************


/************************************* Projets parametrs *************************************/
           


        const [projects, setProjects] = useState([]);

        const addProject = () => {
          setProjects([...projects, { projectName: '', projectType: '', description: '' }]);
        };

        const removeProject = () => {
          if (projects.length > 0) {
            const updatedProjects = projects.slice(0, projects.length - 1);
            setProjects(updatedProjects);
          }
        };

        const handleProjectChange = (index, field, value) => {
          setProjects(prevProjects => {
            const newProjects = [...prevProjects];
            newProjects[index][field] = value;
            return newProjects;
          });
        };


/************************************* Projets parametrs *************************************/



/************************************   Certificats parametrs ****************************/
  




          const [certificates, setCertificates] = useState([{ company: '', certificateLink: '' },]);

          const addCertificate = () => {
            setCertificates([...certificates, { company: '', certificateLink: '' }]);
          };

          const removeCertificate = () => {
            if (certificates.length > 0) {
              setCertificates(certificates.slice(0, certificates.length - 1));
            }
          };

          const handleCertificateChange = (index, field, value) => {
            setCertificates(prevCertificates => {
              const newCertificates = [...prevCertificates];
              newCertificates[index][field] = value;
              return newCertificates;
            });
          };



/************************************  end  Certificats parametrs ****************************/

  //****************************  Links parametrs *******************************

            const [links, setLinks] = useState([{ platform: '', url: '' },]);

            const addLink = () => {
              setLinks([...links, { platform: '', url: '' }]);
            };

            const removeLink = () => {
              if (links.length > 0) {
                setLinks(links.slice(0, links.length - 1));
              }
            };

            const handleLinkChange = (index, field, value) => {
              setLinks(prevLinks => {
                const newLinks = [...prevLinks];
                newLinks[index][field] = value;
                return newLinks;
              });
            };

  //**************************** End Links parametrs *******************************


    //**************************** Hobbies parametrs *******************************

                  const [hobbies, setHobbies] = useState([]);
                
                  const addHobby = () => {
                    setHobbies(prevHobbies => [...prevHobbies, '']);
                  };
                
                  const removeHobby = () => {
                    if (hobbies.length > 0) {
                      setHobbies(prevHobbies => prevHobbies.slice(0, hobbies.length - 1));
                    }
                  };
                
                  const handleHobbyChange = (index, value) => {
                    setHobbies(prevHobbies => {
                      const newHobbies = [...prevHobbies];
                      newHobbies[index] = value;
                      return newHobbies;
                    });
                  };

  //**************************** End Hobiiesparametrs *******************************


                  //**************************** languages parametrs *******************************

                  const [languages, setLanguages] = useState([{ language: '', proficiency: '' },]);

                  const addField = () => {
                    setLanguages([...languages, { language: '', proficiency: '' }]); 
                  };

                  const removeField = () => {
                    if (languages.length > 1) {
                      const updatedLanguages = languages.slice(0, languages.length - 1);
                      setLanguages(updatedLanguages);
                    }
                  };

                  const handleLanguageChange = (index, field, value) => {
                    setLanguages(prevLanguages => {
                      const newLanguages = [...prevLanguages];
                      newLanguages[index][field] = value;
                      return newLanguages;
                    });
                  };

//**************************** End languages parametrs *******************************



  //**************************** education parametrs *******************************

                  const [education, setEducation] = useState([{ school: '', degree: '', startDate: '', endDate: '' },]);
                  
                  const addEducation = () => {
                    setEducation([...education, { school: '', degree: '', startDate: '', endDate: '' }]);
                  };

                  const removeEducation = () => {
                    if (education.length > 1) {
                      const updatedEducation = education.slice(0, education.length - 1);
                      setEducation(updatedEducation);
                    }
                  };

                  const handleEducationChange = (index, field, value) => {
                    setEducation(prevEducation => {
                      const newEducation = [...prevEducation];
                      newEducation[index][field] = value;
                      return newEducation;
                    });
                  };

//**************************** End education parametrs *******************************

  //**************************** experience parametrs *******************************

              const [experience, setExperiences] = useState([{ position: '', company: '', startDate: '', endDate: '', workSummary: '' },]);
              
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

  //****************************  end experience parametrs *******************************

  /********************************* End Copy ****************************************** */
  const [currentStep, setCurrentStep] = useState(0);

  const [titleColor, setTitleColor] = useState('#A80000');
  const [Colortext1, setColortext1] = useState('#ffffff');
  const [background1color, setBackground1Color] = useState('#A80000');
  const [Colortext2,setColortext2]=useState('#000000');
  const [background2color,setBackground2Color] = useState('#ffffff');
  const [selectedFonttitre, setSelectedFont] = useState('Arial');
  const colorSections = [ {   id: 'titleColor',   label: 'Couleur du titre',   color: titleColor,   setColor: setTitleColor }, {   id: 'Colortext1',   label: 'Couleur du Texte 1',   color: Colortext1,   setColor: setColortext1 }, {   id: 'background1color',   label: 'Couleur de background 1',   color: background1color,   setColor: setBackground1Color }, {   id: 'Colortext2',   label: 'Couleur du Texte 2',   color: Colortext2,   setColor: setColortext2 }, {   id: 'background2color',   label: 'Couleur de background 2',   color: background2color,   setColor: setBackground2Color }];


  return (
    
    <div className='mx-5' style={{display : 'flex', gap : '12px' }}>
      <div className="container rounded bg-light" style={{ maxWidth: '1000px' }}>

      <BreadcrumbComponent name={name} handleLogout={handleLogout} />

      <form className="row" onSubmit={handleAdd}>
        <div className="p-3 py-5">
          {currentStep === 0 && 
          <div className="col-md-12 border-right d-flex flex-column">
          <ProfileImageForm file={file} imgUrl={imgUrl} setFile={setFile}  handleLogout={handleLogout} setCurrentStep={setCurrentStep}/>
          </div> }
          {currentStep === 1 && <PersonalInfoForm name={name} surname={surname} profession={profession} phone={phone} address={address} authEmail={email} profsummary={profesummary} country={country} state={state} setName={setName} setSurname={setSurname} setProfession={setProfession} setPhone={setPhone} setAddress={setAddress} setProfsummary={setProfsummary} setCountry={setCountry} setState={setState} />}
          {currentStep === 2 && <Educationform education={education} handleEducationChange={handleEducationChange} addEducation={addEducation} removeEducation={removeEducation} />}
          {currentStep === 3 && <LanguagesForm languages={languages} handleLanguageChange={handleLanguageChange} addField={addField} removeField={removeField} />}
          {currentStep === 4 && <HobbiesForm hobbies={hobbies}  handleHobbyChange={handleHobbyChange} addHobby={addHobby} removeHobby={removeHobby}/> }
          {currentStep === 5 && <CertificatesForm certificates={certificates}  handleCertificateChange={handleCertificateChange} addCertificate={addCertificate} removeCertificate={removeCertificate} /> }
          {currentStep === 6 && <LinksForm links={links} handleLinkChange={handleLinkChange} addLink={addLink} removeLink={removeLink} /> }
          {currentStep === 7 && <ExperienceForm experience={experience} addExperience={addExperience} removeExperience={removeExperience} handleExperienceChange={handleExperienceChange} />}
          {currentStep === 8 && <SkillForm skills={skills} addSkill={addSkill} removeSkill={removeSkill} handleSkillChange={handleSkillChange} /> }
          {currentStep === 9 &&  <ProjectForm projects={projects} addProject={addProject} removeProject={removeProject} handleProjectChange={handleProjectChange} />}
          {currentStep ===10 && 
          <div className='container rounded bg-light' >
          
          <div className='bg-white rounded-3 mt-4 p-3 mb-4 border border-primary'>
              <h3 className='text-center'><span className='difcolor'>Template </span>Section</h3>
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
                  <FontSection fonts={fontOptions} selectedFont={selectedFonttitre} setSelectedFont={setSelectedFont} name={name} surname={surname} />
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
          <button className="btn btn-secondary" onClick={() => setCurrentStep(0)}>Back</button>

          
          </div>}

          <div className="d-flex justify-content-between mt-3">
            {currentStep > 0 && currentStep <= 9 &&(
              <button className="btn btn-secondary" onClick={(e) => {
                e.preventDefault();
                setCurrentStep(currentStep - 1)
              }}>Précédent</button>
            )}
            {currentStep < 9 && (
              <button className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                setCurrentStep(currentStep + 1)
              }}>Suivant</button>
            )}

          </div>

        </div>
        <div className="mb-4 text-center"><button className="btn btn-primary profile-button" type="submit" disabled={per !== null && per < 100} >Save Profile</button></div>
      </form>
      </div>  

                                                  {/*parametrs and Resumes */}
       
    <div className='container rounded bg-light'>
    <ResumeComponent name={name} surname={surname} email={email} phone={phone} address={address} state={state} country={country} education={education} experience={experience} profesummary={profesummary} hobbies={hobbies} languages={languages} skills={skills} file={file} imgUrl={imgUrl} certificates={certificates} links={links} projects={projects} profession={profession} titleColor={titleColor} Colortext1={Colortext1} background1color={background1color} Colortext2={Colortext2} background2color={background2color} selectedFonttitre={selectedFonttitre} numResume={numResume} />
    </div>

       
    </div>
                                                    
  )
}

export default Loginprofil