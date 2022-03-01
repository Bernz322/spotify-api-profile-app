import React from 'react'
import { Link } from 'react-router-dom'

import { StyledHeader } from "../styles"

export default function AlbumHeader({ albumData }) {
    return (
        <>
            {albumData &&
                <StyledHeader type="playlist">
                    <div className="header__inner">
                        <img className="header__img" src={albumData.images[0].url} alt="Avatar" />
                        <div>
                            <div className="header__profile">{albumData.type}</div>
                            <h1 className="header__username"><a href={albumData.external_urls.spotify} target="_blank" rel="noreferrer">{albumData.name}</a></h1>
                            <p className="header__details">
                                <span className='header__name'>
                                    {albumData.artists.map((artist, i) => {
                                        return (
                                            <Link to={`/artists/${artist.id}`} key={i} className='artist__link'>
                                                {artist.name}{i !== albumData.artists.length - 1 && ', '}
                                            </Link>
                                        )
                                    })}
                                </span>
                                <span>
                                    {albumData.popularity}% Popularity
                                </span>
                                <span>
                                    {albumData.total_tracks} song{albumData.total_tracks > 1 ? 's' : ''}
                                </span>
                            </p>
                        </div>
                    </div>
                </StyledHeader>}
        </>
    )
}
