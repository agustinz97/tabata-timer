import React, { useEffect, useState, useRef } from 'react'
import {
    formatedToSeconds,
    secondsToMinutes,
    setInputFilter,
} from '../../utils/utils'

import { InputContainer } from './styles'

export const InputInteger = ({
    initialValue,
    minValue,
    maxValue,
    placeholder,
    name,
    handleChange,
}) => {
    const INITIAL_VALUE = initialValue || 1
    const [value, setValue] = useState(INITIAL_VALUE)
    const [intervalState, setIntervalState] = useState(null)

    const minus = () => {
        if (value > minValue) {
            setValue(prevValue => prevValue - 1)
        }
    }

    const plus = () => {
        if (value < maxValue) {
            setValue(prevValue => prevValue + 1)
        }
    }

    const onDownMinus = () => {
        let currentValue = value

        const t = setInterval(() => {
            if (currentValue > minValue) {
                minus()
                currentValue--
            } else {
                clearInterval(t)
            }
        }, 500)

        setIntervalState(t)
    }

    const onDownPlus = () => {
        let currentValue = value

        const t = setInterval(() => {
            if (currentValue < maxValue) {
                plus()
                currentValue++
            } else {
                clearInterval(t)
            }
        }, 400)

        setIntervalState(t)
    }

    const handleMouseUp = () => {
        clearInterval(intervalState)
    }

    const onChange = () => {
        if (handleChange) {
            handleChange(name, value)
        }
    }

    useEffect(onChange, [value])

    return (
        <InputContainer>
            <span
                className="control left"
                onClick={minus}
                onMouseDown={onDownMinus}
                onMouseUp={handleMouseUp}
            >
                <i className="fas fa-minus"></i>
            </span>
            <label>
                <input
                    type="number"
                    value={value || ''}
                    placeholder={placeholder}
                    name={name}
                    id={name}
                    readOnly
                    disabled={true}
                    className="integer"
                />
            </label>
            <span
                className="control right"
                onClick={plus}
                onMouseDown={onDownPlus}
                onMouseUp={handleMouseUp}
            >
                <i className="fas fa-plus"></i>
            </span>
        </InputContainer>
    )
}

export const InputTime = ({
    initialValue,
    placeholder,
    name,
    handleChange,
}) => {
    const INITIAL_TIME_VALUE = secondsToMinutes(initialValue) || '00:00'

    const [value, setValue] = useState(INITIAL_TIME_VALUE)
    const input = useRef(null)

    const onChange = e => {
        let elValue = e.target.value

        if (handleChange) {
            const secs = formatedToSeconds(e.target.value)
            handleChange(e.target.name, secs)
        }

        elValue = elValue.replace(':', '')
        if (elValue.length === 3) {
            const a = String(elValue).substr(0, 1)
            const b = String(elValue).substr(1, 2)

            elValue = `${a}:${b}`
        } else if (elValue.length === 4) {
            const a = String(elValue).substr(0, 2)
            const b = String(elValue).substr(2, 2)

            elValue = `${a}:${b}`
        }

        setValue(elValue)
    }

    const onBlur = e => {
        if (value.length === 0) {
            setValue(INITIAL_TIME_VALUE)
        } else if (value.length <= 5) {
            let newValue = value.padStart('5', '00:')

            //correccion de segundos > 60
            const mins = newValue[0] + newValue[1]
            const secs =
                newValue[newValue.length - 2] + newValue[newValue.length - 1]

            if (secs >= 60) {
                const minsInSecs = mins * 60
                const newSecs = Number(secs) + Number(minsInSecs)

                newValue = secondsToMinutes(newSecs)
            }
            setValue(newValue)
        }
    }

    useEffect(() => {
        setInputFilter(input.current, function (value) {
            return /^\d*:?\d*$/.test(value) // Allow digits and ':' only, using a RegExp
        })
    }, [])

    return (
        <InputContainer>
            <label>
                <input
                    ref={input}
                    type="text"
                    maxLength="5"
                    className="time"
                    name={name}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </label>
        </InputContainer>
    )
}
