import './Contactus.css'
import { Firstsec, Header , Fourthsec } from '../../sections/index';

const Contactus = () => {
  return (
    <>
        <Header/>
        {/*<section className="contactus mb-4">

            <h2 className="h1-responsive font-weight-bold text-center my-4"><span style={{"color":"blue" ,"fontWeight":"bold"}}>Contact</span> us</h2>
            <p className="text-center w-responsive mx-auto mb-5" style={{"fontSize":"18px"}}>Do you have <span style={{"color":"blue" ,"fontWeight":"bold"}}>any</span> questions? <br /> Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

            <div className="row">

                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                        <div className="row">

                                        <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control" />
                                    <label for="name" className="coleur"> name</label>
                                </div>
                            </div>
                    
                                        <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control" />
                                    <label for="email" className="coleur"> email</label>
                                </div>
                            </div>
                    
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control" />
                                    <label for="subject" className="coleur">Subject</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                                        <div className="col-md-12">

                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    <label for="message " className='coleur' > message</label>
                                </div>

                            </div>
                        </div>

                    </form>

                    <div className="text-center text-md-left mt-4">
                        <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div className="status"></div>
                </div>

                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x coleur" ></i>
                            <p>San Francisco, CA 94126, USA</p>
                        </li>

                        <li><i className="fas fa-phone mt-4 fa-2x coleur" ></i>
                            <p>+ 01 234 567 89</p>
                        </li>

                        <li><i className="fas fa-envelope mt-4 fa-2x coleur" ></i>
                            <p>contact@mdbootstrap.com</p>
                        </li>
                    </ul>
                </div>

            </div>

  </section>*/}


    <div class="contact-page section">
        <div class="container " style={{backgroundColor: 'azure' , borderRadius : '50px'}}>
            <div class="row m-4 p-4 py-5" >
                <div class="col-lg-6 align-self-center">
                    <div class="left-text">
                         <div class="section-heading">
                            <h6 style={{color: 'blue'}}>Contact Us</h6>
                            <h2 style={{color: 'black'}}>Say Hello!</h2>
                        </div>
                        <p style={{color: 'black'}}>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                        <ul>
                            <li><span style={{color: 'blue'}}>Address</span> Sunny Isles Beach, FL 33160, United States</li>
                            <li><span style={{color: 'blue'}}>Phone</span> +123 456 7890</li>
                            <li><span style={{color: 'blue'}}>Email</span> lugx@contact.com</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">
                            <div class="col-lg-12">
                                <div id="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="325px" frameborder="0" style={{border: '0' , borderRadius: '23px'}}></iframe>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <form id="contact-form" action="" method="post">
                                <div className="row mt-2">
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input className="input-field" type="text" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input className="input-field" type="text" name="surname" id="surname" placeholder="Your Surname..." autoComplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input className="input-field" type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input className="input-field" type="text" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea className="textarea-field" name="message" id="message" placeholder="Your Message"></textarea>
                                            </fieldset>
                                        </div>
                                        <div className=" offset-lg-1 col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="btn btnn btn-primary mb-4">Send Message Now</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Contactus