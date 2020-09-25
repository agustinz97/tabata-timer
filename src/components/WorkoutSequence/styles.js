import styled from 'styled-components'

export const SequenceContainer = styled.div`
    height: 80vh;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;

    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    overflow: hidden;

    display: grid;
    grid-template-rows: 15% 1fr;

    @media (max-width: 768px) {
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;

        position: fixed;
        top: 0;
        left: 0;

        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 0;

        transition: all ease-in-out 0.3s;
        opacity: ${props => (props.active ? '1' : '0')};
        transform: ${props =>
            props.active ? 'translateX(0%) ' : 'translateX(-200%) '};
    }
`

export const SequenceHeaderStyled = styled.div`
    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: rgba(255, 255, 255, 0.9);

    @media (max-width: 768px) {
        padding: 0;
        background-color: transparent;
    }

    .header-item {
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        &:not(:last-child) {
            margin-right: 16px;
        }

        span {
            font-size: 20px;
            color: #000;
            text-transform: uppercase;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 14px;
                font-weight: bold;
                color: #fff;
            }
        }

        p {
            font-size: 36px;
            font-weight: bold;
            color: #000;

            @media (max-width: 768px) {
                font-size: 20px;
                color: #fff;
            }
        }
    }
`

export const Sequence = styled.ul`
    width: 100%;
    height: 100%;
    list-style: none;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    scroll-behavior: smooth;

    transition: all ease 2s;
`

export const SequenceItem = styled.li`
    width: 100%;
    min-height: 80px;
    padding: 8px 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 34px;
    color: #fff;
    text-align: center;

    transition: all ease 1s;

    background-color: rgba(255, 255, 255, 0.05);

    border-bottom: 1px solid #fff;

    @media (max-width: 767px) {
        color: #1c1c1c;
        font-size: 24px;
    }

    &.current {
        position: relative;

        &::before,
        &::after {
            content: '';
            width: 35px;
            height: 35px;
            background-color: #fff;

            position: absolute;
            top: 50%;

            transform: translateY(-50%);

            @media (max-width: 767px) {
                background-color: #1c1c1c;
            }
        }

        &::before {
            left: 0;

            clip-path: polygon(0 0, 0 100%, 100% 50%);
        }

        &::after {
            right: 0;

            clip-path: polygon(100% 0, 0 50%, 100% 100%);
        }
    }
`
