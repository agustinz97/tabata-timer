import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Title from '../Titles'

import './styles.css'

const Header = () => {
    return (
        <header className="Header">
            <Title className="FastWorkout__title" text="GYMTASTIC" />
            <FontAwesomeIcon icon={faBars} className="icon" />
        </header>
    )
}

export default Header
