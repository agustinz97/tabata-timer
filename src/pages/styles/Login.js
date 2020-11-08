import styled from 'styled-components'

export const LoginContainer = styled.section`
    width: 100%;
    height: 100vh;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        height: 40vh;
        display: grid;
        place-items: center;

        font-size: 35px;
        letter-spacing: 4px;
        font-weight: 700;
        color: var(--color-violet);
    }

    form {
        width: 100%;

        > *:not(:last-child) {
            margin-bottom: 30px;
        }
    }
`
