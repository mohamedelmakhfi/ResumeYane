import React from 'react';
import './Resume2Component.css';

const getIconClass = platform => {
    switch (platform) {
      case 'github':
        return 'fab fa-github';
      case 'linkedin':
        return 'fab fa-linkedin';
      case 'twitter':
        return 'fab fa-twitter';
      case 'website':
        return 'fas fa-globe';
      case 'instagram':
        return 'fab fa-instagram';
      case 'facebook':
        return 'fab fa-facebook';
      case 'stackoverflow':
        return 'fab fa-stack-overflow';
      case 'youtube':
        return 'fab fa-youtube';
      case 'medium':
        return 'fab fa-medium';
      case 'pinterest':
        return 'fab fa-pinterest';
      case 'twitch':
        return 'fab fa-twitch';
      default:
        return 'fas fa-link';
    }
  };


const Resume2Component = (props) => {

  /********** font *********** */
  const fonttext = {
    fontFamily : props.selectedFonttitre,
  }

  /* ********* titles *********** */
  const TitleColor = {
    color : props.titleColor,
    ...fonttext,
  }

  /* ********* side 1 *********** */
  const Colortext1 = {
    color : props.Colortext1,
  }
  
  const background1color = {
    backgroundColor : props.background1color,
    ...Colortext1,
  }

  /* ********* side 2 *********** */
  const Colortext2 = {
    color : props.Colortext2,
  }
  const background2color = {
    backgroundColor : props.background2color,
    ...Colortext2,
  }

  
  return (
    
    <div className="container">
      
      <div className="wrapper mt-lg-5">
        <div className="sidebar-wrapper mb-1" style={background1color}>
            <div className="profile-container">
                <img className="profile"
                    src={props.imgUrl ? props.imgUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
                    alt='profil'
                />
                <h1 className="name" style={{color : Colortext1.color , fontFamily : fonttext.fontFamily}}>{props.name} {props.surname} </h1>
                <h3 className="tagline" style={Colortext1}>{props.profession}</h3>
            </div>
            
            <div className="contact-container mb-3 mx-4">
                <ul className="list-unstyled row">
                    <li className="col-md-12 mt-3 mb-1"><i className="fa-solid fa-envelope"></i>{props.email}</li>
                    <li className="col-md-12 mb-2"><i className="fa-solid fa-phone"></i>{props.phone}</li>
                    {props.links.map((link, index) => (
                      <React.Fragment key={index} >
                    <li  className='col-md-12 mb-1 text-sm'>
                      <i className={`${getIconClass(link.platform)} `}></i> -
                      ({link.platform})  {link.url}
                    </li>
                    </React.Fragment>
                ))}
                    

                    <li className='address mt-2' >
                    <i className='fas fa-map-marker-alt mx-2'></i>{props.country} , {props.state} / {props.address}
                  </li>
                </ul>
            </div>

          
            <div className="education-container  mx-4">
                <h2 className="container-block-title" style={TitleColor}>Education</h2>
                {props.education.map((edu,index) => (  
                   <React.Fragment key={index} >                      
                <div className="item">
                    <h4 className="degree">{edu.school}</h4>
                    <h5 className="meta" style={Colortext1}>{edu.degree}</h5>
	                    <div className="time" style={Colortext1}>{edu.startDate} - {edu.endDate}</div>
                </div>
                </React.Fragment> 
                ))}
            </div>

             
            <div className="languages-container mt-3 mx-4">
                <h2 className="container-block-title"style={TitleColor}>Languages</h2>
                <ul className="list-unstyled interests-list">
                {props.languages.map((language ,index) => (
                  <React.Fragment key={index} >                      
                    <li>{language.language} <span className="lang-desc">({language.proficiency})</span></li>
                    </React.Fragment> 
                    ))}
                </ul>
            </div>

            
            <div className="interests-container mt-3 mx-4">
                <h2 className="container-block-title"style={TitleColor}>Interests</h2>
                <ul className="list-unstyled interests-list">
                    {props.hobbies.map((hobbie, index) => (
                      
                            index % 3 === 0 && (
                                <li key={index}>
                                    {hobbie}
                                    {props.hobbies[index + 1] && (
                                        <span> - {props.hobbies[index + 1]}</span>
                                    )}{props.hobbies[index + 2] && (
                                      <span> - {props.hobbies[index + 2]}</span>
                                  )}
                                </li>
                            )
                           
                        ))
                    }
                </ul>
            </div>


            

            

        </div>
        
        <div className="main-wrapper" style={background2color}>
            
            <section className="section summary-section">
                <h2 className="section-title" style={{fontFamily : TitleColor.fontFamily , color : TitleColor.color}}><span className="icon-holder" style={TitleColor}><i className="fa-solid fa-user"></i></span>Career Profile</h2>
                <div className="summary">
                    <p>{props.profesummary}</p>
                </div>
            </section>
            
            <section className="section experiences-section">

                <h2 className="section-title" style={TitleColor}><span className="icon-holder" style={TitleColor}><i className="fa-solid fa-briefcase"></i></span>Experiences</h2>
                
                {props.experience.map((exp,index) => (
                  <React.Fragment  >
                    <div  className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">{exp.position}</h3>
                            <div className="time" style={Colortext2}>{exp.startDate} - {exp.endDate}</div>
                        </div>
                        <div className="company" style={Colortext2}>{exp.company}</div>
                    </div>
                    <div className="details">
                        <p>{exp.workSummary}</p>  
                    </div>
                  
                </div>
                  </React.Fragment>
                
                ))}
                
                
            </section>
            
            <section className="section projects-section">
            <h2 className="section-title" style={TitleColor}><span className="icon-holder" style={TitleColor} ><i className="fa-solid fa-archive"></i></span>Projects</h2>
                {props.projects.map((Projet,index) => (
                  <React.Fragment  key = {index} >

                  <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">{Projet.projectName}</h3>
                            <div className="time"  style={Colortext2}>{Projet.projectType}</div>
                        </div>
                        <div className="company" style={Colortext2}>{Projet.company}</div>
                    </div>
                    <div className="details">
                        <p>{Projet.description}</p>  
                    </div>
                  </div>
                  </React.Fragment>
                
                ))}
            </section>
            
            <section className="skills-section section">
                <h2 className="section-title" style={TitleColor}><span className="icon-holder" style={TitleColor}><i className="fa-solid fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                <div className="skillset">
                  <div className="row">
                      {props.skills.map((skill, index) => (
                        <React.Fragment key={index} >
                            <div className='col-md-6' >
                                <div  className=" item">
                                  <h3 className="level-title">{skill.skill}</h3>
                                  <div className="progress level-bar">
                                      <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: `${skill.level}%`, backgroundColor : background1color.backgroundColor }}></div>
                                  </div>
                                  <div>
                                  </div>
                                </div>
                            </div>
                            </React.Fragment>
                          
                      ))}
                  </div>
                </div>
 
            </section>

            <section className="skills-section section">
                <h2 className="section-title" style={TitleColor} ><span className="icon-holder" style={TitleColor}><i className="fa-solid fa-rocket"></i></span>Certificates</h2>
                <div className="skillset">
                  <div className="row">
                      {props.certificates.map((certif, index) => (
                          <React.Fragment key={index} >                      
                            <div className='col-md-6'>
                                <div  className=" item">
                                  <h3 className="level-title">{certif.company}</h3>
                                  <div className="progress level-bar">
                                      <div className="progress-bar theme-progress-bar  w-100" role="progressbar" style={background1color}>{certif.certificateLink}</div>
                                  </div>
                                  <div>
                                  </div>
                                </div>
                            </div>
                          </React.Fragment>
                          
                      ))}
                  </div>
                </div>
 
            </section>
            
        </div>
      </div>
    

    </div>
    
  )
}

export default Resume2Component