import './Secondsec.css'
import imgsectwo from '../../assets/images/imgsectwo.png'
import Buttonsec from '../../components/Buttonsec/Buttonsec'

const Secondsec = () => {
  return (
    <div className='Secondsec'>
    <div className='Secondsec-main'>
        <div className='Secondsec-text '>
            <h6 className='Secondsec-title'>Unlock <span className='defcolor'>Your Career</span> Potential with a <span className='defcolor'>Powerful Resume</span></h6>
            <Buttonsec />
            <p className='Secondsec-para'>Your journey towards a successful career begins with a compelling
                resume. <br /> It's not just a piece of paper; it's your first impression
                potential employers In a competitive job market, your resume needs to showcase your unique
                personality,<br /> skills, and accomplishments. It should captivate recruiters
                and make them<br /> eager to learn more about you.
            </p>           
        </div>
        <div className='Secondsec-img'>
            <img className='image2' src={imgsectwo} alt='' />
        </div>
    </div>
    </div>
  )
}

export default Secondsec