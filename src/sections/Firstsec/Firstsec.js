import './Firstsec.css'
import cv from '../../assets/images/cv.png'
import Buttonsec from '../../components/Buttonsec/Buttonsec'


const Firstsec = () => {
  return (
    <div className='Firstsec'>
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>Online Resume Builder</h6>
            <h2 className='hero-title'>Stand Out from the Crowd: <br/> Be part of <span className='difcolor'>the 3%</span> who make their <span className='difcolor'>resumes <br /> shine</span>.</h2>
            <h6 className='hero-subtitle two'>Easy to use and done within minutes - <span className='difcolor'>try now for free</span></h6>
        </div>
        <div className='hero-bt-img'>
        <Buttonsec /> <br />
        <img className='image1' src={cv} alt='' />
        </div>
    </div>
    </div>
  )
}

export default Firstsec