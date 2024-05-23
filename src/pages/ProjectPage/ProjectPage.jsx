import React, { useEffect, useRef } from 'react';
import { GettingImages } from './GettingImages';


export const ProjectPage = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');


  const { images, gettingImages } = GettingImages(id)

  useEffect(() => {
    gettingImages()
  }, []);
  const projectPageMainRef = useRef(null);
  
  useEffect(() => {
    const projectPageMain = projectPageMainRef.current;
    if (images.length >= 1 && images.length <= 4) {
      projectPageMain.classList.add('fewItems');
      projectPageMain.classList.remove('multiItems');
    } else if (images.length > 4) {
      projectPageMain.classList.add('multiItems');
      projectPageMain.classList.remove('fewItems');
    }
  }, [images]);

  return (
    <main className='pagesMain'>
       <h2>{id==='mb'|| id==='l'?'Professional Projects':'Personal Project'}</h2>    
      <section ref={projectPageMainRef} className='projectPageMain'>    
        {
          images?.length !== 0 &&
          images?.map((item, index) => {
            return <figure key={index} className='gridItem' >              
              <img src={item.src} alt="imagen del proyecto" width='100%' height='100%' />             
            </figure>

          })
        }
      </section>
    </main>
  )
}
