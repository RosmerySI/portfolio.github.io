import React from 'react'
import { PicturesGrid } from '../../../components/Molecules/PicturesGrid/PicturesGrid'
import gif from '../../../assets/images/gifs/1.png'
import '../../pagesStyle.scss';

export const GifProject = () => {
  let images=[gif[0]]
  return (
    <main className='pagesMain'>
      <PicturesGrid images ={images}/>
    </main>
  )
}
