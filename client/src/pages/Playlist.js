import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { PlaylistHeader, PlaylistTracksCard, NothingHere, Loader } from '../components'
import { getPlaylistById } from '../spotify'
import { catchErrors } from '../utils';
import { StyledTopTracksSection } from '../styles'

export default function Playlist() {
    const { id } = useParams()
    const [playlistData, setPlaylistData] = useState(null)
    const tracks = playlistData?.tracks?.items

    useEffect(() => {
        const fetchPlaylistData = async () => {
            const { data } = await getPlaylistById(id)
            setPlaylistData(data)
        }
        catchErrors(fetchPlaylistData())
    }, [id])
    return (
        <>
            {playlistData && tracks ?
                <>
                    <PlaylistHeader playlistData={playlistData} />
                    <main>
                        <h1>Tracks</h1>
                        <StyledTopTracksSection>
                            <li className='track__header'>
                                <span className='track__item__num'>#</span>
                                <div className="track__title__head">
                                    Title
                                </div>
                                <p className="track__album">Album</p>
                                <p className="track__date__added">Date Added</p>
                                <p className="track__duration">Duration</p>
                            </li>
                            <hr />
                            {tracks ?
                                tracks.map((track, i) => {
                                    return <PlaylistTracksCard track={track} key={i} length={i + 1} />
                                })
                                :
                                <NothingHere />}
                            {playlistData?.tracks.total > 100 &&
                                <a href={playlistData?.external_urls.spotify} target='_blank' rel="noreferrer"><p className='see__more'>See the other {playlistData?.tracks.total - 100} songs on Spotify</p></a>
                            }
                        </StyledTopTracksSection>
                    </main>
                </>
                : <Loader />}
        </>
    )
}
