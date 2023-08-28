import html2canvas from "html2canvas";
import { getIconClass } from "../../data/Datatemp";
import { jsPDF } from 'jspdf';
import './Resume1.css';

const getIconClas = getIconClass;

  const generatePDF = () => {
	const cvContainer = document.querySelector('#cvContainer');
  
	if (cvContainer) {
	  const dpi = 300; 
	  const scale = dpi / 96; 
  
	  html2canvas(cvContainer, { scale: scale }).then(canvas => {
		const imgData = canvas.toDataURL('image/jpeg', 1.0); 
		const pdf = new jsPDF('p', 'mm', 'a4'); 
		const imgWidth = 210; 
		const imgHeight = (canvas.height * imgWidth) / canvas.width;
		pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight); 
		pdf.save('cv.pdf');
	  });
	}
  }


const Resume1Component = (props) => {


  /********** font *********** */
  const fonttext = {
    fontFamily : props.selectedFonttitre,
  }

  const smallerFont = {
        fontSize: '11px', 
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

  const a4Width = 595; 
  const a4Height = 900;

  const smallerImageSize = {
      width: '100px',
      height: '100px',
      objectFit : 'cover', 
  };

  const smallerParagraph = {
      fontSize: '9px',
  };
  

  return (
    <>
    <div className='container mt-3' >
      
        <div className='row' id='cvContainer' style={{ maxWidth: `${a4Width}px`, minWidth : `${a4Width}px` , maxHeight: `${a4Height}px` , minHeight : `${a4Height}px`, margin: '0 auto' }}>
          <div className='col-lg-4 text-center py-4' style={background1color}>
              <div className='Header-left'>
                <img className="img-thumbnail rounded-circle mb-2 " style={smallerImageSize}  
                    src={props.imgUrl ? props.imgUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                    alt='profil'
                />
                <h4 className='display-7 mt-2' style={{...fonttext , ...smallerFont}}> {props.name} {props.surname}</h4>
                <h4 className='lead text-sm mb-4' style={smallerFont}>{props.profession}</h4>
              </div>

              <div>
                <h5 className='text-uppercase  py-2 rounded-pill' style={{color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor , ...smallerFont}}>Contact</h5>
                <ul className='list-unstyled text-white50 ml-5 py-2 text-left' style={smallerParagraph}>
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
                <h5 className='text-uppercase  py-2 rounded-pill' style={{...smallerFont , color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor}}>Skills</h5>
                <div className='row mt-3 mb-3' >
                  {props.skills.map((skill, index) => (
                    <div className='col-md-6 mb-2' key={index}>  
                      <div className='progress resume-progress' style={smallerParagraph}>
                        <div className='progress-bar ' role='progressbar' style={{ width: `${skill.level}%`, backgroundColor : background1color.backgroundColor , color : background2color.backgroundColor , border : '1px solid'}} aria-valuemin='0' aria-valuemax='100'>{skill.skill}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div>
                <h5 className='text-uppercase  py-2 rounded-pill' style={{...smallerFont , color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor}}>Links</h5>
                <ul className='list text-white-80 ml-5 py-2 text-left text-capitalize'>
                {props.links.map((link, index) => (
                    <li key={index} className='list-item' style={smallerParagraph}>
                      <i className={`${getIconClas(link.platform)} icon-small`}></i> -
                      ({link.platform})  {link.url}

                    </li>
                ))}
                </ul>
              </div>

              <div>
                <h5 className='text-uppercase  py-2 rounded-pill' style={{...smallerFont , color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor}}>Languages</h5>
                <ul className='list text-white-80 ml-5 py-2 text-left text-capitalize'>
                {props.languages.map((language ,index) => (
                    <li key={index} className='list-item' style={smallerParagraph}>{language.language} --- {language.proficiency}</li>
                ))}
                </ul>
              </div>

              <div>
                  <h5 className='text-uppercase  py-2 rounded-pill' style={{...smallerFont , color : TitleColor.color , fontFamily : fonttext.fontFamily , backgroundColor : background2color.backgroundColor}}>Hobbies</h5>
                  <div className="row mt-3 mb-3">
                      {props.hobbies.map((hobbie, index) => (
                          <div className='col-md-6 mb-2' key={index}>  
                          <div className='progress resume-progress' style={smallerParagraph}>
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
                <p style={smallerParagraph}>{props.profesummary}</p>
            </div>

            <br />

            <div className='text-left'>
              <h4 className='text-center' style={TitleColor}>Education</h4>
              <hr />
              {props.education.map((edu, index) => {
                    if (index % 2 === 0) {
                        const nextEdu = props.education[index + 1];
                        return (
                            <div key={index} className="row mb-3" style={smallerParagraph}>
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
                        return null; 
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
                <div key={index} className="row mb-3" style={smallerParagraph}>
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
            return null;
        }
    })}         
            </div>

            <div className='d-flex justify-content-center flex-column'>
              <h4 className='text-center' style={TitleColor}>projects</h4>
              <hr />
                {props.projects.map((projet,index) => (
                <div key={index} >
                  <div className=" col-md-12 row" style={smallerParagraph}>
                    <p className="col-md-6" style={{fontWeight : "bold"}}> {projet.projectName}</p>
                    <p className="col-md-6" style={{fontWeight : "bold"}}> {projet.projectType}</p>
                  </div>
                  <h6 style={smallerParagraph}> {projet.description}</h6>
                  <br /></div>              
                ))}  
            </div>

            <div className='text-left d-flex justify-content-center flex-column'>
              <h4 className='text-center' style={TitleColor}>Certificates</h4>
              <hr />
                {props.certificates.map((certif,index) => (
                  <div className="col-md-12 row" style={smallerParagraph} key={index}>
                    <p className="col-md-6"> {certif.company}</p>
                    <p className="col-md-6"> {certif.certificateLink}</p>
                    <br />             
                  </div>
                ))}  
            </div>

          </div>
        </div>
        
    </div>
    <button onClick={generatePDF} className="btn btn-secondary mt-3 mb-3 mx-auto d-block" type="button">Export PDF</button>

    </>
  );
}

export default Resume1Component