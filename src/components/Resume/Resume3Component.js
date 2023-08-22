import React from 'react';
import { getIconClass } from '../../data/Datatemp';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
;

const getIconClas = getIconClass;

/**const generatePDF = () => {
  const report = new JsPDF('portrait','pt','a4');
  

  report.html(document.querySelector('#cvContainer')).then(() => {
      report.save('report.pdf');
  });

  
    // Utilise html2canvas pour capturer le contenu en tant qu'image
    const cvContainer = document.querySelector('#cvContainer');
    html2canvas(cvContainer).then((canvas) => {
    const imgData = canvas.toDataURL('image/png'); // Convertit l'image en données base64
    report.addImage(imgData, 'PNG', 0, 0, 595, 842); // Ajoute l'image au PDF
    report.save('report.pdf');
});
   
}*/

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


const Resume3Component = (props) => {

    /********** font *********** */
    const fonttext = {
      fontFamily : props.selectedFonttitre,
    }
    const smallerFont = {
      fontSize: '10px', // Ajuste la taille de police
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
      fontSize: '8px', // Ajuste la taille des paragraphes
  };
  

  return (
    <div className="container mt-3">
      
        <div className="resume-wrapper mx-auto p-5 " id='cvContainer' style={{backgroundColor : background1color.backgroundColor === '#A80000' ? '#D9D9D9' : background1color.backgroundColor , maxWidth: `${a4Width}px`, minWidth : `${a4Width}px` , maxHeight: `${a4Height}px` , minHeight : `${a4Height}px`, margin: '0 auto' }}>

          
            <div className="row align-items-center py-2" style={{color : Colortext2.color , background : background2color.backgroundColor}}>
						<div className="resume-title col-12 col-md-6 col-lg-6 col-xl-6">
							<h2 className="resume-name mb-0 text-uppercase" style={TitleColor}>{props.name} {props.surname}</h2>
							<div className="resume-tagline mb-3 mb-md-0" style={{fontWeight : "bold"  , ...smallerFont}}>{props.profession}</div>
						</div>
						<div className="resume-contact col-12 col-md-6 col-lg-6 offset-md-1 col-xl-5" style={smallerParagraph}>
							<ul className="list-unstyled mb-0">
								<li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg me-2 "></i>{props.phone}</li>
								<li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg me-2"></i>{props.email}</li>
								<li className="mb-0"><i className="fas fa-map-marker-alt fa-fw fa-lg me-2"></i>{props.country} , {props.state} <br /> {props.address}</li>
							</ul>
						</div>
					</div>
          

          <hr />

          
            <div className="align-items-center " style={{display : 'flex' , flexDirection : 'row'}}>
              <div className="text-left">
                  <img className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto" src={props.imgUrl ? props.imgUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
                  style={smallerImageSize}  alt='profil' />
              </div>
              
              <div className="text-start">
                <p className="mb-0" style={{color : Colortext1.color === '#ffffff' ? '#000000' : '#ffffff' , ...smallerParagraph}}>
                {props.profesummary}
                </p>
              </div>
					</div>

        

          <hr />

          <div className="resume-body" style={{color : Colortext1.color === '#ffffff' ? '#000000' : '#ffffff'}}>
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">

              <section className="education-section ">
                <h3 className="text-uppercase resume-section-heading mb-3" style={TitleColor}>Education</h3>
                {props.education.map((edu, index) => {
                    if (index % 2 === 0) {
                        const nextEdu = props.education[index + 1];
                        return (
                            <div key={index} className="row mb-3" style={smallerParagraph}>
                                <div className="col-12 col-md-5 col-lg-6">
                                    <div className="resume-degree "style={{fontWeight : "bold"}}>{edu.school}</div>
                                    <div className="resume-degree-org">{edu.degree}</div>
                                    <div className="resume-degree-time">
                                        {edu.startDate} - {edu.endDate}
                                    </div>
                                </div>
                                {nextEdu && (
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="resume-degree " style={{fontWeight : "bold"}}>{nextEdu.school}</div>
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




                <section className="work-section py-2">
                  {/* ... (work experiences section) ... */}
                  <h3 className="text-uppercase resume-section-heading mb-3" style={TitleColor}>Work Experiences</h3>
                  {props.experience.map((exp,index) => (        
                    <div key = {index} className="item" >
                      <div className="item-heading row align-items-center " style={smallerParagraph}>
                        <h4 className=" col-12 col-md-5 col-lg-6 " style={{fontWeight : "bold" , ...smallerParagraph}}>{exp.position}</h4>
                        <div className="item-meta col-12 col-md-5 col-lg-6 text-start text-md-end">| {exp.company} <br /> | {exp.startDate} - {exp.endDate}</div>
                        <div className="item-content"><p>{exp.workSummary}</p></div>
                      </div>
                      
                    </div>
                  ))}
                </section>


                <section className="project-section py-2">
                  {/* ... (projects section) ... */}
                  <h3 className="text-uppercase resume-section-heading mb-3" style={TitleColor}>Projects</h3>

								<div className="item mb-3">
                {props.projects.map((projet,index) => (
                  <div key={index} style={smallerParagraph}>
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2" style={{fontWeight : "bold" , ...smallerParagraph}}> {projet.projectName}</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4  text-start text-md-end"> {projet.projectType}</div>
										
									</div>
									<div className="item-content">
										<p>{projet.description}</p>
									</div>
                  </div>
                  ))} 
								</div>
                </section>


                <section className="certificate-section py-2">
                <h3 className="text-uppercase resume-section-heading mb-3" style={TitleColor}>Certificates</h3>
                {props.certificates.map((cert, index) => {
                    if (index % 2 === 0) {
                        const nextCert = props.certificates[index + 1];
                        return (
                            <div key={index} className="row mb-3" style={smallerParagraph}>
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
            			<ul key={index} className="list-unstyled resume-skills-list" style={smallerParagraph}>
                    <li className="mb-2">{skill.skill}</li>
                    </ul>
									))}
									</div>
                </section>

              

                <section className="languages-section py-2 ">
                  {/* ... (languages section) ... */}
                  <h3 className="text-uppercase resume-section-heading mb-3 text-center" style={TitleColor}>Languages</h3>
                  {props.languages.map((language ,index) => (                     
										<ul key = {index} className="list-unstyled resume-languages-list mx-1 d-flex justify-content-center" style={smallerParagraph}>
											<li className="">
												<div className="resume-degree font-weight-bold">{language.language} - ({language.proficiency}) </div>
												
											</li>
										</ul>
                    ))}
                </section>

                <section className="skills-section py-3 text-center">
										<h3 className="text-uppercase resume-section-heading mb-4" style={TitleColor}>Interests</h3>
                    {props.hobbies.map((hobbie ,index) => (
										<ul key={index} className="list-unstyled resume-interests-list mb-0" style={smallerParagraph}>
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
            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted" style={smallerParagraph}>
            {props.links.map((link, index) => (
							<li key={index} className="list-inline-item mb-lg-0 me-lg-3" style={{color : background2color.backgroundColor}}><i className={`${getIconClas(link.platform)} icon-small`} data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">{link.url}</span></li>
            ))}
						</ul>

          </div>

        </div>
        <button onClick={generatePDF} className="btn btn-secondary mt-3 mb-3 mx-auto d-block" type="button">Export PDF</button>
      </div>

   
  );
}

export default Resume3Component;
