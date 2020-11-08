import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { useState } from 'react'

import './styles.css'

export const Input = ({ type, placeholder, value }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const inputRef = useRef()

    const handlePasswordVisibility = () => {
        if (inputRef.current.type === 'password') {
            inputRef.current.type = 'text'
            setIsPasswordShown(true)
        } else {
            inputRef.current.type = 'password'
            setIsPasswordShown(false)
        }
    }

    return (
        <div className="Input-container">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                ref={inputRef}
                autoComplete="off"
            />

            {type === 'password' &&
                (isPasswordShown ? (
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        onClick={handlePasswordVisibility}
                        className="icon"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faEye}
                        onClick={handlePasswordVisibility}
                        className="icon"
                    />
                ))}
        </div>
    )
}
