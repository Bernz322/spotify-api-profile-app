import React from 'react'

import { StyledNavbar } from '../styles'
import { logout } from '../spotify'
import logo from '../images/Spotify_App_Logo.svg'

/**
 * if not in the production environment, then redirect to the login page locally else redirect to the login page on the heroku web app
 */
const LOGIN_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/login' : 'https://spotify-api-profile-app.herokuapp.com/login'

export default function Navbar({ token }) {
  return (
    <StyledNavbar>
      <nav className="inner__nav">
        <div className="left">
          <a href="/"><img className='logo' src={logo} alt="logo" /></a>
        </div>
        {token &&
          <div className="center">
            <a className='nav__links' href="/top-artists"><h3>Top Artists</h3></a>
            <a className='nav__links' href="/top-tracks"><h3>Top Tracks</h3></a>
            <a className='nav__links' href="/playlists"><h3>Playlists</h3></a>
          </div>
        }
        {token ? <div className="right">
          <button className='logout' onClick={logout}>Logout</button>
        </div>
          :
          <div className="right">
            <a className='login' href={LOGIN_URI}>Login</a>
          </div>
        }

      </nav>

    </StyledNavbar >
  )
}
