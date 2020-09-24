import styled from 'styled-components'

export const TotalWorkoutStyled = styled.div`
    width: 100%;
    max-height: 70vh;
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #ffff;
    border-radius: 8px;

    @media (max-width: 1024px) {
        width: 100%;
        height: 100vh;
        max-height: 100vh;

        position: fixed;
        top: 0;
        left: 0;

        /* opacity: ${props => (props.active ? '1' : '0')};
        pointer-events: ${props => (props.active ? 'all' : 'none')};
        transition: opacity ease-in-out 0.3s; */

        transform: ${props =>
            props.active ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform ease-in 0.2s;
    }
`

export const Workout = styled.div`
    width: 100%;
    height: 100%;
    /* max-height: 50vh; */
    padding: 0 10px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 1.5rem 0;

    display: flex;
    flex-direction: column;

    background-color: #fff;

    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #ccc;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #3268a8;
        border-radius: 6px;
    }

    :after {
        content: '';
        display: block;
        height: 2rem;
        width: 100%;
    }
`

export const TotalTime = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 24px;
        line-height: 24px;
        font-weight: bold;
    }
`
