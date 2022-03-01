import React from 'react'
import { Link } from "react-router-dom";

import { StyledCards } from '../../styles'

export default function ArtistsCard({ playlist, type }) {
    return (
        <>
            {type === "album" ?
                <Link style={{ textDecoration: 'none' }} to={`/albums_singles/${playlist.id}`}>
                    <StyledCards >
                        <img src={playlist.images[0]?.url} alt="playlist" />
                        <h4 className='artist__name'>{playlist.name.substring(0, 22)}{playlist.name.length > 17 ? "..." : ""}</h4>
                        <div className="header__details">
                            <span>{playlist.album_type}</span>
                            <span>{playlist.release_date.slice(0, 4)}</span>
                        </div>
                    </StyledCards>
                </Link>
                :
                <Link style={{ textDecoration: 'none' }} to={`/playlists/${playlist.id}`}>
                    <StyledCards >
                        <img src={playlist.images[0]?.url} alt="playlist" />
                        <h4 className='artist__name'>{playlist.name.substring(0, 22)}{playlist.name.length > 17 ? "..." : ""}</h4>
                    </StyledCards>
                </Link>}
        </>
    )
}
