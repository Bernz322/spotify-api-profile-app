import React from 'react'
import { Link } from "react-router-dom";

import { StyledTracksCard } from '../../styles'
import { formatDuration } from '../../utils'

export default function TracksCard({ track, length }) {
    return (
        <Link style={{ textDecoration: 'none' }} to={`/tracks/${track.id}`}>
            <StyledTracksCard>
                <ul className="container">
                    <li className='track'>
                        <span className='track__item__num'>{length}</span>
                        <div className="track__details">
                            <img className='track__img' src={track.album?.images[0]?.url} alt="album-avatar" />
                            <div className="track__details__info">
                                <p className="track__title">{track.name}</p>
                                <span className="track__artists">
                                    {track?.artists?.map((artist, i) => {
                                        return (
                                            <p key={i} className='track__artist'>
                                                {artist.name}{i !== track.artists.length - 1 && ', '}
                                            </p>
                                        )
                                    })}
                                </span>
                            </div>
                        </div>
                        <p className="track__album">{track.album?.name}</p>
                        <p className="track__duration">{formatDuration(track?.duration_ms)}</p>
                    </li>
                </ul>
            </StyledTracksCard>
        </Link >
    )
}
