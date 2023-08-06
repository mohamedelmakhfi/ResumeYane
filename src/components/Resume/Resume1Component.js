
const Resume1Component = (props) => {
  return (
    <div className='container mx-1 ' >
      <div className='row' style={{ width: '900px' , height : 'auto'}} >
          <div className='col-lg-4 bg-dark text-white text-center py-4'>
              <div className='Header-left'>
                <img className="img-thumbnail rounded-circle mb-2 " width={"300px"}  
                  src={ props.file ? URL.createObjectURL(props.file) : props.imgUrl }
                  alt='profil'
                />
                <h4 className='display-7'> {props.name} {props.surname}</h4>
                <h4 className='lead  text-white-50 mb-4'>{props.email}</h4>
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
                <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Languages</h5>
                <ul className='list text-white-80 ml-5 py-2 text-left text-capitalize'>
                {props.languages.map((language ,index) => (
                    <li key={index} className='list-item'>{language.language} ---- {language.proficiency}</li>
                ))}
                </ul>
              </div>

              <div>
                <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Hobbies</h5>
                <ul className='list text-white-80 ml-5 py-2 text-left text-capitalize'>
                {props.hobbies.map((hobbie ,index) => (
                    <li key={index} className='list-item'>{hobbie}</li>
                ))}
                </ul>
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

          </div>
      </div>
    </div>
  )
}

export default Resume1Component