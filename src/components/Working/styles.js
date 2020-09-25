import styled, { keyframes } from 'styled-components'

import { SequenceHeaderStyled } from '../WorkoutSequence/styles'

const appear = keyframes`
    from{
        opacity: 0;
    }
    to{
        oapcity: 1;
    }
`

export const WorkingContainer = styled.section`
    width: 100%;
    height: 100vh;
    padding: 5vh 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;

    background-color: ${props => props.color};
    animation: ${appear} 0.5s;
    transition: all ease 0.5s;

    position: relative;

    @media (max-width: 767px) {
        padding: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        overflow: hidden;
    }

    > * {
        width: 100%;
        height: 100%;
        padding: 16px 1rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        z-index: 99;

        &:first-child {
            ${SequenceHeaderStyled} {
                @media (min-width: 1024px) {
                    display: none;
                }
            }
        }
    }
`
