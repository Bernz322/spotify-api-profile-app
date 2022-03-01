import React from 'react'
import { Link } from "react-router-dom";

import { StyledTracksCard } from '../../styles'
import { formatDuration } from '../../utils'

export default function AlbumTracksCard({ track, length, albumData }) {
    return (
        <Link style={{ textDecoration: 'none' }} to={`/tracks/${track.id}`}>
            <StyledTracksCard>
                <li className='track container'>
                    <span className='track__item__num'>{length}</span>
                    <div className="track__details">
                        <img className='track__img' src={albumData.images[0]?.url} alt="album-avatar" />
                        <div className="track__details__info">
                            <p className="track__title">{track.name}</p>
                            <div style={{ display: "flex" }}>
                                {track.artists.map((artist, i) => {
                                    return (
                                        <p key={i} className='track__artist'>
                                            {artist.name}{i !== track.artists.length - 1 && ', '}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <p className="track__album" style={{textAlign:"center"}}>{track.explicit ? "Yes" : "No"}</p>
                    <p className="track__duration">{formatDuration(track.duration_ms)}</p>
                </li>
            </StyledTracksCard>
        </Link >
    )
}

