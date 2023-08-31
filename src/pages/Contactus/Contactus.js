import './Contactus.css'
import { Header } from '../../sections/index';

const Contactus = () => {
  return (
    <>
        <Header/>
        <div class="contact-page section">
            <div class="container " style={{backgroundColor: 'azure' , borderRadius : '50px'}}>
                <div class="row m-4 p-4 py-5" >
                    <div class="col-lg-6 align-self-center">
                        <div class="left-text">
                            <div class="section-heading">
                                <h6 style={{color: 'blue'}}>Contact Us</h6>
                                <h2 style={{color: 'black'}}>Resume Yane</h2>
                            </div>
                            <p style={{color: 'black'}}>Feel free to get in touch with us for any inquiries, collaborations, or simply to say hello. We value your feedback and are here to assist you in any way we can. <br />Our dedicated team is ready to promptly address your questions and concerns. Please fill out the form below or use the provided contact details to reach out to us. We look forward to hearing from you!</p>
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
                                        <iframe title="Google Maps Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.535516790647!2d-6.583745088191546!3d34.260394006597465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac217f3f3451ed%3A0x67178a59368eb9b2!2sYaneCode%20digital!5e0!3m2!1sfr!2sma!4v1693399524229!5m2!1sfr!2sma" width="100%" height="325px" frameborder="0" style={{border: '0' , borderRadius: '23px'}}></iframe>
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