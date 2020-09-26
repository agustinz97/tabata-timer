import React, { useEffect, useState } from 'react'

import { Title } from './components/Titles'
import { WorkoutCreator } from './components/WorkoutCreator'
import { TotalWorkout } from './components/TotalWorkout'
import { Working } from './components/Working'

import { AppStyled, Division, OpenWorkout } from './styles'
import { createWorkoutArray } from './utils/utils'

export const AppContext = React.createContext({})

function App() {
    const [running, setRunning] = useState(false)
    const [workout, setWorkout] = useState({
        preparation: 3,
        work: 5,
        rest: 1,
        cycles: 3,
        sets: 5,
        longRest: 2,
    })
    const [workoutArray, setWorkoutArray] = useState([])
    const [workoutPreviewActive, setWorkoutPreviewActive] = useState(false)

    const startWorkout = () => {
        setWorkoutPreviewActive(false)
        setRunning(true)
    }

    useEffect(() => {
        setWorkoutArray(createWorkoutArray(workout))
    }, [workout])

    useEffect(() => {
        console.log(workoutPreviewActive)
    }, [workoutPreviewActive])

    return (
        <AppContext.Provider value={{ setRunning, workout, setWorkout }}>
            <AppStyled>
                {running ? (
                    <>
                        <Working workout={workoutArray} />
                    </>
                ) : (
                    <>
                        <Title text={'Tabata Timer'} />
                        <Division>
                            <WorkoutCreator />
                            <TotalWorkout
                                workout={workoutArray}
                                handleStart={startWorkout}
                                active={workoutPreviewActive}
                            />
                            <OpenWorkout
                                name="open-workout"
                                onClick={() =>
                                    setWorkoutPreviewActive(
                                        prevState => !prevState
                                    )
                                }
                            >
                                {workoutPreviewActive === true ? (
                                    <i className="fas fa-times"></i>
                                ) : (
                                    <i className="fas fa-dumbbell"></i>
                                )}
                            </OpenWorkout>
                        </Division>
                    </>
                )}
            </AppStyled>
        </AppContext.Provider>
    )
}

export default App
