import './Loginprofil.css' ;

import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth, db, storage } from '../../firebase';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { arrayUnion, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { MDBRow ,MDBBreadcrumbItem ,MDBBreadcrumb ,MDBCol} from 'mdb-react-ui-kit';
import { FaRegCircleDown } from 'react-icons/fa6';



const Loginprofil = () => {

  const {dispatch} = useContext(AuthContext);
  const {currentUser} = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(currentUser.uid);

  const userId = currentUser.uid;
  const userEmail = currentUser.email;


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
  const [email, setEmail] = useState(userEmail);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [profesummary, setProfsummary] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [file, setFile] = useState("");
  const [imgUrl, setImgurl] = useState('');


  const [per, setPer] = useState(null);

  /*********************** end initialise data  ****************************/


/**************************** get data ********************************** */


  const docUsers = doc(db,"users",userId);
  const [userinfo, setUserinfo] = useState([]);

  const docinfo = doc(db,"infoperson",userId);
  const [infoperso, setInfoperso] = useState([]);


  useEffect(()=> {  
    const getUsersinfo = async () => {
      try {
          const data = await getDoc(docUsers);
          const filteredData = data.data();
          setUserinfo(filteredData);

          setHobbies(filteredData.hobbies);
          setNumHobbies(filteredData.hobbies.length);
          
          setSkills(filteredData.skills);
          setNumSkills(filteredData.skills.length);

          setLanguages(filteredData.languages);
          setEducation(filteredData.education);


      } catch (error) {
        console.error(error);
      }
    }

    const getPersonelinfo = async () => {
      try {
          const data = await getDoc(docinfo);
          const filteredData = data.data();
          setInfoperso(filteredData);

          setName(filteredData?.name || '');
          setSurname(filteredData?.surname || '');
          setPhone(filteredData?.phone || '');
          setAddress(filteredData?.address || '');
          setProfsummary(filteredData?.profesummary || '');
          setCountry(filteredData?.country || '');
          setState(filteredData?.state || '');
          setImgurl(filteredData?.img || 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg')
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

    // Prepare the hobbies data in an array format
    const hobbiesData = hobbies.reduce((acc, hobby) => {
      if (hobby.trim() !== '') {
        acc.push(hobby.trim());
      }
      return acc;
    }, []);

     // Prepare the skills data in an array format
     const skillsData = skills.reduce((acc, skill) => {
      if (skill.trim() !== '') {
        acc.push(skill.trim());
      }
      return acc;
    }, []);
    

    // Prepare the experiences data in an object format
    const experienceData = experiences.reduce((acc, exp, index) => {
    if (exp.position !== '' && exp.company !== '' && exp.startDate !== '' && exp.endDate !== '') {
      acc[`experience${index + 1}`] = {
        position: exp.position,
        company: exp.company,
        startDate: exp.startDate,
        endDate: exp.endDate,
        workSummary: exp.workSummary,
      };
    }
    return acc;
    }, {});


   
  
    try {
      await setDoc(doc(db, "users", userId), {
        languages: languages, 
        skills: arrayUnion(...skillsData),
        hobbies: arrayUnion(...hobbiesData),
        education: education,
        experience: experienceData,
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
      });
  
      alert("Submit réussi !");
    }catch (error) {
      alert("Submit échoué !");
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };
  
  //**************************** skills parametrs *******************************

                    const [numSkills, setNumSkills] = useState();
                    const [skills, setSkills] = useState([]);

                    const addSkill = () => {
                      setNumSkills(prevNumSkills => prevNumSkills + 1);
                      setSkills(prevSkills => [...prevSkills, '']);
                    };

                    const removeSkill = () => {
                      if (numSkills > 1) {
                        setNumSkills(prevNumSkills => prevNumSkills - 1);
                        setSkills(prevSkills => prevSkills.slice(0, numSkills - 1));
                      }
                    };

                    const handleSkillChange = (index, value) => {
                      setSkills(prevSkills => {
                        const newSkills = [...prevSkills];
                        newSkills[index] = value;
                        return newSkills;
                      });
                    };

  //**************************** End skills parametrs *******************************


    //**************************** Hobbies parametrs *******************************

                  const [numHobbies, setNumHobbies] = useState();
                  const [hobbies, setHobbies] = useState([]);
                
                  const addHobby = () => {
                    setNumHobbies(prevNumHobbies => prevNumHobbies + 1);
                    setHobbies(prevHobbies => [...prevHobbies, '']);
                  };
                
                  const removeHobby = () => {
                    if (numHobbies > 1) {
                      setNumHobbies(prevNumHobbies => prevNumHobbies - 1);
                      setHobbies(prevHobbies => prevHobbies.slice(0, numHobbies - 1));
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


              const [numExperiences, setNumExperiences] = useState(1);
              const [experiences, setExperiences] = useState(Array(1).fill({ position: '', company: '', startDate: '', endDate: '', workSummary: '' }));

              const addExperience = () => {
                setNumExperiences(prevNumExperiences => prevNumExperiences + 1);
                setExperiences(prevExperiences => [...prevExperiences, { position: '', company: '', startDate: '', endDate: '', workSummary: '' }]);
              };

              const removeExperience = () => {
                if (numExperiences > 1) {
                  setNumExperiences(prevNumExperiences => prevNumExperiences - 1);
                  setExperiences(prevExperiences => prevExperiences.slice(0, numExperiences - 1));
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
    <div className='container rounded bg-light mt-5 mb-5'>
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
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" 
                src={ file ? URL.createObjectURL(file) : imgUrl }
                alt='profil'
              />

              <div className="formInput m-4">
                <label htmlFor="file">
                  Image: <FaRegCircleDown /> 
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <hr style={{"backgroundColor" : "blue" , "width" : "170px" , "height" : "px" }} />
              <span className="text-primary">{currentUser.email}</span>
              <span className='mt-3'><button className='btn1' onClick={handleLogout}>Log out</button></span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right"><span className='difcolor btnhov strong'>Profile </span>Settings</h4>
                </div>

                {/* info personels */}
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name"  required onChange={(e) => setName(e.target.value)} value={name}/></div>
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control"  placeholder="surname" required onChange={(e) => setSurname(e.target.value)} value={surname}/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="phone number" required onChange={(e) => setPhone(e.target.value)} value={phone}/></div>
                    <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" required onChange={(e) => setAddress(e.target.value)} value={address}/></div>
                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="email id" required value={currentUser.email}/></div>
                    <div className="col-md-12"><label className="labels">Professional Summary </label><input className="form-control" required onChange={(e) => setProfsummary(e.target.value)} value={profesummary}/></div>
                </div>

                {/* country */}                
                <div className="row mt-4">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" required onChange={(e) => setCountry(e.target.value)} value={country} /></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state" required onChange={(e) => setState(e.target.value)} value={state} /></div>
                </div>

                {/* Education */}
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
                <br />
                <br />

                {/* languages */}
                <div className="row mt-6">
                  <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
                    <span>Languages</span>
                    <span className="border px-2 difcolor btnhov add-experience" onClick={addField}>
                      <i className="fa fa-plus"></i>
                    </span>
                    <span className="border px-2 difcolor btnhov add-experience" onClick={removeField}>
                      <i className="fa fa-minus"></i>
                    </span>
                  </div>
                  <br />
                  {languages.map((lang, index) => (
                    <React.Fragment key={index}>
                      <div className="col-md-6">
                        <label className="labels">language {index+1}</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="language"
                          value={lang.language}
                          onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">proficiency</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="proficiency"
                          value={lang.proficiency}
                          onChange={(e) => handleLanguageChange(index, 'proficiency', e.target.value)}
                        />
                      </div>
                    </React.Fragment>
                    ))}
                </div>
                
                <br />
                <br />

                {/* Skills */}
                <div className="row mt-7">
                  <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
                    <span>Skills</span>
                    <span className="border px-2 difcolor btnhov add-experience" onClick={addSkill}>
                      <i className="fa fa-plus"></i>
                    </span>
                    <span className="border px-2 difcolor btnhov add-experience" onClick={removeSkill}>
                      <i className="fa fa-minus"></i>
                    </span>
                  </div>
                  <br />
                  {skills.map((skill, index) => (
                    <div className="col-md-6" key={index}>
                      <label className="labels">Skill {index + 1}</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Skill"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <br />
                <br />

                {/* Hobbies */}
                <div className="row mt-8">
                  <div className="d-flex justify-content-between m-2 align-items-center difcolor btnhov experience">
                    <span>Hobbies</span>
                    <span className="border px-2 difcolor btnhov add-experience" onClick={addHobby}>
                      <i className="fa fa-plus"></i>
                    </span>
                    <span className="border px-2 difcolor btnhov add-experience" onClick={removeHobby}>
                      <i className="fa fa-minus"></i>
                    </span>
                  </div>
                  <br />
                  {hobbies.map((hobby, index) => (
                    <div className="col-md-6" key={index}>
                      <label className="labels">Hobby {index + 1}</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Hobby"
                        value={hobby}
                        onChange={(e) => handleHobbyChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <br />
                <br />
                                
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit" disabled={per !== null && per < 100} >Save Profile</button></div>
            </div>
        </div>

            {/* Experiences */}
            <div className="col-md-4">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center experience difcolor btnhov ">
                    <span>Experience</span>
                    <span className="border px-2 add-experience" onClick={addExperience}>
                      <i className="fa fa-plus"></i>
                    </span>
                    <span className="border px-2 add-experience" onClick={removeExperience}>
                      <i className="fa fa-minus"></i>
                    </span>
                  </div>
                  
                  <br />
                  {experiences.map((exp, index) => (
                    
                    <React.Fragment key={index}>
                      <div className="col-md-12">
                        <br />

                        <label className="labels">Position Title {index + 1}</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Position Title"
                          value={exp.position}
                          onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Company Name"
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Start Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={exp.startDate}
                          onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">End Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={exp.endDate}
                          onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Work Summary</label>
                        <input
                          className="form-control"
                          placeholder="Work Summary"
                          value={exp.workSummary}
                          onChange={(e) => handleExperienceChange(index, 'workSummary', e.target.value)}
                        />
                      </div>
                    </React.Fragment>
                  ))}
                  
                </div>
            </div>
            
    </form>
    </div>
  )
}

export default Loginprofil