import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDumbbell, faPlus } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Header = () => {
    return (
        <footer className="Footer">
            <ul className="Footer__actions">
                <li className="Footer__actions--element">
                    <NavLink to="/favorites">
                        <FontAwesomeIcon icon={faHeart} className="icon" />
                        Favoritos
                    </NavLink>
                </li>
                <li className="Footer__actions--element">
                    <NavLink exact to="/">
                        <FontAwesomeIcon icon={faDumbbell} className="icon" />
                        Entrenar
                    </NavLink>
                </li>
                <li className="Footer__actions--element">
                    <NavLink to="/workouts/new">
                        <FontAwesomeIcon icon={faPlus} className="icon" />
                        Nuevo
                    </NavLink>
                </li>
            </ul>
        </footer>
    )
}

export default Header
