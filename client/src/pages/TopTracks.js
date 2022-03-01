import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { StyledTopTracksSection } from '../styles'
import { catchErrors, formatDuration } from "../utils"
import { getUserTopTracks } from "../spotify"
import { NothingHere, TimeRangeButtons, Loader } from "../components/"

export default function TopTracks() {
    const [topTracks, setTopTracks] = useState(null);
    const [timeRange, setTimeRange] = useState('short_term');
    const tracks = topTracks?.items

    useEffect(() => {
        const fetchTracks = async () => {
            const userTopTracks = await getUserTopTracks(timeRange)
            setTopTracks(userTopTracks.data)
        }
        catchErrors(fetchTracks())
    }, [timeRange])

    return (
        <>
            {topTracks && timeRange && tracks ?
                <main>
                    <StyledTopTracksSection>
                        <div className="section__top">
                            <h2><a href="/">Profile</a> / Top Tracks</h2>
                            <TimeRangeButtons setTimeRange={setTimeRange} timeRange={timeRange} />
                        </div>
                        {tracks ?
                            <ul className="top__tracks__container">
                                {tracks.map((track, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <li className='top__track' >
                                                <Link className='top__track' style={{ textDecoration: 'none' }} to={`/tracks/${track.id}`}>
                                                    <span className='track__item__num'>{i + 1}</span>
                                                    <div className="top__track__details">
                                                        <img className='top__track__img' src={track.album.images[0]?.url} alt="album-avatar" />
                                                        <div className="track__details__info">
                                                            <p className="track__title">{track.name}</p>
                                                            <span className="top__track__artists">
                                                                {track.artists.map((artist, i) => {
                                                                    return (
                                                                        <p key={i} className='track__artist'>
                                                                            {artist.name}{i !== track.artists.length - 1 && ', '}
                                                                        </p>
                                                                    )
                                                                })}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p className="track__album">{track.album.name}</p>
                                                    <p className="track__duration">{formatDuration(track.duration_ms)}</p>
                                                </Link >
                                            </li>
                                        </React.Fragment>
                                    )
                                })}
                            </ul> : <NothingHere />}
                    </StyledTopTracksSection>
                </main>
                : <Loader />}
        </>
    )
}
