import React from 'react'
import './socialMedia.scss'

export const SocialMedia = ({ url, icon, contact }) => {
    return (
        <>
            <a href={url} target='_blank' >
                <img src={icon} alt='ícono' />
            </a>
            <a className='socialMediaText' href={url}  target='_blank' >
                {contact ? contact : url}
            </a>
        </>
    )
}
