import React, { useEffect, useState } from 'react'
import gif from '../../assets/images/gifs/gifs.png'
import calc1 from '../../assets/images/calc/calc1.png'
import calc2 from '../../assets/images/calc/calc1.png'
import clock1 from '../../assets/images/clock/clock1.png'
import clock2 from '../../assets/images/clock/clock2.png'

export const ProjectPage = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const [images, setImages] = useState([]);

  const gettingImages = () => {
    switch (id ) {
      case 'gif':
      setImages([
        { src: gif }
      ]);
      break;
      case 'calc':
      setImages([
        { src: calc1 },
        { src: calc2 }
      ]);
      break;
      case 'clock':
      setImages([
        { src: clock1 },
        { src: clock2 }
      ]);
      break;
      // case 'l':
      // setImages([
      //   { src: l }
      // ]);
      // break;
      // case 'weather':
      // setImages([
      //   { src: clock }
      // ]);
      // break;
      // case 'mb':
      // setImages([
      //   { src: mb }
      // ]);
      // break;
      // default:
      //   alert('Ha ocurrido un error');
    }
  }
  useEffect(() => {
    gettingImages()
  }, []);


  return (
    <main className='pagesMain'>
      <h2 style={{margin:'0'}}>Projects</h2>
      <ul style={{display:'flex', flexDirectio:'row',margin:'0'}} >
        {
          images.length !== 0 &&
          images.map((item, index) => {
            return <li key={index} style={{margin:'0'}}>
              <figure style={{margin:'0'}}>
                <img src={item.src} alt="imagen del proyecto"  width='60%' height='80%'/>
                <figcaption></figcaption>
              </figure>
            </li>
          })
        }
      </ul>
    </main>
  )
}
