require('dotenv').config()
const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
const app = express()
const path = require('path')

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const FRONTEND_URI = process.env.FRONTEND_URI
const PORT = process.env.PORT || 8888

// Serve all static files first
app.use(express.static(path.resolve('client/build')))

app.get("/", (req, res, next) => {
    res.send("Server")
})

const getRandomString = length => {
    // Generate Random String for state params
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

const stateKey = 'spotify_auth_state'

app.get("/login", (req, res, next) => {
    // This will request an authorization code if the user accepted this. The code will be in the url where "code" is the key and the succeeding value is the "code"
    // This code will be used to get an access token.

    const state = getRandomString(16);
    res.cookie(stateKey, state)

    const scope = [
        'user-read-private', 'user-read-email', 'user-follow-modify', 'user-follow-read', 'user-library-modify', 'user-library-read', 'playlist-modify-private', 'playlist-read-private', 'playlist-read-collaborative', 'user-top-read', 'playlist-modify-public',
        'user-read-currently-playing', 'user-read-recently-played'
    ].join(" ")

    const queryParams = querystring.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        scope: scope,
        /**
         * https://developer.spotify.com/documentation/general/guides/authorization/scopes/
         */
        state: state
    })
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`)
    // If the user accepted this req/ login, then it will automatically redirect to the callback route due to the REDIRECT_URI route value
})

app.get("/callback", (req, res, next) => {
    // This happens after the login route is successful, we get the authorization code first using the req.query.code and exchange it for an access token.
    const code = req.query.code || null;

    // Next is to setup a post req to the url endpoint for converting the code to an access token
    // where we pass in the following params (querystring)
    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
            code: code,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code'
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
        },
    })
        .then(response => {
            if (response.status === 200) {
                // If successful, then data will be returned which includes, access and refresh token, token type, token expiry in 3600 seconds, and the scope
                const { access_token, refresh_token, expires_in } = response.data;

                // pass along the tokens as params
                const queryParams = querystring.stringify({
                    access_token,
                    refresh_token,
                    expires_in
                })

                // redirect to react app
                res.redirect(`${FRONTEND_URI}?${queryParams}`)
            } else {
                res.redirect(`/?${querystring.stringify({ error: 'invalid token' })}`);
            }
        })
        .catch(err => {
            res.send(err)
            console.log(err)
        })
})

app.get("/refresh_token", (req, res, next) => {
    // This is to refresh the access token as it expires every 3600 seconds

    const { refresh_token } = req.query;

    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
        },
    })
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            res.send(err)
        })
})

// Catch all remaining req that are not recognized and returns it to the React App, so it can handle routing
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})