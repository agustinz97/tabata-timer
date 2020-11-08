import React from 'react'

import './styles.css'

export const Button = ({ text, onClick, className }) => {
    const handleClick = e => {
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <button onClick={handleClick} className={className}>
            {text}
        </button>
    )
}
