import React from 'react'

import { StyledHeader } from "../styles"

export default function PlaylistHeader({ playlistData }) {
    return (
        <>
            {playlistData &&
                <StyledHeader type="playlist">
                    <div className="header__inner">
                        <img className="header__img" src={playlistData.images[0].url} alt="Avatar" />
                        <div>
                            <div className="header__profile">Playlist</div>
                            <h1 className="header__username"><a href={playlistData.external_urls.spotify} target="_blank" rel="noreferrer">{playlistData.name}</a></h1>
                            <p className="header__details">
                                <span className='header__name'>
                                    <a href={playlistData.owner.external_urls.spotify} target="_blank" rel="noreferrer">{playlistData.owner.display_name}</a>
                                </span>
                                <span>
                                    {playlistData.followers.total} Follower{playlistData.followers.total > 1 ? 's' : ''}
                                </span>
                                <span>
                                    {playlistData.tracks.total} song{playlistData.tracks.total > 1 ? 's' : ''}
                                </span>
                            </p>
                        </div>
                    </div>
                </StyledHeader>}
        </>
    )
}
