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
  return (
    <>
      <div className=" container bg-light" style={{maxWidth : '1000px'}} >
        <article className="resume-wrapper mx-auto  p-5 mb-5 my-5 shadow-lg">

          <div className="resume-header">
            {/* ... (header content) ... */}
            <div className="row align-items-center">
						<div className="resume-title col-12 col-md-6 col-lg-6 col-xl-6">
							<h2 className="resume-name mb-0 text-uppercase">{props.name} {props.surname}</h2>
							<div className="resume-tagline mb-3 mb-md-0">{props.profession}</div>
						</div>
						<div className="resume-contact col-12 col-md-6 col-lg-6 offset-md-1 col-xl-5">
							<ul className="list-unstyled mb-0">
								<li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg me-2 "></i><a className="resume-link" href="tel:#">{props.phone}</a></li>
								<li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg me-2"></i><a className="resume-link" href="mailto:#">{props.email}</a></li>
								<li className="mb-0"><i className="fas fa-map-marker-alt fa-fw fa-lg me-2"></i>{props.country} , {props.state} <br /> {props.address}</li>
							</ul>
						</div>
					</div>
          </div>

          <hr />

          <div className="resume-intro py-3">
            {/* ... (intro content) ... */}
            <div className="align-items-center " style={{display : 'flex' , flexDirection : 'row'}}>
              <div className="text-left">
                  <img className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto" src={props.imgUrl ? props.imgUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
                  width={"200px"}  alt='profil' />
              </div>
              
              <div className="text-start">
                <p className="mb-0">
                {props.profesummary}
                </p>
              </div>
					</div>

          </div>

          <hr />

          <div className="resume-body">
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">

              <section className="education-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
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
            </section>




                <section className="work-section py-3">
                  {/* ... (work experiences section) ... */}
                  <h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
                  {props.experience.map((exp,index) => (        
                    <div key = {index} className="item mb-3">
                      <div className="item-heading row align-items-center mb-2">
                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">{exp.position}</h4>
                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">| {exp.company} <br /> | {exp.startDate} - {exp.endDate}</div>
                        
                      </div>
                      <div className="item-content">
                        <p>{exp.workSummary}</p>
                      </div>
                    </div>
                  ))}
                </section>


                <section className="project-section py-3">
                  {/* ... (projects section) ... */}
                  <h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>

								<div className="item mb-3">
                {props.projects.map((projet,index) => (
                  <div key={index}>
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"> {projet.projectName}</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end"> {projet.projectType}</div>
										
									</div>
									<div className="item-content">
										<p> {projet.description}</p>
									</div>
                  </div>
                  ))} 
								</div>
                </section>


                <section className="certificate-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">Certificates</h3>
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

              <aside className="resume-aside col-12 col-lg-4 col-xl-3 ">
                <section className="skills-section py-3">
                {props.skills.length < 6 && ( 
                  <div className="item text-center">
                  <h4 className="item-title ">skills</h4>
                  {props.skills.map((skill, index) => (
            			<ul key={index} className="list-unstyled resume-skills-list">
                    <li className="mb-2">{skill}</li>
                    </ul>
									))}
									</div>
                )}

                  {props.skills.length >= 6 && ( 
                    <div className="row text-center ">
                                      <h4 className="item-title mb-3">skills</h4>

                        {props.skills.map((skill, index) => {
                              if (index % 2 === 0) {
                                const nextSkill = props.skills[index + 1];
                                return (
                                    <div key={index} className="col-md-12">
                                        <ul className="list-unstyled resume-skills-list">
                                            <li className="mb-2">{skill} {nextSkill && <span>- {nextSkill}</span>}</li>
                                        </ul>
                                    </div>
                                );
                            }
                            return null;
                        })}
                        
                    </div>)}
                </section>

              

                <section className="education-section py-3 ">
                  {/* ... (languages section) ... */}
                  <h3 className="text-uppercase resume-section-heading mb-4 text-center">Languages</h3>
                  {props.languages.map((language ,index) => (                     
										<ul key = {index} className="list-unstyled resume-education-list mx-1">
											<li className="mb-3">
												<div className="resume-degree font-weight-bold">{language.language} - ({language.proficiency}) </div>
												
											</li>
										</ul>
                    ))}
                </section>

                <section className="skills-section py-3 text-center">
										<h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
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
							<li key={index} className="list-inline-item mb-lg-0 me-lg-3"><a className="resume-link" href="#"><i className={`${getIconClass(link.platform)} icon-large`} data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">{link.url}</span></a></li>
            ))}
						</ul>

          </div>

        </article>

      </div>
    </>
  );
}

export default Resume3Component;
