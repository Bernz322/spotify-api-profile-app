import React from 'react'
import styled from "styled-components/macro"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const StyledLoginButton = styled.a`
    background-color: var(--green);
    color: var(--white);
    padding: 10px 20px;
    margin: 20px auto;
    border-radius: 30px;
    display: inline-block;

    &:hover, &:focus{
        text-decoration: none;
        filter: brightness(1.1);
    }
`

/**
 * if not in the production environment, then redirect to the login page locally else redirect to the login page on the heroku web app
 */
const LOGIN_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/login' : 'https://spotify-api-profile-app.herokuapp.com/login'

export default function Login() {
    return (
        <StyledContainer>
            <StyledLoginButton href={LOGIN_URI}>
                Login to Spotify
            </StyledLoginButton>
        </StyledContainer>
    )
}
