import './Loginprofil.css' ;
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth, db, storage } from '../../firebase';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { MDBRow ,MDBBreadcrumbItem ,MDBBreadcrumb ,MDBCol} from 'mdb-react-ui-kit';
import { FaRegCircleDown } from 'react-icons/fa6';
import { Resume1Component, Resume2Component , Resume2Componentcss, Resume3Component, Resume4Component } from '../../components/index';
import ProfileImageForm from '../../components/ComponentForm/ProfileImageForm';
import Educationform from '../../components/ComponentForm/Educationform';
import LanguagesForm from '../../components/ComponentForm/LanguagesForm';
import HobbiesForm from '../../components/ComponentForm/HobbiesFomr';
import CertificatesForm from '../../components/ComponentForm/CertificatesFomr';
import LinksForm from '../../components/ComponentForm/LinksForm';
import ProfileSettingsForm from '../../components/ComponentForm/PersonalInfoForm';
import ExperienceForm from '../../components/ComponentForm/ExperienceForm';
import SkillForm from '../../components/ComponentForm/SkillsForm';
import ProjectForm from '../../components/ComponentForm/ProjectsForm';
import TemplateSettings from '../../components/ComponentForm/TemplateSettings';


const Loginprofil = () => {

  
  const {dispatch} = useContext(AuthContext);
  const {currentUser} = useContext(AuthContext);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (currentUser) {
      setUserId(currentUser.uid);
      setUserEmail(currentUser.email);
      console.log(currentUser.uid);
    }
  }, [currentUser]);

  const navigate = useNavigate();


  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      dispatch({type:"LOGOUT"})
      alert('Sign-out successful.');
      navigate('//');

    }).catch((error) => {
      alert(error);
    });

  }


  /*********************** initialise data  ****************************/

  
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState(userEmail);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [profesummary, setProfsummary] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [file, setFile] = useState("");
  const [imgUrl, setImgurl] = useState('');
  const [profession ,setProfession] = useState("");

  ///////////////////////////////////////
  const [per, setPer] = useState(null);
  //////////////////////////////////////

  //changement resume

  const [numResume, setNumresume] = useState(2);
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


  useEffect(()=> {  
    const getUsersinfo = async () => {
      try {
          const data = await getDoc(docUsers);
          const filteredData = data.data();

          setHobbies(filteredData.hobbies);
          setNumHobbies(filteredData.hobbies.length);
          
          setSkills(filteredData.skills);
          setNumSkills(filteredData.skills.length);

          setLanguages(filteredData.languages);
          setEducation(filteredData.education);
          setExperiences(filteredData.experience);
          setProjects(filteredData.projects);
          setCertificates(filteredData.certificates);


      } catch (error) {
        console.error(error);
      }
    }

    const getPersonelinfo = async () => {
      try {
          const data = await getDoc(docinfo);
          const filteredData = data.data();

          setName(filteredData?.name || '');
          setSurname(filteredData?.surname || '');
          setPhone(filteredData?.phone || '');
          setAddress(filteredData?.address || '');
          setProfsummary(filteredData?.profesummary || '');
          setProfession(filteredData?.profession);
          setCountry(filteredData?.country || '');
          setState(filteredData?.state || '');
          setImgurl(filteredData?.img || 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg');
          setLinks(filteredData?.links );
        } catch (error) {
        console.error(error);
      }
    }
    getPersonelinfo();
    getUsersinfo();

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

    
    try {
      await setDoc(doc(db, "users", userId), {
        languages: languages, 
        skills: skills,
        hobbies: hobbies,
        education: education,
        experience: experience,
        certificates : certificates,
        projects : projects,
      });
  
      await setDoc(doc(db, "infoperson", userId), {
        name: name,
        surname: surname,
        email: userEmail,
        phone: phone,
        address: address,
        profesummary: profesummary,
        state: state,
        country: country,
        img: imgUrl,
        links : links ,
        profession : profession,
      });
  
      alert("Submit réussi !");
    }catch (error) {
      alert("Submit échoué !");
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };
  
  //**************************** skills parametrs *******************************

              const [numSkills, setNumSkills] = useState(1);
              const [skills, setSkills] = useState([]);
              
              const addSkill = () => {
                setNumSkills(prevNumSkills => prevNumSkills + 1);
                setSkills([...skills, { skill: '', level: 0 }]);
              };
              
              const removeSkill = () => {
                if (skills.length > 1) {
                  setNumSkills(prevNumSkills => prevNumSkills - 1);
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
           


        const [numProjects, setNumProjects] = useState(1);
        const [projects, setProjects] = useState([{ projectName: '', projectType: '', description: '' },]);

        const addProject = () => {
          setNumProjects(prevNumProjects => prevNumProjects + 1);
          setProjects([...projects, { projectName: '', projectType: '', description: '' }]);
        };

        const removeProject = () => {
          if (projects.length > 0) {
            setNumProjects(prevNumProjects => prevNumProjects - 1);
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
  




          const [numCertificates, setNumCertificates] = useState(1);
          const [certificates, setCertificates] = useState([{ company: '', certificateLink: '' }]);

          const addCertificate = () => {
            setNumCertificates(prevNumCertificates => prevNumCertificates + 1);
            setCertificates([...certificates, { company: '', certificateLink: '' }]);
          };

          const removeCertificate = () => {
            if (certificates.length > 0) {
              setNumCertificates(prevNumCertificates => prevNumCertificates - 1);
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

  
  
  

            const [numLinks, setNumLinks] = useState(1);
            const [links, setLinks] = useState([{ platform: '', url: '' },]);

            const addLink = () => {
              setNumLinks(prevNumLinks => prevNumLinks + 1);
              setLinks([...links, { platform: '', url: '' }]);
            };

            const removeLink = () => {
              if (links.length > 0) {
                setNumLinks(prevNumLinks => prevNumLinks - 1);
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

                  const [numHobbies, setNumHobbies] = useState();
                  const [hobbies, setHobbies] = useState([]);
                
                  const addHobby = () => {
                    setNumHobbies(prevNumHobbies => prevNumHobbies + 1);
                    setHobbies(...hobbies);
                  };
                
                  const removeHobby = () => {
                    if (hobbies.length > 1) {
                      setNumHobbies(prevNumHobbies => prevNumHobbies - 1);
                      setHobbies(hobbies.slice(0, numHobbies - 1));
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

                  const [numFields, setNumFields] = useState(1);
                  const [languages, setLanguages] = useState([{ language: '', proficiency: '' },]);

                  const addField = () => {
                    setNumFields(prevNumFields => prevNumFields + 1);
                    setLanguages([...languages, { language: '', proficiency: '' }]); 
                  };

                  const removeField = () => {
                    if (languages.length > 1) {
                      setNumFields(prevNumFields => prevNumFields - 1);
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

                  const [numEducation, setNumEducation] = useState(1);
                  const [education, setEducation] = useState([{ school: '', degree: '', startDate: '', endDate: '' },]);
                  
                  const addEducation = () => {
                    setNumEducation(prevNumEducation => prevNumEducation + 1);
                    setEducation([...education, { school: '', degree: '', startDate: '', endDate: '' }]);
                  };

                  const removeEducation = () => {
                    if (education.length > 1) {
                      setNumEducation(prevNumEducation => prevNumEducation - 1);
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
                if (experience.length > 1) {
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



     
  return (
    <div className='mx-4' style={{display : 'flex' , flexDirection : 'column' ,gap : '40px'}}>
      <div className='container  rounded bg-light ' >
        <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className="bg-white rounded-3 mt-4 p-3 mb-4 border border-primary">
                  <MDBBreadcrumbItem>
                    <Link to='/'>Home</Link>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem>
                    User profile
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem>
                    {name}
                  </MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
        </MDBRow>
          
        <form className="row" onSubmit={handleAdd}>
          <div className="col-md-3 border-right d-flex flex-column">
              <ProfileImageForm file={file} imgUrl={imgUrl} setFile={setFile} />
              <span className='d-flex justify-content-center'><button className='btn1' onClick={handleLogout}>Log out</button></span>
          </div>
            <div className="col-md-5 border-right">
                <div className="p-3 py-5">

                    <ProfileSettingsForm name={name} surname={surname} profession={profession} phone={phone} address={address} authEmail={email} profsummary={profesummary} country={country} state={state} setName={setName} setSurname={setSurname} setProfession={setProfession} setPhone={setPhone} setAddress={setAddress} setProfsummary={setProfsummary} setCountry={setCountry} setState={setState} />
                    {/* Education */}
                   <Educationform  education={education} handleEducationChange={handleEducationChange} addEducation={addEducation} removeEducation={removeEducation}/>
                    <br /><br />

                    {/* languages */}
                    <LanguagesForm languages={languages} handleLanguageChange={handleLanguageChange} addField={addField} removeField={removeField} />

                    <br /> <br />

                    {/* Hobbies */}
                    <HobbiesForm hobbies={hobbies}  handleHobbyChange={handleHobbyChange} addHobby={addHobby} removeHobby={removeHobby}/>
                    

                    {/* Certificate Companies */}
                    <CertificatesForm certificates={certificates}  handleCertificateChange={handleCertificateChange} addCertificate={addCertificate} removeCertificate={removeCertificate} />

                    {/* links */}
                    <LinksForm links={links} handleLinkChange={handleLinkChange} addLink={addLink} removeLink={removeLink} />
                    
                    <br />
                                    
                </div>
            </div>

                
                <div className="col-md-4">
                  {/* Experiences */}
                  <ExperienceForm experience={experience} addExperience={addExperience} removeExperience={removeExperience} handleExperienceChange={handleExperienceChange} />

                    {/* Skills */}
                    <SkillForm skills={skills} addSkill={addSkill} removeSkill={removeSkill} handleSkillChange={handleSkillChange} />
                    
                    {/*Projets */}
                    <ProjectForm projects={projects} addProject={addProject} removeProject={removeProject} handleProjectChange={handleProjectChange} />

                    <br />
                    <br />

                    
                </div> 

                <div className="mb-4 text-center"><button className="btn btn-primary profile-button" type="submit" disabled={per !== null && per < 100} >Save Profile</button></div>

        </form>

      </div>

                                                  {/*parametrs and Resumes */}
       

        <TemplateSettings   numResume={numResume} setNumresume={setNumresume} resumeTemplates={resumeTemplates} prevResume={prevResume} nextResume={nextResume}
          name ={name}  surname={surname} email= {email} phone={phone} address={address} state={state} country={country} education={education} experience={experience} profesummary={profesummary} hobbies={hobbies} languages={languages} skills={skills} file={file} imgUrl={imgUrl} certificates={certificates} links={links} projects={projects} profession={profession}
        />

        
          

        

                   
    </div>
                                                    
  )
}

export default Loginprofil