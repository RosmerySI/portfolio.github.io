import React from 'react'
import l from '../../../assets/images/l.png'
import mb from '../../../assets/images/mb.png'
import clock from '../../../assets/images/clock.png'
import weather from '../../../assets/images/weather.png'
import calc from '../../../assets/images/calc.png'
import gif from '../../../assets/images/gif.png'
import home from '../../../assets/images/home.png'
import './sideBar.scss'

export const SideBar = ({ menu }) => {

  const projects = [
    { text: 'Home', href: '/home',src:home },
    { text: 'L', href: '/projectpage/?id=l',src:l },
    { text: 'MB', href: '/projectpage/?id=mb',src:mb },
    { text: 'Clock', href: '/projectpage/?id=clock',src:clock },
    { text: 'Weather', href: '/projectpage/?id=weather',src:weather },
    { text: 'Calc', href: '/projectpage/?id=calc',src:calc},
    { text: 'Gifs', href: '/projectpage/?id=gif',src:gif },

  ]

  return (
    <>
      <nav className={menu ? 'sideBarShow' : 'sideBarLess'}>
        <h2>{menu ? 'Menu' : undefined}</h2>
        <ul className='projectList'>
          {
            projects.map((item, index) => {
              return <li key={index}>
                <a href={item.href}><img src={item.src} alt="ícono del proyecto" />{menu ? item.text : undefined}</a>
              </li>
            })
          }          
        </ul>
      </nav>
    </>
  )
}
