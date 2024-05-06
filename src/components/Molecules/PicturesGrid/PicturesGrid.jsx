import React from 'react'

export const PicturesGrid = ({picture}) => {
    console.log(picture.length)
    console.log(`../../../${picture[0].slice(5)}`)
    console.log(picture)
  return (
    <div 
    style={{
      // width:'95vw',
      // height:'83.99vh',
      // backgroundColor:'gray' 
      // display:'grid',
      // gridTemplateColumns: `repeat(${picture.length}, 1fr)`

    }}
    >
      {
      picture.map((item,index)=>{
        <img width='250px' height='250px' key={index} src={`../../../${item.slice(5)}`} alt='Project Image' />
      })
   
  }
        
    </div>
  )
}
