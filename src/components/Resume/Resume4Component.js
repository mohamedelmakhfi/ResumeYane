import { getIconClass } from "../../data/Datatemp";
import JsPDF, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
;

const getIconClas = getIconClass;

/*const generatePDF = () => {
  const report = new JsPDF('portrait','pt','a4');
  

  /*report.html(document.querySelector('#cvContainer')).then(() => {
      report.save('report.pdf');
  });

  
    // Utilise html2canvas pour capturer le contenu en tant qu'image
    const cvContainer = document.querySelector('#cvContainer');
    html2canvas(cvContainer).then((canvas) => {
    const imgData = canvas.toDataURL('image/png'); // Convertit l'image en données base64
    report.addImage(imgData, 'PNG', 0, 0, 595, 842); // Ajoute l'image au PDF
    report.save('report.pdf');
});
};*/

/*const generatePDF = () => {
	const report = new JsPDF('portrait', 'pt', 'a4');
  
	// Utilize html2canvas to capture the content as an image
	const cvContainer = document.querySelector('#cvContainer');
	html2canvas(cvContainer).then((canvas) => {
	  const imgData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG format with higher quality
	  report.addImage(imgData, 'JPEG', 0, 0, 595, 842); // Add the image to the PDF
	  report.save('report.pdf');
	});
  };*/
  const generatePDF = () => {
	const cvContainer = document.querySelector('#cvContainer');
  
	if (cvContainer) {
	  const dpi = 300; // Set your desired DPI value
	  const scale = dpi / 96; // Calculate scale factor based on DPI
  
	  html2canvas(cvContainer, { scale: scale }).then(canvas => {
		const imgData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG format with higher quality
  
		const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF document
		const imgWidth = 210; // A4 width in mm
		const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate image height to maintain aspect ratio
		pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight); // Add image to PDF
		pdf.save('cv.pdf'); // Save the PDF
	  });
	}
  }

