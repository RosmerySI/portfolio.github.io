import React, { useState } from 'react'
import { SideBar } from '../SideBar/SideBar'
import menuIncon from '../../../assets/images/menu.png'
import './headerComponent.scss'

export const HeaderComponent = () => {

    const [menu, setMenu] = useState(false)

    return (
        <header>
            <h1>Rosmery Salazar Irarragorri</h1>
            <img
                id='menuIcon'
                src={menuIncon}
                alt='Menú'
                onClick={() => setMenu(!menu)}
            />
            <SideBar menu={menu} />
        </header>
    )
}
