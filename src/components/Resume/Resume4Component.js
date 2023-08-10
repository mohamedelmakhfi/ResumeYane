

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
const Resume4Component = (props) => {
  return (
    <div className='container '  style={{maxWidth : '1000px'}}>
    <article className="resume-wrapper text-center position-relative">
	    <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
		    <header className="resume-header pt-4 pt-md-0">
			    <div className="row">
				    <div className="col-block col-md-auto resume-picture-holder text-center text-md-start m-2">
                            <img className="picture" src={props.imgUrl ? props.imgUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
                             width={"250px"}  alt='profil' />
                    </div>
				    <div className="col">
					    <div className="row p-4 justify-content-center justify-content-md-between">
						    <div className="primary-info col-md-5">
							    <h2 className="name mt-4 mb-2 text-dark ">{props.name} {props.surname}</h2>
							    <div className="title mb-3">{props.profession}</div>
							    <ul className="list-unstyled">
								    <li className="mb-2"><a className="text-link" href="#"><i className="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>{props.email}</a></li>
								    <li><a className="text-link" href="#"><i className="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>{props.phone}</a></li>
							    </ul>
						    </div>
                            
						    <div className="secondary-info col-md-7 mt-5">
							    <ul className="resume-social list-unstyled">
								{props.links.map((link, index) => (
					                <li key={index} className="mb-3"><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className={`${getIconClass(link.platform)} icon-large`}></i></span>{link.url}</a></li>
								))} 
							    </ul>
						    </div>
					    </div>
					    
				    </div>
			    </div>
		    </header>
            <hr />
		    <div className="resume-body p-5" style={{display : 'flex' , flexDirection : 'column'}}>
			    <section className="resume-section summary-section mb-4">
				    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
				    <div className="resume-section-content">
					    <p className="mb-0">{props.profesummary}</p>
				    </div>
			    </section>
			    <div className="row">
				    <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">
					    <section className="resume-section experience-section mb-5">

						    <div className="resume-section-content">

							<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-0">education</h2>
                                {props.education.map((edu,index) => (    
                                    <article className="resume-timeline-item position-relative pb-3" key = {index}>
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h4 className="resume-position-title font-weight-bold mb-1">School : {edu.school}</h4>
										        <div className="resume-company-name ms-auto">Degree : {edu.degree}</div>
										    </div>
										    <div className="resume-position-time">{edu.startDate} - {edu.endDate}</div>
									    </div>
									   
								    </article>
                                ))}
                            <br />

                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-0">Work Experience</h2>
                                {props.experience.map((exp,index) => (
								    <article className="resume-timeline-item position-relative pb-1" key = {index}>
									    
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h4 className="resume-position-title font-weight-bold mb-1">{exp.position}</h4>
										        <div className="resume-company-name ms-auto">{exp.company}</div>
										    </div>
										    <div className="resume-position-time">{exp.startDate} - {exp.endDate}</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>{exp.workSummary}</p>
									    </div>

								    </article>
                                ))} 
                            <br />

							<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-0">Projects</h2>

									{props.projects.map((projet,index) => (
									<article key={index} class="resume-timeline-item position-relative ">
									    <div class="resume-timeline-item-header mb-2">
										    <div class="d-flex flex-column flex-md-row">
										        <h3 class="resume-position-title font-weight-bold mb-1">{projet.projectName}</h3>
										        <div class="resume-company-name ms-auto">{projet.projectType}</div>
										    </div>
										    
									    </div>
									    <div class="resume-timeline-item-desc">
										    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
									    </div>

								    </article>
									))}

										<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-0">Certificates</h2>

										{props.certificates.map((cert,index) => (
										<article key={index} class="resume-timeline-item position-relative ">
											<div class="resume-timeline-item-header mb-2">
												<div class="d-flex flex-column flex-md-row">
													<h4 class="resume-position-title font-weight-bold mb-1">{cert.company}</h4>
													<div class="resume-company-name ms-auto">{cert.certificateLink}</div>
												</div>
												
											</div>
											

										</article>
										))}
						    </div>

					    </section>
				    </div>
				    <div className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
					    <section className="resume-section skills-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills</h2>
						    <div className="resume-section-content">
                                <div className="resume-skill-item">
                                    <ul className="list-unstyled mb-4">
                                    {props.skills.map((skill, index) => (
                                        <li className="mb-2" key={index} >
                                            <div className="resume-skill-name">{skill}</div>
                                            <div className="progress resume-progress">
                                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
						    </div>
					    </section>
				
					    
					    <section className="resume-section language-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
						    <div className="resume-section-content">
							    <ul className="list-unstyled resume-lang-list">
                                    {props.languages.map((language ,index) => (
                                        <li><span className="resume-lang-name font-weight-bold">{language.language}</span> <small className="text-muted font-weight-normal">({language.proficiency})</small></li>
                                    ))}
							    </ul>
						    </div>
					    </section>


					    <section className="resume-section interests-section mb-5">
							<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
							<div className="resume-section-content">
								<ul className="list-unstyled">
									{props.hobbies.map((hobbie, index) => {
										if (index % 2 === 0) {
											const nextHobbie = props.hobbies[index + 1];
											return (
												<li className="mb-2" key={index}>
													{hobbie} {nextHobbie &&  <span>&bull; {nextHobbie}</span>}
												</li>
											);
										}
										return null;
									})}
								</ul>
							</div>
						</section>

					    
				    </div>
			    </div>
		    </div>
		    
		    
	    </div>
    </article> 
    </div>
  )
}

export default Resume4Component