const Resume4Component = (props) => {

	   /********** font *********** */
  const fonttext = {
    fontFamily : props.selectedFonttitre,
  }

  const smallerFont = {
        fontSize: '12px', // Ajuste la taille de police
    };
    
  /* ********* titles *********** */
  const TitleColor = {
    color : props.titleColor,
    ...fonttext,
    ...smallerFont,
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

  const a4Width = 595; // Largeur en points
  const a4Height = 900; // Hauteur en points

  const smallerImageSize = {
      width: '100px', // Ajuste la taille de l'image
  };

  const smallerParagraph = {
      fontSize: '10px', // Ajuste la taille des paragraphes
  };
	
	return (
    <div className='container mt-3'  >
    <div className="resume-wrapper text-center position-relative"  >
	    <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg" id='cvContainer' style={{maxWidth: `${a4Width}px`, minHeight : `${a4Height}px`, margin: '0 auto' }}>
		    <header className="resume-header pt-3 pt-md-0" style={{backgroundColor : background1color.backgroundColor === '#A80000' ? 'black' : background1color.backgroundColor}} >
			    <div className="row">
				<div className="col-block col-md-auto resume-picture-holder text-center text-md-start mt-4 mx-4" >
					<img
						className="picture "
						src={props.imgUrl ? props.imgUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
						
						alt='profil'
						style={{
							borderRadius: "50%", 
							borderRight : `5px solid ${Colortext1.color}`,
							...smallerImageSize,
						}}
					/>
				</div>

				    <div className="col">
					    <div className="row justify-content-center justify-content-md-between" style={Colortext1}>
						    <div className="primary-info col-md-5">
							    <h2 className="name mt-4 mb-0" style={{fontFamily : fonttext.fontFamily , color : TitleColor.color , fontWeight : "bold" , fontSize : "16px"}}>{props.name} {props.surname}</h2>
							    <div className="title mb-3" style={smallerFont}>{props.profession}</div>
							    <ul className="list-unstyled" style={smallerParagraph}>
								    <li className="mb-2"><i className="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>{props.email}</li>
								    <li><i className="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>{props.phone}</li>
							    </ul>
						    </div>
                            
						    <div className="secondary-info col-md-6 mt-4">
							    <ul className="resume-social list-unstyled" style={smallerParagraph}>
								{props.links.map((link, index) => (
					                <li key={index} className="mb-3"><span className="fa-container text-center me-2"><i className={`${getIconClas(link.platform)} icon-small`}></i></span>{link.url}</li>
								))} 
							    </ul>
						    </div>
					    </div>
					    
				    </div>
			    </div>
		    </header>
		    <div className="resume-body p-3" style={{display : 'flex' , flexDirection : 'column' , backgroundColor : background2color.backgroundColor}}>
			    <section className="resume-section summary-section mb-3" style={background2color}>
				    <h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-1" style={TitleColor}>Career Summary</h2>
				    <div className="resume-section-content">
					    <p className="mb-0"style={smallerParagraph}>{props.profesummary}</p>
				    </div>
			    </section>
			    <div className="row">
				    <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5" style={background2color}>
					    <section className="resume-section experience-section mb-5">

						    <div className="resume-section-content">

							<h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-0" style={TitleColor}>education</h2>
							<div className="mb-2">
                                {props.education.map((edu,index) => (    
                                    <article className="resume-timeline-item position-relative pb-1" key={index}>
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row" style={smallerParagraph}>
										        <h4 className="resume-position-title font-weight-bold mb-1" style={{...smallerParagraph , fontWeight : "bold"}}>School : {edu.school}</h4>
										        <div className="resume-company-name ms-auto">Degree : {edu.degree}</div>
										    </div>
										    <div className="resume-position-time"style={smallerParagraph}>{edu.startDate} - {edu.endDate}</div>
									    </div>
									   
								    </article>
                                ))}</div>
                            

                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-0" style={TitleColor}>Work Experience</h2>
							<div className="mb-2">
								{props.experience.map((exp,index) => (
								    <article className="resume-timeline-item position-relative " key={index}>
									    
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row"style={smallerParagraph}>
										        <h4 className="resume-position-title font-weight-bold mb-1"style={{...smallerParagraph , fontWeight : "bold"}}>{exp.position}</h4>
										        <div className="resume-company-name ms-auto">{exp.company}</div>
										    </div>
										    <div className="resume-position-time"style={smallerParagraph}>{exp.startDate} - {exp.endDate}</div>
									    </div>
									    <div className="resume-timeline-item-desc" style={smallerParagraph}>
										    <p>{exp.workSummary}</p>
									    </div>

								    </article>
                                ))} </div>
                            

							<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-0" style={TitleColor}>Projects</h2>

									{props.projects.map((projet,index) => (
									<article key={index} className="resume-timeline-item position-relative " style={smallerParagraph}>
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1" style={{...smallerParagraph , fontWeight : "bold"}}>{projet.projectName}</h3>
										        <div className="resume-company-name ms-auto">{projet.projectType}</div>
										    </div>
										    
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>{projet.description}</p>
									    </div>

								    </article>
									))}

										<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-0" style={TitleColor}>Certificates</h2>

										{props.certificates.map((cert, index) => {
											if (index % 2 === 0) {
												const nextCert = props.certificates[index + 1];
												return (
													<div key={index} className="row mb-3">
														<div className="col-6" style={smallerParagraph}>
															<div className="resume-certificate-company " style={{...smallerParagraph , fontWeight : "bold"}}>{cert.company}</div>
															<div className="resume-certificate-link text-muted">
																<a>
																	{cert.certificateLink}
																</a>
															</div>
														</div>
														{nextCert && (
															<div className="col-6" style={smallerParagraph}>
																<div className="resume-certificate-company " style={{...smallerParagraph , fontWeight : "bold"}}>{nextCert.company}</div>
																<div className="resume-certificate-link text-muted">
																	<a>
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
													</div>

					    </section>
				    </div>
				    <div className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4 p-3" style={{backgroundColor : background1color.backgroundColor === '#A80000' ? 'black' : background1color.backgroundColor , color : Colortext1.color}}>
					    <section className="resume-section skills-section">
						    <h2 className="resume-section-title text-uppercase font-weight-bold " style={TitleColor}>Skills</h2>
						    <div className="resume-section-content">
                                <div className="resume-skill-item">
                                    <ul className="list-unstyled " style={smallerParagraph}>
                                    {props.skills.map((skill, index) => (
                                        <li className="mb-2" key={index} >
                                            <div className="resume-skill-name">{skill.skill}</div>
                                            
                                                <div className="progress-bar  " style={{height: "4px",width: `${skill.level}%` ,backgroundColor : TitleColor.color}} ></div>
                                            
                                        </li>
                                    ))}
                                    </ul>
                                </div>
						    </div>
					    </section>
				
					    
					    <section className="resume-section language-section ">
						    <h2 className="resume-section-title text-uppercase font-weight-bold " style={TitleColor}>Language</h2>
						    <div className="resume-section-content">
							    <ul className="list-unstyled resume-lang-list" style={smallerParagraph}>
                                    {props.languages.map((language ,index) => (
                                        <li key={index}><span className="resume-lang-name font-weight-bold">{language.language}</span> <small className=" font-weight-normal">({language.proficiency})</small></li>
                                    ))}
							    </ul>
						    </div>
					    </section>


					    <section className="resume-section interests-section ">
							<h2 className="resume-section-title text-uppercase font-weight-bold " style={TitleColor}>Interests</h2>
							<div className="resume-section-content">
								<ul className="list-unstyled" style={smallerParagraph}>
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
		<button onClick={generatePDF} className="btn btn-secondary mt-3 mb-3 mx-auto d-block" type="button">Export PDF</button>

    </div> 
    </div>
  )
}

export default Resume4Component