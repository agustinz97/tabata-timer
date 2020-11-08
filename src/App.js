import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import FastWorkout from './pages/FastWorkout'

import { Working } from './components/Working'

import { createWorkoutArray } from './utils/utils'
import { ScreenAlive } from './utils/keepScreenAlive'

import './styles.css'

export const AppContext = React.createContext({})

function App() {
    const lastWorkout = localStorage.getItem('last-workout')
    const defaultWorkout = lastWorkout || {
        preparation: 0,
        work: 0,
        rest: 0,
        cycles: 1,
        sets: 1,
        longRest: 0,
    }

    const [running, setRunning] = useState(false)
    const [workout, setWorkout] = useState(defaultWorkout)
    const [workoutArray, setWorkoutArray] = useState([])
    const [workoutPreviewActive, setWorkoutPreviewActive] = useState(false)
    const [screenKeeper] = useState(new ScreenAlive())

    const startWorkout = () => {
        setWorkoutPreviewActive(false)
        setRunning(true)

        screenKeeper.keepAlive()

        localStorage.setItem('last-workout', workout)
    }

    useEffect(() => {
        setWorkoutArray(createWorkoutArray(workout))
    }, [workout])

    return (
        <Router>
            <AppContext.Provider
                value={{ setRunning, workout, setWorkout, screenKeeper }}
            >
                <Header />
                <div className="Content">
                    <Switch>
                        <Route exact path="/" component={FastWorkout} />
                    </Switch>
                </div>
                <Footer />

                {/*  <AppStyled>
                {running ? (
                    <>
                        <Working workout={workoutArray} />
                    </>
                ) : (
                    <>
                        <Division>
                            <WorkoutCreator />
                            <TotalWorkout
                                workout={workoutArray}
                                handleStart={startWorkout}
                                active={workoutPreviewActive}
                            />
                            <OpenWorkout
                                onClick={() =>
                                    setWorkoutPreviewActive(
                                        prevState => !prevState
                                    )
                                }
                                aria-label="empezar entrenamiento"
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
            </AppStyled> */}
            </AppContext.Provider>
        </Router>
    )
}

export default App
