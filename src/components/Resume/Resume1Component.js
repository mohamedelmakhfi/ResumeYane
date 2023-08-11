
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

const Resume1Component = (props) => {
  return (
    <div className='container' style={{maxWidth : '1000px'}} >
      <div className='row' >
          <div className='col-lg-4 bg-dark text-white text-center py-4'>
              <div className='Header-left'>
                <img className="img-thumbnail rounded-circle mb-2 " width={"250px"}  
                    src={props.imgUrl ? props.imgUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" } 
                    alt='profil'
                />
                <h4 className='display-7'> {props.name} {props.surname}</h4>
                <h4 className='lead  text-white-50 mb-4'>{props.profession}</h4>
              </div>

              <div>
                <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Contact</h5>
                <ul className='list-unstyled text-white50 ml-5 py-2 text-left'>
                  <li className='list-item'>
                    <i className='fas fa-mobile-alt mx-4'></i>{props.phone}
                  </li>
                  <li className='list-item'>
                    <i className='fas fa-envelope-open-text mx-4'></i>{props.email}
                  </li>
                  <li className='list-item'>
                    <i className='fas fa-map-marker-alt mx-4'></i>{props.country} , {props.state} <br /> {props.address}
                  </li>
                  
                </ul> 
                
              </div>

              <div>
                <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Skills</h5>
                <div className='row mt-3 mb-3'>
                  {props.skills.map((skill, index) => (
                    <div className='col-md-6 mb-2' key={index}>  
                      <div className='progress resume-progress'>
                        <div className='progress-bar bg-secondary' role='progressbar' style={{ width: `${skill.level}%` , color : "white" }} aria-valuemin='0' aria-valuemax='100'>{skill.skill}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div>
                <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Links</h5>
                <ul className='list text-white-80 ml-5 py-2 text-left text-capitalize'>
                {props.links.map((link, index) => (
                    <li key={index} className='list-item'>
                      <i className={`${getIconClass(link.platform)} icon-large`}></i> -
                      ({link.platform})  {link.url}

                    </li>
                ))}
                </ul>
              </div>

              <div>
                <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Languages</h5>
                <ul className='list text-white-80 ml-5 py-2 text-left text-capitalize'>
                {props.languages.map((language ,index) => (
                    <li key={index} className='list-item'>{language.language} ---- {language.proficiency}</li>
                ))}
                </ul>
              </div>

              <div>
                  <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Hobbies</h5>
                  <div className="row mt-3 mb-3">
                      {props.hobbies.map((hobbie, index) => (
                          <div className='col-md-6 mb-2' key={index}>  
                          <div className='progress resume-progress'>
                            <div className='progress-bar bg-secondary' role='progressbar' style={{width : "100%" ,color : "white"}} aria-valuemin='0' aria-valuemax='100'>{hobbie}</div>
                          </div>
                        </div>
                      ))}
                  </div>
              </div>

        


          </div>

          <div className='col-lg-8 bg-light text-dark py-4 px-5'>
            <div className='header-right'>
                <h4 className='text-center'>Professional Summary</h4>
                <hr />
                <p>{props.profesummary}</p>
            </div>

            <br />

            <div className='text-left'>
              <h4 className='text-center'>Education</h4>
              <hr />
              {props.education.map((edu, index) => {
                    if (index % 2 === 0) {
                        const nextEdu = props.education[index + 1];
                        return (
                            <div key={index} className="row mb-3">
                                <div className="col-6">
                                    <div className="resume-degree font-weight-bold">{edu.school}</div>
                                    <div className="resume-degree-org text-muted">{edu.degree}</div>
                                    <div className="resume-degree-time text-muted">
                                        {edu.startDate} - {edu.endDate}
                                    </div>
                                </div>
                                {nextEdu && (
                                    <div className="col-6">
                                        <div className="resume-degree font-weight-bold">{nextEdu.school}</div>
                                        <div className="resume-degree-org text-muted">{nextEdu.degree}</div>
                                        <div className="resume-degree-time text-muted">
                                            {nextEdu.startDate} - {nextEdu.endDate}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    } else {
                        return null; // Skip odd-indexed items
                    }
                })}       
            </div>
            
            
            <div className='text-left'>
              <h4 className='text-center'>Work Experience</h4>
              <hr />
              {props.experience.map((exp, index) => {
        if (index % 2 === 0) {
            const nextExp = props.experience[index + 1];
            return (
                <div key={index} className="row mb-3">
                    <div className="col-6">
                        <div className="resume-position font-weight-bold">{exp.position}</div>
                        <div className="resume-company text-muted">{exp.company}</div>
                        <div className="resume-summary text-muted">
                            {exp.workSummary}
                        </div>
                        <div className="resume-exp-time text-muted">
                            {exp.startDate} - {exp.endDate}
                        </div>
                    </div>
                    {nextExp && (
                        <div className="col-6">
                            <div className="resume-position font-weight-bold">{nextExp.position}</div>
                            <div className="resume-company text-muted">{nextExp.company}</div>
                            <div className="resume-summary text-muted">
                                {nextExp.workSummary}
                            </div>
                            <div className="resume-exp-time text-muted">
                                {nextExp.startDate} - {nextExp.endDate}
                            </div>
                        </div>
                    )}
                </div>
            );
        } else {
            return null; // Skip odd-indexed items
        }
    })}         
            </div>

            <div className='d-flex justify-content-center flex-column'>
              <h4 className='text-center'>projects</h4>
              <hr />
                {props.projects.map((projet,index) => (
                <>
                  <div className=" col-md-12 row">
                    <h5 className="col-md-6 "> {projet.projectName}</h5>
                    <h5 className="col-md-6"> {projet.projectType}</h5>
                  </div>
                  <h6 > {projet.description}</h6>
                  <br /></>              
                ))}  
            </div>

            <div className='text-left d-flex justify-content-center flex-column'>
              <h4 className='text-center'>Certificates</h4>
              <hr />
                {props.certificates.map((certif,index) => (
                  <div className="col-md-12 row">
                    <h6 className=" offset-md-2 col-md-6"> {certif.company}</h6>
                    <h6 className="col-md-4"> {certif.certificateLink}</h6>
                    <br />             
                  </div>
                ))}  
            </div>

          </div>
      </div>
    </div>
  )
}

export default Resume1Component