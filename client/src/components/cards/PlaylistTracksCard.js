import React from 'react'
import { Link } from "react-router-dom";

import { StyledTracksCard } from '../../styles'
import { formatDuration } from '../../utils'

export default function PlaylistTracksCard({ track, length }) {
    const trackInfo = track.track;
    return (
        <Link style={{ textDecoration: 'none' }} to={`/tracks/${trackInfo.id}`}>
            <StyledTracksCard>
                <li className='track container'>
                    <span className='track__item__num'>{length}</span>
                    <div className="track__details">
                        <img className='track__img' src={trackInfo.album.images[0]?.url} alt="album-avatar" />
                        <div className="track__details__info">
                            <p className="track__title">{trackInfo.name}</p>
                            <div style={{ display: "flex" }}>
                                {trackInfo.artists.map((artist, i) => {
                                    return (
                                        <p key={i} className='track__artist'>
                                            {artist.name}{i !== trackInfo.artists.length - 1 && ', '}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <p className="track__album">{trackInfo.album.name}</p>
                    <p className="track__duration">{track.added_at.slice(0, 10)}</p>
                    <p className="track__duration">{formatDuration(trackInfo.duration_ms)}</p>
                </li>
            </StyledTracksCard>
        </Link >
    )
}
