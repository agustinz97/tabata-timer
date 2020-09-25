import styled, { keyframes } from 'styled-components'
import { darken } from 'polished'

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

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;

    background-color: ${props => props.color};
    animation: ${appear} 0.5s;
    transition: all ease 0.5s;

    position: relative;

    > * {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
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

    &:after {
        content: '';
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;

        background: linear-gradient(
            transparent,
            ${props => darken(0.3, props.color)}
        );

        z-index: 9;
    }

    @media (max-width: 767px) {
        height: 100vh;
        padding: 16px 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
