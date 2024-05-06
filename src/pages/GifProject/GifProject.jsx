import React from 'react'
import { PicturesGrid } from '../../components/Molecules/PicturesGrid/PicturesGrid'
import gif1 from '../../assets/images/gifs/1.png'


export const GifProject = () => {
  const picture = [gif1]
  return (
    <main className='main'>
      <PicturesGrid picture={picture} />
    </main>
  )
}
