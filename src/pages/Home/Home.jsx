import React from 'react';
import { AboutMeComponent } from '../../components/Molecules/AboutMeComponent/AboutMeComponent.jsx';
import { MainComponent } from '../../components/Molecules/MainComponent/MainComponent.jsx';
import '../pagesStyle.scss';

export const Home = () => {
  return (
    <div className='pageContainer'>
      <AboutMeComponent />
      <MainComponent />
    </div>
  )
}
