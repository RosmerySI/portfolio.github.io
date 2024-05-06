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
        'Universidad de Las Tunas', 
        'Ingeniería, Ingeniería Industrial · (2013 - 2018)'
      ]}          

    />
    <MainItem 
      title={'Licenses and certifications'}
      list={[
        'Scrum Fundamentals Certified (SFC)',
        'EF SET English Certificate 77/100(C2 Proficient)'
      ]}

    />
    </main>
  )
}
