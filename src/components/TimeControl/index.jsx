import React, { useState } from 'react'

import { Container, Button } from './styles'

export const TimeControls = ({
    handleResume,
    handleStop,
    paused,
    handlePause,
    handleRestart,
}) => {
    const [isPause, setIsPause] = useState(paused || false)

    const onStop = () => {
        if (handleStop) {
            handleStop()
        }
    }

    const onPause = () => {
        setIsPause(true)
        if (handlePause) {
            handlePause()
        }
    }

    const onResume = () => {
        setIsPause(false)
        if (handleResume) {
            handleResume()
        }
    }

    const onRestart = () => {
        if (handleRestart) {
            handleRestart()
        }
    }

    return (
        <Container>
            <Button onClick={onRestart} name="restart">
                <i className="fas fa-redo"></i>
            </Button>
            {isPause ? (
                <Button onClick={onResume} name="resume">
                    <i className="fas fa-play"></i>
                </Button>
            ) : (
                <Button onClick={onPause} name="pause">
                    <i className="fas fa-pause"></i>
                </Button>
            )}
            <Button onClick={onStop} name="stop">
                <i className="fas fa-stop"></i>
            </Button>
        </Container>
    )
}
