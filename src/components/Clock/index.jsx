import React from 'react'

import { ClockStyled } from './styles'

import { COLOR_TYPE } from '../../utils/constants'
import { secondsToMinutes } from '../../utils/utils'

export const Clock = ({ time, type }) => {
    return (
        <ClockStyled color={COLOR_TYPE[type]} minutes={time > 60}>
            <h1>{time > 60 ? secondsToMinutes(time) : time}</h1>
        </ClockStyled>
    )
}
