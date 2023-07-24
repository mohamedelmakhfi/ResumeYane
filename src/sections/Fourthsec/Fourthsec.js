import Card  from '../../components/Card/Card'
import './Fourthsec.css'
import { FaStar , FaLaptopCode , FaRegThumbsUp} from 'react-icons/fa'


const CardFourthsec = [
  { id : "card1" , title:'Make a resume that wins interviews '  , para:'use our resume maker with its advanced creation tools to tell a professional story' ,                           icon:<FaStar style={{"color" : "blue"}} /> },
  { id : "card2" , title:'Resume writing nade easy'  , para:'Streamline your career path with ease - Resume writing made simple' ,                                                      icon:<FaRegThumbsUp style={{"color" : "blue"}} /> },
  { id : "card3" , title:'A recruiter-tested cv maker tool'  , para:'Unlock your career potential with the ultimate advantage- Harness the power of a recruiter-tested CV maker tool' , icon:<FaLaptopCode style={{"color" : "blue"}} /> },
]

const cards = CardFourthsec.map( card => {
  return <Card key={card.id} title={card.title}   para={card.para}   icon={card.icon} />
})

const Fourthsec = () => {
  return (
    <div className='Fourthsec'>
        <div className='Fourthsec-main'>
            {cards}
        </div>
    </div> 















   /* <div class="container text-center">
    <div class="row">
      <div class="col">
      <Card title='Make a resume that wins interviews '   para='use our resume maker with its advanced creation tools to tell a professional story'/>

      </div>
      <div class="col">
      <Card title='Make a resume that wins interviews '   para='use our resume maker with its advanced creation tools to tell a professional story'/>

      </div>
      <div class="col">
      <Card title='Make a resume that wins interviews '   para='use our resume maker with its advanced creation tools to tell a professional story'/>

      </div>
    </div>
  </div>*/
  )
}

export default Fourthsec