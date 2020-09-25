import styled from 'styled-components'
import { darken } from 'polished'

export const TitleStyled = styled.h1`
    font-size: 3rem;
    line-height: 3rem;
    color: ${props => props.color};
    text-align: center;

    padding: 0.5em 1em;
    margin-bottom: 2rem;

    background: ${props => props.bg};
    border: 10px solid ${props => darken('-0.1', props.border)};
    border-radius: 1em;

    @media (max-width: 767px) {
        font-size: 2rem;
        line-height: 2rem;
        margin-bottom: 0;

        padding: 10px 20px;

        border-width: 5px;
    }
`

export const SubtitleStyled = styled.h3`
    font-size: 2rem;
    line-height: 2rem;
    color: ${({ color }) => (color ? color : 'black')};

    @media (max-width: 767px) {
        font-size: 1.5rem;
        line-height: 1.5rem;
        margin-bottom: 0;
    }
`

export const WorkoutTitleStyled = styled.div`
    height: 40px;
    background-color: ${props => props.color && props.color};
    margin-bottom: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
        font-size: 1.2rem;
        line-height: 1.2rem;
        text-align: center;

        color: #fff;
    }

    i {
        color: #fff;
        font-size: 20px;
        margin: 0 8px;
    }
`
