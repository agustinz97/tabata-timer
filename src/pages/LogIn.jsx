import React from 'react'

import { LoginContainer } from './styles/Login'
import { Input } from '../components/Forms/Inputs'
import { Button } from '../components/Forms/Buttons'

export const LogInPage = () => {
    const handleLogin = () => {
        alert('Log in!')
    }

    const handleSignUp = () => {
        alert('Sign up!')
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <LoginContainer>
            <h1>GYMTASTIC</h1>

            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Your username"
                    labelText="Username"
                    type="text"
                />
                <Input
                    placeholder="Your password"
                    labelText="Password"
                    type="password"
                    className="Form-btn violet"
                />
                <Button
                    text="Log in"
                    onClick={handleLogin}
                    className="Form-btn violet"
                />
                <Button
                    text="Sign up"
                    onClick={handleSignUp}
                    className="Form-btn violet-outline"
                />
            </form>
        </LoginContainer>
    )
}
