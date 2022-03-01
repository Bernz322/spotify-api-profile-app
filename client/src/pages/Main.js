import React from 'react'

import { Navbar, TechStack } from '../components'
import { StyledMain } from '../styles'
import previewImg from '../images/spotify.png'

const LOGIN_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/login' : 'https://spotify-api-profile-app.herokuapp.com/login'

const year = new Date().getFullYear();

export default function Main() {
    return (
        <>
            <Navbar />
            <StyledMain>
                <div className="left">
                    <div className="head">
                        <h1 className='header'>Spotify Web App</h1>
                        <p>A web app created using the <a className='spotify__redirect' href="https://developer.spotify.com/" target="_blank" rel="noreferrer">Spotify API</a> and the following technologies:</p>
                        <TechStack />
                    </div>
                    <div className="features">
                        <h3>Features:</h3>
                        <p>View your Profile Data</p>
                        <ul>
                            <li>Top Artists</li>
                            <li>Top Tracks</li>
                            <li>Playlists</li>
                        </ul>
                        <p>View Artist's Singles and Albums</p>
                        <p>View Track Details</p>
                        <ul>
                            <li>The Track's Album Details</li>
                            <li>A 30-sec Preview of the Track</li>
                            <li>Track Analytics</li>
                        </ul>
                    </div>
                    <div className="note">
                        <div className="login__button">
                            <a className='login' href={LOGIN_URI}>Login</a>
                        </div>
                        <p className='note'>Note: On May 27th, 2021 Spotify for Developers announced that all new apps will be put under <a className='spotify__redirect' href="https://developer.spotify.com/community/news/2021/05/27/improving-the-developer-and-user-experience-for-third-party-apps/" target="_blank" rel="noreferrer">Development Mode</a>. This means that only a limited number (25) of people can access this Web App and has to be added first on my Developer Dashboard. You can still use this app without being added to my Dashboard but has several limited features. Your profile will not be visible (Error 403 - Forbidden) and each track details will not be available.</p>
                        <p className='note'>If you are interested on using this app with its full features, go to my <a className='github__redirect' href="https://github.com/Bernz322" target="_blank" rel="noreferrer">Github</a> and contact me on any of my listed socials and I'll add you on my dashboard.</p>
                        <footer>
                            <p>{`© ${year} Jeffrey Bernadas`}</p>
                        </footer>
                    </div>
                </div>
                <a className='floating-icons' aria-label="github" href="https://github.com/Bernz322/spotify-api-profile-app" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 30 30"
                        fill="currentColor"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                </a>
                <div className="right">
                    <img src={previewImg} alt="feature-img" />
                </div>
            </StyledMain>
        </>
    )
}
