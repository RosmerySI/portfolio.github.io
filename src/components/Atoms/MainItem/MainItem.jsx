import React from 'react';
import './mainItem.scss';

export const MainItem = ({ title, list }) => {

  return (
    <section className='mainItemContainer'>
      <div className='titleContainer' >
        <h3>{title}</h3>
      </div>
      <ul id={title === 'Licenses and certifications' ? 'lastList' : 'listItem'}>
        {
          list.map((item, index) => {
            return <li
              className={item === 'Zapopan, Jalisco, México' ?'lastChild':undefined}
              key={index}>
              {item}
            </li>
          })
        }
      </ul>
    </section>
  )
}
