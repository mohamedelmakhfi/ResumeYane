
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
						    <div className="primary-info col-auto">
							    <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Steve Doe</h1>
							    <div className="title mb-3">{props.profession}</div>
							    <ul className="list-unstyled">
								    <li className="mb-2"><a className="text-link" href="#"><i className="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>Steve.Doe@website.com</a></li>
								    <li><a className="text-link" href="#"><i className="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>0123 456 78900</a></li>
							    </ul>
						    </div>
                            
						    <div className="secondary-info col-auto mt-5">
							    <ul className="resume-social list-unstyled">
					                <li className="mb-3"><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/stevedoe</a></li>
					                <li className="mb-3"><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fab fa-github-alt fa-fw"></i></span>github.com/username</a></li>
					                <li className="mb-3"><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fab fa-codepen fa-fw"></i></span>codepen.io/username/</a></li>
					                <li><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fas fa-globe"></i></span>yourwebsite.com</a></li>
							    </ul>
						    </div>
					    </div>
					    
				    </div>
			    </div>
		    </header>
            <hr />
		    <div className="resume-body p-5" style={{display : 'flex' , flexDirection : 'column'}}>
			    <section className="resume-section summary-section mb-5">
				    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
				    <div className="resume-section-content">
					    <p className="mb-0">{props.profesummary}</p>
				    </div>
			    </section>
			    <div className="row">
				    <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">
					    <section className="resume-section experience-section mb-5">

						    <div className="resume-section-content">
                            
                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                                {props.experience.map((exp,index) => (
								    <article className="resume-timeline-item position-relative pb-5" key = {index}>
									    
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">{exp.position}</h3>
										        <div className="resume-company-name ms-auto">{exp.company}</div>
										    </div>
										    <div className="resume-position-time">{exp.startDate} - {exp.endDate}</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>{exp.workSummary}</p>
									    </div>

								    </article>
                                ))} 

                                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">education</h2>
                                {props.education.map((edu,index) => (    
                                    <article className="resume-timeline-item position-relative pb-5" key = {index}>
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">School : {edu.school}</h3>
										        <div className="resume-company-name ms-auto">Degree : {edu.degree}</div>
										    </div>
										    <div className="resume-position-time">{edu.startDate} - {edu.endDate}</div>
									    </div>
									   
								    </article>
                                ))}

									<article class="resume-timeline-item position-relative pb-5">
									    
									    <div class="resume-timeline-item-header mb-2">
										    <div class="d-flex flex-column flex-md-row">
										        <h3 class="resume-position-title font-weight-bold mb-1">Co-Founder & Lead Developer</h3>
										        <div class="resume-company-name ms-auto">To-do Lists</div>
										    </div>
										    <div class="resume-position-time">2015 - 2019</div>
									    </div>
									    <div class="resume-timeline-item-desc">
										    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
									    </div>

								    </article>
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
                                    {props.hobbies.map((hobbie ,index) => (    
                                        <li className="mb-1">{hobbie}</li>
                                    ))}
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