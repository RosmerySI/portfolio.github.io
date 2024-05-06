import React from 'react'
import './aboutMeText.scss'

export const AboutMeText = ({title,text}) => {
    return (
        <section>
            <h3>{title}</h3>
            <p>{text}</p>            
        </section>
    )
}
