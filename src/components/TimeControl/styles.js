import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
    margin-top: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        max-width: 200px;
    }
`

export const Button = styled.button`
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.8);

    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
        color: rgba(255, 255, 255, 0.9);
    }

    &:active {
        color: rgba(255, 255, 255, 1);
    }

    i {
        font-size: 60px;

        @media (max-width: 768px) {
            font-size: 40px;
        }

        &.fa-redo {
            font-size: 50px;

            transform: rotateY(180deg);

            @media (max-width: 768px) {
                font-size: 36px;
            }
        }
    }
`
