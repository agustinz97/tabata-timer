import React, { useEffect, useRef } from 'react'

import { COLOR_TYPE, TEXTS } from '../../utils/constants'
import { secondsToMinutes } from '../../utils/utils'
import {
    SequenceContainer,
    SequenceHeaderStyled,
    Sequence,
    SequenceItem,
} from './styles'

export const SequenceHeader = ({
    sets = 0,
    totalSets = 0,
    cycles = 0,
    totalCycles = 0,
    remaining = 0,
}) => {
    return (
        <SequenceHeaderStyled>
            <div className="header-item">
                <span>Serie</span>
                <p>
                    {sets}/{totalSets}
                </p>
            </div>
            <div className="header-item">
                <span>Ronda</span>
                <p>
                    {cycles}/{totalCycles}
                </p>
            </div>
            <div className="header-item">
                <span>Tiempo restante</span>
                <p>{secondsToMinutes(remaining)}</p>
            </div>
        </SequenceHeaderStyled>
    )
}

export const WorkoutSequence = ({
    workoutArray,
    currentIndex = 0,
    sets = 0,
    totalSets = 0,
    cycles = 0,
    totalCycles = 0,
    remaining = 0,
    active,
}) => {
    const list = useRef(null)

    const nextSequenceItem = () => {
        const seq = list.current
        const currentPosition = list.current.scrollTop
        const itemHeigth = list.current.children[0]?.clientHeight

        if (currentIndex > 0) {
            seq.scroll(0, currentPosition + itemHeigth)
        }
    }

    useEffect(nextSequenceItem, [currentIndex])

    return (
        <SequenceContainer active={active}>
            {active === false && (
                <SequenceHeader
                    sets={sets}
                    totalSets={totalSets}
                    cycles={cycles}
                    totalCycles={totalCycles}
                    remaining={remaining}
                />
            )}
            <Sequence ref={list}>
                {workoutArray.map((item, i) => {
                    return (
                        <SequenceItem
                            key={i}
                            bg={COLOR_TYPE[item.type]}
                            className={currentIndex === i && 'current'}
                        >
                            {TEXTS[item.type]}
                        </SequenceItem>
                    )
                })}
            </Sequence>
        </SequenceContainer>
    )
}
