import React from 'react'
import './Service.scss'
import FormatedLogo from '../../Components/FormatedLogo/FormatedLogo'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
const tableIcon = [
  {
    icon: 'Vector (8).png'
  },
  {
    icon: 'Vector (9).png'
  },
  {
    icon: 'Vector (10).png'
  },
  {
    icon: 'bx-at.svg.png'
  },
  {
    icon: 'Vector (11).png'
  }
]
const Service = () => {
  return (
    <div className='container-services'>
      <NavBar />

      <div className='service-titles'>
        <h1>
            <FormatedLogo text1={'Paps\''} text2={"services"} color1={'#006735'} color2={'#FF5D00'} fontSize={'3em'}/>
        </h1>
        <p>
          Un catalogue de services juste pour repondre à vos besoins.
        </p>
        <button>
            Prendre Contact
        </button>
      </div>

      <div className='section-office'>
        <img src="pana.png" alt="" />
      </div>

      <div className='section-contacts'>
        <div className='block-emojis'>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <p>
        Alors, vous attendez quoi pour vous <span>servir</span> ?
        </p>
        <div className='block-icons'>
        {tableIcon.map(elt => <Contacts icon={elt.icon}/>)}
        </div>
      </div>

      <Footer/>
    </div>
  )
}

const Contacts = ({icon}) =>{
  return(
    <div className='container-icon'>
      <img src={icon} alt="" />
    </div>
  )
}
export default Service