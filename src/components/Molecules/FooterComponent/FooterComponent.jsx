import React from 'react'
import { SocialMedia } from '../../Atoms/SocialMedia/SocialMedia'
import linkedin from '../../../assets/images/linkedin.png'
import gmail from '../../../assets/images/gmail.png'
import whatsapp from '../../../assets/images/whatsapp.png'
import './footerComponent.scss'

export const FooterComponent = () => {

  return (
   <footer>
     <SocialMedia
    url={'mailto:rosmery.salazar0507gmail.com'} 
    icon={gmail}
    contact={'rosmery.salazar0507@gmail.com'}/>
    <SocialMedia
    url={'https://wa.me}'} 
    icon={whatsapp}
    contact={'+523326492584'}/>  
    <SocialMedia
    url={'https://www.linkedin.com/in/rosmery-salazar-irarragorri-8641571a3/'} 
    icon={linkedin}/>   
   </footer>
  )
}
