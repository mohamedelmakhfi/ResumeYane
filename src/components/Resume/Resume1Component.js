import { getIconClass } from "../../data/Datatemp"



    const getIconClas = getIconClass;

const Resume1Component = (props) => {

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

    <div className='container ' style={{maxWidth : '1000px'}} >
      
        <div className='row' >
          <div className='col-lg-4 text-center py-4' style={background1color}>
              <div className='Header-left'>
                <img className="img-thumbnail rounded-circle mb-2 " width={"250px"}  
                    src={props.imgUrl ? props.imgUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" } 
                    alt='profil'
                />
                <h4 className='display-7 mt-2' style={fonttext}> {props.name} {props.surname}</h4>
                <h4 className='lead text-sm mb-4'>{props.profession}</h4>
              </div>

              <div>
                <h5 className='text-uppercase  py-2 rounded-pill' style={{color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor}}>Contact</h5>
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
                <h5 className='text-uppercase  py-2 rounded-pill' style={{color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor}}>Skills</h5>
                <div className='row mt-3 mb-3'>
                  {props.skills.map((skill, index) => (
                    <div className='col-md-6 mb-2' key={index}>  
                      <div className='progress resume-progress'>
                        <div className='progress-bar ' role='progressbar' style={{ width: `${skill.level}%`, backgroundColor : background1color.backgroundColor , color : background2color.backgroundColor , border : '1px solid'}} aria-valuemin='0' aria-valuemax='100'>{skill.skill}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div>
                <h5 className='text-uppercase  py-2 rounded-pill' style={{color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor}}>Links</h5>
                <ul className='list text-white-80 ml-5 py-2 text-left text-capitalize'>
                {props.links.map((link, index) => (
                    <li key={index} className='list-item'>
                      <i className={`${getIconClas(link.platform)} icon-large`}></i> -
                      ({link.platform})  {link.url}

                    </li>
                ))}
                </ul>
              </div>

              <div>
                <h5 className='text-uppercase  py-2 rounded-pill' style={{color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor}}>Languages</h5>
                <ul className='list text-white-80 ml-5 py-2 text-left text-capitalize'>
                {props.languages.map((language ,index) => (
                    <li key={index} className='list-item'>{language.language} --- {language.proficiency}</li>
                ))}
                </ul>
              </div>

              <div>
                  <h5 className='text-uppercase  py-2 rounded-pill' style={{color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor}}>Hobbies</h5>
                  <div className="row mt-3 mb-3">
                      {props.hobbies.map((hobbie, index) => (
                          <div className='col-md-6 mb-2' key={index}>  
                          <div className='progress resume-progress'>
                            <div className='progress-bar' role='progressbar' style={{width : "100%" , backgroundColor : background1color.backgroundColor , color : background2color.backgroundColor , border : '2px solid'}} aria-valuemin='0' aria-valuemax='100'>{hobbie}</div>
                          </div>
                        </div>
                      ))}
                  </div>
              </div>

        


          </div>

          <div className='col-lg-8 py-4 px-5' style={background2color}>
            <div className='header-right'>
                <h4 className='text-center' style={TitleColor}>Professional Summary</h4>
                <hr />
                <p>{props.profesummary}</p>
            </div>

            <br />

            <div className='text-left'>
              <h4 className='text-center' style={TitleColor}>Education</h4>
              <hr />
              {props.education.map((edu, index) => {
                    if (index % 2 === 0) {
                        const nextEdu = props.education[index + 1];
                        return (
                            <div key={index} className="row mb-3">
                                <div className="col-6">
                                    <div className="resume-degree" style={{fontWeight : "bold"}}>{edu.school}</div>
                                    <div className="resume-degree-org ">{edu.degree}</div>
                                    <div className="resume-degree-time ">
                                        {edu.startDate} - {edu.endDate}
                                    </div>
                                </div>
                                {nextEdu && (
                                    <div className="col-6" >
                                        <div className="resume-degree" style={{fontWeight : "bold"}}>{nextEdu.school}</div>
                                        <div className="resume-degree-org ">{nextEdu.degree}</div>
                                        <div className="resume-degree-time ">
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
              <h4 className='text-center' style={TitleColor}>Work Experience</h4>
              <hr />
              {props.experience.map((exp, index) => {
        if (index % 2 === 0) {
            const nextExp = props.experience[index + 1];
            return (
                <div key={index} className="row mb-3">
                    <div className="col-6">
                        <div className="resume-position " style={{fontWeight : "bold"}}>{exp.position}</div>
                        <div className="resume-company ">{exp.company}</div>
                        <div className="resume-summary ">
                            {exp.workSummary}
                        </div>
                        <div className="resume-exp-time ">
                            {exp.startDate} - {exp.endDate}
                        </div>
                    </div>
                    {nextExp && (
                        <div className="col-6">
                            <div className="resume-position " style={{fontWeight : "bold"}}>{nextExp.position}</div>
                            <div className="resume-company ">{nextExp.company}</div>
                            <div className="resume-summary ">
                                {nextExp.workSummary}
                            </div>
                            <div className="resume-exp-time ">
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
              <h4 className='text-center' style={TitleColor}>projects</h4>
              <hr />
                {props.projects.map((projet,index) => (
                <div key={index}>
                  <div className=" col-md-12 row" >
                    <h6 className="col-md-6" style={{fontWeight : "bold"}}> {projet.projectName}</h6>
                    <h6 className="col-md-6" style={{fontWeight : "bold"}}> {projet.projectType}</h6>
                  </div>
                  <h6 > {projet.description}</h6>
                  <br /></div>              
                ))}  
            </div>

            <div className='text-left d-flex justify-content-center flex-column'>
              <h4 className='text-center' style={TitleColor}>Certificates</h4>
              <hr />
                {props.certificates.map((certif,index) => (
                  <div className="col-md-12 row" key={index}>
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