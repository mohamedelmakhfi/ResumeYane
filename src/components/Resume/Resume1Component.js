
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
                <ul className='list text-white-80 ml-5 py-2 text-left text-capitalize'>
                {props.skills.map((skill, index) => (
                    <li key={index} className='list-item'>{skill}</li>
                ))}
                </ul>
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
                  <div className="row">
                      {props.hobbies.map((hobbie, index) => (
                          <div key={index} className="col-md-6">
                              <div className="list-item">
                                {hobbie}
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

            <div className='text-center'>
              <h4 className='text-center'>Education</h4>
              <hr />
                {props.education.map((edu,index) => (
                  <p  key = {index}>school : {edu.school}   <br />
                                    degree : {edu.degree}  <br />
                                    de {edu.startDate} a {edu.endDate}  <br /> <br />
                  </p>
                ))}                
            </div>
            
            
            <div className='text-center'>
              <h4 className='text-center'>Work Experience</h4>
              <hr />
                {props.experience.map((exp,index) => (
                  <p  key = {index}>position : {exp.position}   <br />
                                    company : {exp.company}  <br />
                                    Work Summary : {exp.workSummary} <br />
                                    de {exp.startDate} a {exp.endDate}  <br /> <br />
                  </p>
                ))}                
            </div>

            <div className=''>
              <h4 className='text-center'>projects</h4>
              <hr />
                {props.projects.map((projet,index) => (
                <>
                  <div className="d-flex justify-content-evenly">
                    <h5> {projet.projectName}</h5>
                    <h5> {projet.projectType}</h5>
                  </div>
                  <h6 className="m-auto text-left" style={{maxWidth : '450px'}}> {projet.description}</h6>
                  <br /></>              
                ))}  
            </div>

            <div className='text-center'>
              <h4 className='text-center'>Certificates</h4>
              <hr />
                {props.certificates.map((certif,index) => (
                  <div className="d-flex justify-content-evenly">
                    <h6> {certif.company}</h6>
                    <h6> {certif.certificateLink}</h6>
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