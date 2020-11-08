import React from 'react'

import { WorkoutCreator } from '../components/WorkoutCreator'
import { TotalWorkout } from '../components/TotalWorkout'

import './styles/FastWorkout.css'

const FastWorkout = () => {
    return (
        <section className="FastWorkout">
            <WorkoutCreator />
            <TotalWorkout />
        </section>
    )
}

export default FastWorkout
