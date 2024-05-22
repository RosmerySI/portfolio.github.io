import React from 'react'
import { MainItem } from '../../Atoms/MainItem/MainItem'


export const MainComponent = () => {
  return (
    <main className='main'>
    <MainItem 
      title={'Professional Experience'}
      list={[
        'Frontend Developer', 'Market & Business Co.' ,
        'Octubre de 2022 - Present (1 año 8 meses)',
        'Zapopan, Jalisco, México'
      ]}
    />
    <MainItem 
      title={'Education'}
      list={[
        ' University of Las Tunas, Cuba', 
        ' Engineering, Industrial Engineering · (2013 - 2018)',
        ' Jorge Ricardo Masetti School of Languages ',
        ' Graduated in English Language · (2015 - 2017)',

      ]}          

    />
    <MainItem 
      title={'Licenses and certifications'}
      list={[
        {text:'The Complete 2024 Web Development Bootcamp',href:'https://firebasestorage.googleapis.com/v0/b/portfolio-14ac2.appspot.com/o/bootcamp.jpg?alt=media&token=a13f9e6a-5b3d-44bf-b6ea-7ee003495ac6'},
        {text:'React: De cero a experto (Hooks y MERN)',href:'https://firebasestorage.googleapis.com/v0/b/portfolio-14ac2.appspot.com/o/react.jpg?alt=media&token=c6b87fb1-4d42-4d13-b488-2541b0e2f5ca'},
        {text:'Scrum Fundamentals Certified (SFC)',href:'https://www.scrumstudy.com/certification/verify?type=SFC&number=892614'},
        {text:'EF SET English Certificate 77/100(C2 Proficient)',href:'https://cert.efset.org/F2xTub'}      
      ]
      }    

    />
    </main>
  )
}
