import React from 'react'

import { StartButtonStyled } from './styles'

export const StartButton = ({ text, handleClick }) => {
    return (
        <StartButtonStyled onClick={handleClick} name="startButton">
            {text}
            <i className="fas fa-play"></i>
        </StartButtonStyled>
    )
}
