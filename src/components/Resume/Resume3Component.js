import React from 'react';
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


const Resume3Component = (props) => {

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
    <>
      <div className=" container " style={{maxWidth : '1000px' , backgroundColor : background1color.backgroundColor === '#A80000' ? '#D9D9D9' : background1color.backgroundColor}} >
        <article className="resume-wrapper mx-auto p-5 mb-5 my-5 shadow-lg">

          <div className="resume-header p-4" style={{color : Colortext2.color , background : background2color.backgroundColor}}>
            {/* ... (header content) ... */}
            <div className="row align-items-center">
						<div className="resume-title col-12 col-md-6 col-lg-6 col-xl-6">
							<h2 className="resume-name mb-0 text-uppercase" style={TitleColor}>{props.name} {props.surname}</h2>
							<div className="resume-tagline mb-3 mb-md-0" style={{fontWeight : "bold" , fontSize : '19px'}}>{props.profession}</div>
						</div>
						<div className="resume-contact col-12 col-md-6 col-lg-6 offset-md-1 col-xl-5">
							<ul className="list-unstyled mb-0">
								<li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg me-2 "></i>{props.phone}</li>
								<li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg me-2"></i>{props.email}</li>
								<li className="mb-0"><i className="fas fa-map-marker-alt fa-fw fa-lg me-2"></i>{props.country} , {props.state} <br /> {props.address}</li>
							</ul>
						</div>
					</div>
          </div>

          <hr />

          <div className="resume-intro py-3" >
            {/* ... (intro content) ... */}
            <div className="align-items-center " style={{display : 'flex' , flexDirection : 'row'}}>
              <div className="text-left">
                  <img className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto" src={props.imgUrl ? props.imgUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
                  width={"200px"}  alt='profil' />
              </div>
              
              <div className="text-start">
                <p className="mb-0" style={{color : Colortext1.color === '#ffffff' ? '#000000' : '#ffffff'}}>
                {props.profesummary}
                </p>
              </div>
					</div>

          </div>

          <hr />

          <div className="resume-body" style={{color : Colortext1.color === '#ffffff' ? '#000000' : '#ffffff'}}>
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">

              <section className="education-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4" style={TitleColor}>Education</h3>
                {props.education.map((edu, index) => {
                    if (index % 2 === 0) {
                        const nextEdu = props.education[index + 1];
                        return (
                            <div key={index} className="row mb-3">
                                <div className="col-12 col-md-5 col-lg-6">
                                    <div className="resume-degree "style={{fontWeight : "bold" , fontSize : '19px'}}>{edu.school}</div>
                                    <div className="resume-degree-org">{edu.degree}</div>
                                    <div className="resume-degree-time">
                                        {edu.startDate} - {edu.endDate}
                                    </div>
                                </div>
                                {nextEdu && (
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="resume-degree " style={{fontWeight : "bold" , fontSize : '19px'}}>{nextEdu.school}</div>
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
            </section>




                <section className="work-section py-3">
                  {/* ... (work experiences section) ... */}
                  <h3 className="text-uppercase resume-section-heading mb-4" style={TitleColor}>Work Experiences</h3>
                  {props.experience.map((exp,index) => (        
                    <div key = {index} className="item ">
                      <div className="item-heading row align-items-center ">
                        <h4 className=" col-12 col-md-5 col-lg-6 " style={{fontWeight : "bold" , fontSize : '19px'}}>{exp.position}</h4>
                        <div className="item-meta col-12 col-md-5 col-lg-6 text-start text-md-end">| {exp.company} <br /> | {exp.startDate} - {exp.endDate}</div>
                        <div className="item-content"><p>{exp.workSummary}</p></div>
                      </div>
                      
                    </div>
                  ))}
                </section>


                <section className="project-section py-3">
                  {/* ... (projects section) ... */}
                  <h3 className="text-uppercase resume-section-heading mb-4" style={TitleColor}>Projects</h3>

								<div className="item mb-3">
                {props.projects.map((projet,index) => (
                  <div key={index}>
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2" style={{fontWeight : "bold" , fontSize : '19px'}}> {projet.projectName}</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4  text-start text-md-end"> {projet.projectType}</div>
										
									</div>
									<div className="item-content">
										<p> {projet.description}</p>
									</div>
                  </div>
                  ))} 
								</div>
                </section>


                <section className="certificate-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4" style={TitleColor}>Certificates</h3>
                {props.certificates.map((cert, index) => {
                    if (index % 2 === 0) {
                        const nextCert = props.certificates[index + 1];
                        return (
                            <div key={index} className="row mb-3">
                                <div className="col-6">
                                    <div className="resume-certificate-company font-weight-bold">{cert.company}</div>
                                    <div className="resume-certificate-link text-muted">
                                        <a  target="_blank" rel="noopener noreferrer">
                                            {cert.certificateLink}
                                        </a>
                                    </div>
                                </div>
                                {nextCert && (
                                    <div className="col-6">
                                        <div className="resume-certificate-company font-weight-bold">{nextCert.company}</div>
                                        <div className="resume-certificate-link text-muted">
                                            <a  target="_blank" rel="noopener noreferrer">
                                                {nextCert.certificateLink}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    } else {
                        return null; // Skip odd-indexed items
                    }
                })}
            </section>
              </div>

              <aside className="resume-aside col-12 col-lg-4 col-xl-3 " style={background2color}>
                <section className="skills-section py-3">
                  <div className="item text-center">
                  <h4 className="item-title " style={TitleColor}>skills</h4>
                  {props.skills.map((skill, index) => (
            			<ul key={index} className="list-unstyled resume-skills-list">
                    <li className="mb-2">{skill.skill}</li>
                    </ul>
									))}
									</div>
                </section>

              

                <section className="languages-section py-3 ">
                  {/* ... (languages section) ... */}
                  <h3 className="text-uppercase resume-section-heading mb-4 text-center" style={TitleColor}>Languages</h3>
                  {props.languages.map((language ,index) => (                     
										<ul key = {index} className="list-unstyled resume-languages-list mx-1">
											<li className="mb-3">
												<div className="resume-degree font-weight-bold">{language.language} - ({language.proficiency}) </div>
												
											</li>
										</ul>
                    ))}
                </section>

                <section className="skills-section py-3 text-center">
										<h3 className="text-uppercase resume-section-heading mb-4" style={TitleColor}>Interests</h3>
                    {props.hobbies.map((hobbie ,index) => (
										<ul key={index} className="list-unstyled resume-interests-list mb-0">
											<li className="mb-2">{hobbie}</li>
										</ul>
                    ))} 
									</section>
               

                
              </aside>
            </div>
          </div>

          <hr />

          <div className="resume-footer text-center">
            {/* ... (footer content) ... */}
            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
            {props.links.map((link, index) => (
							<li key={index} className="list-inline-item mb-lg-0 me-lg-3" style={{color : background2color.backgroundColor}}><i className={`${getIconClass(link.platform)} icon-large`} data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">{link.url}</span></li>
            ))}
						</ul>

          </div>

        </article>
      </div>
    </>
  );
}

export default Resume3Component;
