import React from 'react'
import { AboutMeText } from '../../Atoms/AboutMeText/AboutMeText.jsx'
import picture from '../../../assets/images/picture.jpg'
import './aboutMeComponent.scss'

export const AboutMeComponent = () => {
  return (
    <aside className='aboutMe'>
      <div className='pictureContainer' >
        <img width={'90%'} height={'90%'} src={picture} alt="Presentation Picture" />
      </div>
     <div style={{height:'50vh',marginTop:'10px',display:'flex',
     flexDirection:'column',justifyContent:'space-evenly'}}>
      <AboutMeText
        title={'About Me:'}
        text={
          'Software developer with professional experience as a front-end developer, having successfully completed different projects.'
        }
      />
      <AboutMeText
        title={'Skills:'}
        text={
          'Proficient in HTML5, CSS3, SCSS, JavaScript, jQuery, React, React Redux, JSON, RESTful APIs, Firebase. Advanced proficiency in English with certification and work experience.'
        }
      />
      </div>
    </aside>
  )
}
