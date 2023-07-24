import './Thirdsec.css'
import Ansquestion from '../../components/Ansquestion/Ansquestion'
import { FaFileCircleQuestion } from 'react-icons/fa6'

const Thirdsec = () => {
  return (
    <div className='Thirdsec'>
        <div className='Thirdsec-main'>
        <h2 className='Thirdsec-title'>Frequently asked<span className='defcolorr'> questions</span>  <FaFileCircleQuestion  style={{'color' : "blue"}}/></h2>
        <div className='ls'>
            <Ansquestion question='Can I use ResumeCat for free?' answer='Absolutely! you can use for free.' />
            <Ansquestion question='Can I customize my resume?' answer='We have professionally built templates that are designed to adapt to your content.' />
            <Ansquestion question='Can I download my resume as PDF?' answer='Yes! After you complete your resume you will be able to download it as PDF with ease.' />
            <Ansquestion question='How can I cancel my account?' answer='After login, you can easily manage everything account related in your "Account Settings" page.' />
        </div>
        </div>
        
    </div>
    
  )
}

export default Thirdsec