import React, { useEffect, useState, useContext } from 'react'

import Swal from 'sweetalert2'

import { Clock } from '../Clock'
import { TimeControls } from '../TimeControl'
import { Title } from '../Titles'
import { WorkoutSequence, SequenceHeader } from '../WorkoutSequence'
import { WorkingContainer } from './styles'

import { AppContext } from '../../App'

import tick from '../../assets/sounds/tick.mp3'
import ding from '../../assets/sounds/ding.mp3'

import { Timer } from '../../utils/timer'
import { COLOR_TYPE, TEXTS } from '../../utils/constants'
import { getTotalTimeFromWorkoutArray } from '../../utils/utils'

export const Working = ({ workout }) => {
    const [time, setTime] = useState(workout.preparation)
    const [type, setType] = useState('preparation')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [timerState, setTimerState] = useState(new Timer())
    const [currentSet, setCurrentSet] = useState(0)
    const [currentCycle, setCurrentCycle] = useState(0)
    const [timeRemaining, setTimeRemainig] = useState()

    const { setRunning, workout: workoutObject, screenKeeper } = useContext(
        AppContext
    )

    //timer
    useEffect(() => {
        const t = new Timer(() => {
            if (time > 1) {
                setTime(time - 1)
            }

            if (time === 1) {
                setCurrentIndex(prevIndex => prevIndex + 1)
            }

            if (timeRemaining > 0) {
                setTimeRemainig(prev => prev - 1)
            }
        }, 1000)

        setTimerState(t)

        return () => t.stop()
    }, [time, workout, currentIndex, timeRemaining])

    //audios
    useEffect(() => {
        if (time > 1 && time <= 5) {
            const audio = new Audio(tick)
            audio.play()
        } else if (time === 1) {
            const audio = new Audio(ding)
            audio.play()
        }
    }, [time, type])

    //pasar al siguiente elemento del workout
    useEffect(() => {
        setTime(workout[currentIndex]?.time)
        setType(workout[currentIndex]?.type)
    }, [currentIndex, workout])

    /*funciones para los controlers de tiempo*/
    const restartWorkout = () => {
        timerState.pause()

        Swal.fire({
            title: '¿Quieres reiniciar el entrenamiento?',
            confirmButtonText: 'Si',
            showCancelButton: true,
            cancelButtonText: 'No',
            icon: 'question',
        }).then(result => {
            if (result.isConfirmed) {
                setTime(workout[0].time)
                setCurrentIndex(0)
                setType('preparation')
                setCurrentSet(0)
                setCurrentCycle(0)
                setTimeRemainig(getTotalTimeFromWorkoutArray(workout || []))
            } else {
                timerState.resume()
            }
        })
    }

    const stopWorkout = () => {
        timerState.pause()

        Swal.fire({
            title: '¿Quieres finalizar el entrenamiento?',
            confirmButtonText: 'Si',
            showCancelButton: true,
            cancelButtonText: 'No',
            icon: 'question',
        }).then(result => {
            if (result.isConfirmed) {
                setRunning(false)
            } else {
                timerState.resume()
            }
        })
    }

    const resumeWorkout = () => {
        timerState.resume()
    }

    const pauseWorkout = () => {
        timerState.pause()
    }

    /* control de la aecuencia */
    const updateSetsAndCycles = () => {
        const workoutItem = workout[currentIndex]

        if (workoutItem?.type === 'work') {
            if (currentSet < workoutObject.sets) {
                setCurrentSet(prevSet => prevSet + 1)
                setCurrentCycle(prevCycle => (prevCycle === 0 ? 1 : prevCycle))
            } else if (currentCycle < workoutObject.cycles) {
                setCurrentCycle(prevCycle => prevCycle + 1)
                setCurrentSet(1)
            }
        } else if (workoutItem?.type === 'finish') {
            screenKeeper.release()
        }
    }

    useEffect(updateSetsAndCycles, [currentIndex])

    useEffect(() => {
        setTimeRemainig(getTotalTimeFromWorkoutArray(workout))
    }, [workout])

    return (
        <WorkingContainer color={COLOR_TYPE[type]}>
            <div>
                <SequenceHeader
                    sets={currentSet}
                    totalSets={workoutObject.sets}
                    cycles={currentCycle}
                    totalCycles={workoutObject.cycles}
                    remaining={timeRemaining}
                />

                <Title text={String(TEXTS[type]).toUpperCase()} type={type} />

                <Clock time={time} type={type} />
                <TimeControls
                    handlePause={pauseWorkout}
                    handleResume={resumeWorkout}
                    handleStop={stopWorkout}
                    handleRestart={restartWorkout}
                />
            </div>

            <WorkoutSequence
                workoutArray={workout}
                currentIndex={currentIndex}
                sets={currentSet}
                totalSets={workoutObject.sets}
                cycles={currentCycle}
                totalCycles={workoutObject.cycles}
                remaining={timeRemaining}
            />
        </WorkingContainer>
    )
}
