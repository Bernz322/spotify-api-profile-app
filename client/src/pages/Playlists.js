import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { StyledPlaylistsSection } from '../styles'
import { catchErrors } from "../utils"
import { getCurrentUserPlaylists } from "../spotify"
import { NothingHere, PlaylistsCard, Loader } from '../components'


export default function Playlists() {
    const [playlistsData, setPlaylistsData] = useState(null);
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const userPlaylist = await getCurrentUserPlaylists();
            setPlaylistsData(userPlaylist.data)
        }
        catchErrors(fetchPlaylists())
    }, [])

    useEffect(() => {
        if (!playlistsData) {
            return;
        }
        const fetchMoreData = async () => {
            /**
             * If there is more playlists of the user, we will have to hit again the "next" key item in the first playlist call
             * which returns a new api endpoint that contains the next set of playlists. Remember that we have limited our call to 20
             * playlists only.
             */
            if (playlistsData.next) {
                /**
                 * This .next object contains the api endpoint of the next set of playlist. In order to acquire the additional playlists,
                 * we again call another api call using that endpoint, hence the axios.get again
                */
                const { data } = await axios.get(playlistsData.next)
                setPlaylistsData(data)
            }
        }
        /**
         * Join the previous and the next set of playlists using spread operator
         */
        setPlaylists(playlist => ([
            ...playlists ? playlists : [],
            ...playlistsData.items
        ]))
        catchErrors(fetchMoreData())
    }, [playlistsData, playlists])

    return (
        <>
            {playlists && playlists.length > 0 ?
                <main>
                    <StyledPlaylistsSection>
                        <div className="section__top">
                            <h2><a href="/">Profile</a>/ Your Playlists</h2>
                        </div>
                        {playlists ?
                            <div className="container">
                                {playlists.map((playlist, i) => {
                                    return (
                                        <PlaylistsCard key={i} playlist={playlist} />
                                    )
                                })}
                            </div> : <NothingHere />}
                    </StyledPlaylistsSection>
                </main>
                : <Loader />}
        </>
    )
}