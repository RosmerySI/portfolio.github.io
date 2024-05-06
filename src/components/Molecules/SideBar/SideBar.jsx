import React from 'react'
import l from '../../../assets/images/l.png'
import mb from '../../../assets/images/mb.png'
import clock from '../../../assets/images/clock.png'
import weather from '../../../assets/images/weather.png'
import calc from '../../../assets/images/calc.png'
import gif from '../../../assets/images/gif.png'
import home from '../../../assets/images/home.png'
import './sideBar.scss'

export const SideBar = ({menu}) => {
  
  return (
    <>    
    <nav className={menu?'sideBarShow':'sideBarLess'}>
      <h2>{menu?'Menu':undefined}</h2>
      <ul className='projectList'>
        <li><a href="/lproject"><img src={l} alt="ícono del proyecto" />{menu?'L':undefined}</a></li>
        <li><a href="/mbproject"><img src={mb} alt="ícono del proyecto" />{menu? 'MB':undefined}</a></li>
        <li><a href="/clockproject"><img src={clock} alt="ícono del proyecto" /> {menu? 'Clock':undefined}</a></li>
        <li><a href="/weatherproject"><img src={weather} alt="ícono del proyecto" /> {menu? 'Weather':undefined}</a></li>
        <li><a href="/calcproject"><img src={calc} alt="ícono del proyecto" /> {menu? 'Calc':undefined}</a></li>
        <li><a href="/gifproject"><img src={gif} alt="ícono del proyecto" /> {menu? 'Gifs':undefined}</a></li>
        <li><a href="/home"><img src={home} alt="ícono de home" /> {menu? ' Home':undefined}</a></li>
      </ul>
    </nav>
    </>
  )
}
