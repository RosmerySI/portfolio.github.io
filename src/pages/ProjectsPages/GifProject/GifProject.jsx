import React from 'react'
import { PicturesGrid } from '../../../components/Molecules/PicturesGrid/PicturesGrid'
import gif from '../../../assets/images/gifs/1.png'
import '../../ProjectsPages/projectsPages.scss';

export const GifProject = () => {
  let images=[gif[0]]
  return (
    <main className='projectsMain'>
      <PicturesGrid images ={images}/>
    </main>
  )
}
