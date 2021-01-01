import styled from 'styled-components'

export const AppStyled = styled.section`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    font-family: 'Poppins', sans-serif;

    position: relative;
    overflow-x: hidden;

    background: #599df0;
`

export const Division = styled.div`
    padding: 0 16px;

    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;

    align-items: flex-start;

    @media (max-width: 1024px) {
        padding-bottom: 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`
export const OpenWorkout = styled.button`
    width: 60px;
    height: 60px;
    padding: 5px;

    border: none;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    font-size: 30px;
    color: #3268a8;

    position: fixed;
    bottom: 16px;
    right: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1025px) {
        display: none;
    }
`
