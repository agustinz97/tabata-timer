import styled from 'styled-components'

export const TimeSelectorStyled = styled.div`
    width: 100%;
    padding: 1rem;

    display: grid;
    grid-template-columns: 85% 1fr;

    background-color: ${props => (props.color ? props.color : '')};
    border: 3px solid ${props => (props.color ? props.color : '')};
    border-radius: 6px;

    color: #fff;

    @media (max-width: 767px) {
        grid-template-columns: 2fr 1fr;
    }

    .selector-type {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 10% 1fr;
        grid-column-gap: 24px;
        align-items: center;

        span {
            font-size: 1.5rem;

            @media (max-width: 767px) {
                font-size: 18px;
            }
        }
    }

    .selector-time {
        height: 100%;

        display: flex;
        justify-content: flex-end;
    }
`

export const Icon = styled.i`
    font-size: 50px;
    color: #fff;

    @media (max-width: 767px) {
        font-size: 30px;
    }
`
